import { constDesigns } from "@/constants/cs_main";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://designer-portfolio-rust.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://designer-portfolio-rust.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://designer-portfolio-rust.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://designer-portfolio-rust.vercel.app/photos",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://designer-portfolio-rust.vercel.app/design",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...constDesigns.tabs.web.map((design: any) => ({
      url: `https://designer-portfolio-rust.vercel.app/web/${design.id}`,
      lastModified: new Date(),
      changeFrequency: "never" as any,
      priority: 0.5,
    })),
    ...constDesigns.tabs.logo.map((design: any) => ({
      url: `https://designer-portfolio-rust.vercel.app/logo/${design.id}`,
      lastModified: new Date(),
      changeFrequency: "never" as any,
      priority: 0.5,
    })),
    ...constDesigns.tabs.plakat.map((design: any) => ({
      url: `https://designer-portfolio-rust.vercel.app/plakat/${design.id}`,
      lastModified: new Date(),
      changeFrequency: "never" as any,
      priority: 0.5,
    })),
  ];
}
