import { toTelHref } from "@lib/contact/phone"

export function CallButton({
  phoneDisplay,
  label,
  variant = "primary",
  className = "",
}: {
  phoneDisplay: string
  label: string
  variant?: "primary" | "secondary"
  className?: string
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--gc-radius-sm)] px-5 py-3 text-sm font-semibold transition-transform duration-150 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gc-amber)]"
  const styles =
    variant === "primary"
      ? "bg-[var(--gc-amber)] text-[var(--gc-warm-white)] hover:bg-[var(--gc-amber-strong)]"
      : "border border-[var(--gc-metal-gray)] text-[var(--gc-ink)] hover:border-[var(--gc-amber)] hover:text-[var(--gc-amber)]"
  return (
    <a href={toTelHref(phoneDisplay)} className={`${base} ${styles} ${className}`}>
      {label}
    </a>
  )
}
