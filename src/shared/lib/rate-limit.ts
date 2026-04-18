type Entry = {
  count: number;
  lastRequest: number;
};

const store = new Map<string, Entry>();

const WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;

export function rateLimit(ip: string) {
  const now = Date.now();

  const entry = store.get(ip);

  if (!entry) {
    store.set(ip, { count: 1, lastRequest: now });
    return { success: true };
  }

  if (now - entry.lastRequest > WINDOW) {
    store.set(ip, { count: 1, lastRequest: now });
    return { success: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false };
  }

  entry.count++;
  store.set(ip, entry);

  return { success: true };
}
