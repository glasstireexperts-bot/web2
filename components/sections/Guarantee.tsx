import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

/**
 * Banda de confianza + segundo punto de contacto CTA a media pagina (ademas
 * de Hero y FinalCta). Fondo tinta (--gc-ink) puntual — no todo el sitio —
 * para dar un respiro dramatico sin abandonar la base clara de Clean Slate.
 */
export function Guarantee({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  return (
    <section className="relative overflow-hidden bg-[var(--gc-ink)] py-16 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 gc-spotlight opacity-70" />
      <div aria-hidden="true" className="gc-grain" />
      <Container className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--gc-warm-white)] sm:text-3xl">
            {dict.guarantee.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{dict.guarantee.body}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dict.guarantee.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2 rounded-[var(--gc-radius-md)] border border-white/15 bg-white/[0.04] p-4 text-sm text-white/85"
            >
              <span aria-hidden="true" className="mt-0.5 text-[var(--gc-amber)]">
                &#10003;
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </Container>
      <Container className="relative mt-8 flex flex-wrap items-center gap-3">
        {phoneReady ? (
          <a
            href={`tel:${business.phone.value.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center justify-center rounded-[var(--gc-radius-sm)] bg-[var(--gc-amber)] px-5 py-3 text-sm font-semibold text-[var(--gc-warm-white)] transition-colors hover:bg-[var(--gc-amber-strong)]"
          >
            {dict.guarantee.ctaLabel}
          </a>
        ) : null}
        {whatsappReady ? (
          <WhatsAppButton whatsappDisplay={business.whatsapp.value} label={dict.header.whatsappLabel} variant="primary" />
        ) : null}
        {!phoneReady && !whatsappReady ? (
          <span className="text-xs font-medium text-white/60">
            {dict.locale === "es-US" ? "Contacto disponible proximamente" : "Contact details coming soon"}
          </span>
        ) : null}
      </Container>
    </section>
  )
}
