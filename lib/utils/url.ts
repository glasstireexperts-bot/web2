/**
 * URL base del sitio. El dominio glasscollision.com esta PENDIENTE de
 * compra (ver content/business.ts). Se usa aqui como URL de produccion
 * planeada para metadata/canonical/JSON-LD; no implica que ya este activo.
 */
export const SITE_URL = "https://glasscollision.com"

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${clean}`
}
