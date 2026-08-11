import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gbhopal.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://gbhopal.com/projects/cultur3",
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
