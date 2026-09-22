import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { CallButton } from "@components/ui/CallButton"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

export function Hero({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  return (
    <section className="relative overflow-hidden bg-[var(--gc-warm-white)] py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 55%, rgba(200,30,44,0.06) 55%, rgba(200,30,44,0.06) 57%, transparent 57%), linear-gradient(115deg, transparent 0%, transparent 70%, rgba(200,30,44,0.04) 70%, rgba(200,30,44,0.04) 72%, transparent 72%)",
        }}
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gc-amber-strong)]">
            {dict.header.locationLabel}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[var(--gc-ink)] sm:text-5xl">
            {dict.hero.h1}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--gc-metal-gray)] sm:text-lg">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {phoneReady ? (
              <CallButton phoneDisplay={business.phone.value} label={dict.hero.ctaPrimary} variant="primary" />
            ) : null}
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-[var(--gc-radius-sm)] border border-[var(--gc-metal-gray)] px-5 py-3 text-sm font-semibold text-[var(--gc-ink)] transition-colors hover:border-[var(--gc-amber)] hover:text-[var(--gc-amber)]"
            >
              {dict.hero.ctaSecondary}
            </a>
            {whatsappReady ? (
              <WhatsAppButton whatsappDisplay={business.whatsapp.value} label={dict.header.whatsappLabel} variant="secondary" />
            ) : null}
            {!phoneReady && !whatsappReady ? (
              <span className="text-xs font-medium text-[var(--gc-metal-gray)]">
                {dict.locale === "es-US" ? "Telefono y WhatsApp proximamente" : "Phone and WhatsApp coming soon"}
              </span>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
