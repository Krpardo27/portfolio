import { MetadataRoute } from "next";

const BASE_URL = "https://portfolio-kpardo.kevcodesdev.cl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
