import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { jobs, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/government-jobs", "/application-forms", "/careers", "/our-motivation", "/faq", "/contact", "/assistance", "/privacy-policy", "/terms-and-conditions", "/disclaimer"];
  const routes = [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.siteUrl}${route}`, lastModified: new Date() })),
    ...jobs.map((job) => ({ url: `${siteConfig.siteUrl}/government-jobs/${job.slug}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${siteConfig.siteUrl}/services#${service.slug}`, lastModified: new Date() }))
  ];
  return routes;
}
