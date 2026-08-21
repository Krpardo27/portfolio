import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Entry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, Entry>();

const WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const UPSTASH_ENABLED = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

let upstashRateLimit: Ratelimit | null = null;

function getUpstashRateLimit() {
  if (!UPSTASH_ENABLED) return null;

  upstashRateLimit ??= new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(MAX_REQUESTS_PER_WINDOW, "1 m"),
    analytics: true,
    prefix: "contact-form",
  });

  return upstashRateLimit;
}

export async function rateLimit(identifier: string) {
  const upstash = getUpstashRateLimit();

  if (upstash) {
    const result = await upstash.limit(identifier);
    return {
      success: result.success,
      remaining: result.remaining,
      reset: result.reset,
    };
  }

  const now = Date.now();
  const resetAt = now + WINDOW;

  const entry = store.get(identifier);

  if (!entry) {
    store.set(identifier, { count: 1, resetAt });
    return {
      success: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      reset: resetAt,
    };
  }

  if (now > entry.resetAt) {
    store.set(identifier, { count: 1, resetAt });
    return {
      success: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      reset: resetAt,
    };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return { success: false, remaining: 0, reset: entry.resetAt };
  }

  entry.count++;
  store.set(identifier, entry);

  return {
    success: true,
    remaining: MAX_REQUESTS_PER_WINDOW - entry.count,
    reset: entry.resetAt,
  };
}
