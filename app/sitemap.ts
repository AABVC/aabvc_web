import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aabvc.com",
      lastModified: new Date(),
    },
    {
      url: "https://aabvc.com/demo",
      lastModified: new Date(),
    },
  ];
}
