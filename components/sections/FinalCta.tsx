import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

export function FinalCta({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  return (
    <section className="bg-[var(--gc-amber)] py-14">
      <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[var(--gc-warm-white)] sm:text-2xl">{dict.finalCta.heading}</h2>
          <p className="mt-2 text-sm text-[var(--gc-warm-white)]/85">{dict.finalCta.body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {phoneReady ? (
            <a
              href={`tel:${business.phone.value.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center rounded-[var(--gc-radius-sm)] bg-[var(--gc-warm-white)] px-5 py-3 text-sm font-semibold text-[var(--gc-amber)] transition-transform active:scale-[0.97]"
            >
              {dict.finalCta.ctaPrimary}
            </a>
          ) : null}
          {whatsappReady ? (
            <WhatsAppButton whatsappDisplay={business.whatsapp.value} label={dict.finalCta.ctaWhatsapp} variant="primary" />
          ) : null}
          {!phoneReady && !whatsappReady ? (
            <span className="text-sm font-medium text-[var(--gc-warm-white)]/85">
              {dict.locale === "es-US" ? "Contacto disponible proximamente" : "Contact details coming soon"}
            </span>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
