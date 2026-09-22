import type { Metadata } from "next"
import type { Dictionary } from "@content/types"
import { absoluteUrl } from "@lib/utils/url"
import { business } from "@content/business"

export function buildMetadata(dict: Dictionary): Metadata {
  const canonical = absoluteUrl(dict.path === "/" ? "/" : dict.path)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical,
      languages: {
        "en-US": absoluteUrl("/"),
        "es-US": absoluteUrl("/es"),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      siteName: business.brand.value,
      locale: dict.locale,
      type: "website",
    },
  }
}
