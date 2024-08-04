import { constDesigns } from "@/constants/cs_main";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://unset/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...constDesigns.tabs.web.map((design: any) => ({
      url: "https://unset/",
      lastModified: new Date(),
      changeFrequency: "never" as any,
      priority: 0.5,
    })),
  ];
}
