import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="bg-[var(--gc-warm-white)] py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={dict.hero.ctaSecondary} heading={dict.services.heading} tone="light" />
        <p className="mb-8 max-w-2xl text-sm text-[var(--gc-ink)]/80">{dict.services.intro}</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service) => (
            <article
              key={service.id}
              className="rounded-[var(--gc-radius-md)] border border-black/5 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-[var(--gc-ink)]">{service.title}</h3>
              <p className="mt-2 text-sm text-[var(--gc-ink)]/75">{service.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-[var(--gc-ink)]/60">{dict.services.pendingNote}</p>
      </Container>
    </section>
  )
}
