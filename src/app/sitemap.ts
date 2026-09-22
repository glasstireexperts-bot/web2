import type { MetadataRoute } from "next"
import { SITE_URL } from "@lib/utils/url"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified, alternates: { languages: { "en-US": `${SITE_URL}/`, "es-US": `${SITE_URL}/es` } } },
    { url: `${SITE_URL}/es`, lastModified, alternates: { languages: { "en-US": `${SITE_URL}/`, "es-US": `${SITE_URL}/es` } } },
  ]
}
