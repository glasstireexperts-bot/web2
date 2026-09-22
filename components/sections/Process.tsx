import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

/**
 * "Como funciona" como banda cinematografica: foto de referencia de fondo
 * (/public/images/workbay.png) + scrim vertical para legibilidad. Contenido
 * identico a dict.process — solo cambia el tratamiento visual respecto a la
 * version de tarjetas planas anterior.
 */
export function Process({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/workbay.png)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 gc-scrim-vertical" />
      <div aria-hidden="true" className="gc-grain" />
      <Container className="relative">
        <SectionHeading heading={dict.process.heading} tone="dark" />
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-[var(--gc-radius-md)] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm"
            >
              <span className="text-xs font-bold text-[var(--gc-amber)]">0{i + 1}</span>
              <h3 className="mt-2 text-sm font-semibold text-[var(--gc-warm-white)]">{step.title}</h3>
              <p className="mt-2 text-sm text-white/75">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {phoneReady ? (
            <a
              href={`tel:${business.phone.value.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center rounded-[var(--gc-radius-sm)] bg-[var(--gc-amber)] px-5 py-3 text-sm font-semibold text-[var(--gc-warm-white)] transition-colors hover:bg-[var(--gc-amber-strong)]"
            >
              {dict.process.ctaLabel}
            </a>
          ) : null}
          {whatsappReady ? (
            <WhatsAppButton whatsappDisplay={business.whatsapp.value} label={dict.header.whatsappLabel} variant="primary" />
          ) : null}
          <p className="text-xs text-white/60">{dict.process.disclaimer}</p>
        </div>
      </Container>
    </section>
  )
}
