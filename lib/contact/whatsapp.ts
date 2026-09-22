export function toWhatsAppHref(whatsappDisplay: string, message?: string): string {
  const digits = whatsappDisplay.replace(/[^\d]/g, "")
  const text = message ? `?text=${encodeURIComponent(message)}` : ""
  return `https://wa.me/${digits}${text}`
}
