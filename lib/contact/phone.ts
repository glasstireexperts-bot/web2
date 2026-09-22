/**
 * Construye un enlace tel: seguro a partir del telefono en content/business.ts.
 * No usar el numero directamente en componentes: siempre pasar por aqui.
 */
export function toTelHref(phoneDisplay: string): string {
  const digits = phoneDisplay.replace(/[^\d+]/g, "")
  return `tel:${digits}`
}

export function formatPhoneDisplay(phoneDisplay: string): string {
  return phoneDisplay.trim()
}
