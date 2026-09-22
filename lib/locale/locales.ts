import type { Locale } from "@content/types"
import { enUS } from "@content/en-US"
import { esUS } from "@content/es-US"

export const dictionaries: Record<"/" | "/es", typeof enUS> = {
  "/": enUS,
  "/es": esUS,
}

export function getDictionary(path: "/" | "/es") {
  return dictionaries[path]
}

export const locales: Locale[] = ["en-US", "es-US"]
export const defaultLocale: Locale = "en-US"
