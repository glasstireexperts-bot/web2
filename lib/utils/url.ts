/**
 * URL base del sitio (dominio confirmado, ver content/business.ts).
 * Se usa aqui como URL de produccion para metadata/canonical/JSON-LD.
 */
export const SITE_URL = "https://oscarautoglass.com"

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${clean}`
}
