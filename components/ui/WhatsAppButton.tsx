import { toWhatsAppHref } from "@lib/contact/whatsapp"

export function WhatsAppButton({
  whatsappDisplay,
  label,
  message,
  variant = "primary",
  className = "",
}: {
  whatsappDisplay: string
  label: string
  message?: string
  variant?: "primary" | "secondary"
  className?: string
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--gc-radius-sm)] px-5 py-3 text-sm font-semibold transition-transform duration-150 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gc-amber)]"
  const styles =
    variant === "primary"
      ? "bg-[#25D366] text-[#0b1a10] hover:brightness-95"
      : "border border-[var(--gc-metal-gray)] text-[var(--gc-ink)] hover:border-[#25D366] hover:text-[#25D366]"
  return (
    <a
      href={toWhatsAppHref(whatsappDisplay, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2C6.48 2 2 6.35 2 11.7c0 1.98.62 3.82 1.68 5.36L2.4 22l5.13-1.3a10.3 10.3 0 0 0 4.47 1c5.52 0 10-4.35 10-9.7S17.52 2 12 2Zm0 17.6c-1.42 0-2.78-.38-3.96-1.1l-.28-.17-3.05.78.8-2.97-.18-.3A7.86 7.86 0 0 1 4.2 11.7c0-4.27 3.5-7.73 7.8-7.73s7.8 3.46 7.8 7.73-3.5 7.9-7.8 7.9Zm4.3-5.8c-.24-.12-1.4-.7-1.62-.77-.22-.08-.37-.12-.53.12-.15.23-.6.77-.74.93-.14.15-.27.17-.5.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.23-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.15.04-.29-.02-.4-.06-.12-.53-1.28-.72-1.76-.19-.46-.38-.4-.53-.4h-.45c-.15 0-.4.06-.6.29-.2.23-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.62 2.5 3.94 3.5.55.24.98.38 1.31.48.55.17 1.06.15 1.45.09.44-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      {label}
    </a>
  )
}
