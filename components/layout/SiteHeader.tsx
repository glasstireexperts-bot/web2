import Link from "next/link"
import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { CallButton } from "@components/ui/CallButton"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

export function SiteHeader({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[var(--gc-warm-white)]/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={dict.path} className="text-sm font-bold tracking-tight text-[var(--gc-ink)]">
          {business.brand.value}
        </Link>
        <div className="hidden items-center gap-4 text-xs text-[var(--gc-metal-gray)] sm:flex">
          <span>{dict.header.locationLabel}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{dict.header.hoursLabel}</span>
        </div>
        <nav className="flex items-center gap-3" aria-label="Language">
          <Link
            href={dict.header.languageSwitchHref}
            className="text-xs font-semibold text-[var(--gc-metal-gray)] underline-offset-4 hover:text-[var(--gc-amber)] hover:underline"
          >
            {dict.header.languageSwitchTo}
          </Link>
          {whatsappReady ? (
            <WhatsAppButton
              whatsappDisplay={business.whatsapp.value}
              label={dict.header.whatsappLabel}
              variant="secondary"
              className="hidden sm:inline-flex"
            />
          ) : null}
          {phoneReady ? (
            <CallButton phoneDisplay={business.phone.value} label={dict.header.callLabel} variant="primary" />
          ) : (
            <span className="text-xs font-medium text-[var(--gc-metal-gray)]">
              {dict.locale === "es-US" ? "Telefono proximamente" : "Phone coming soon"}
            </span>
          )}
        </nav>
      </Container>
    </header>
  )
}
