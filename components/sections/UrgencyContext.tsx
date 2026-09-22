import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"

export function UrgencyContext({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-graphite)] py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--gc-ink)] sm:text-3xl">
            {dict.urgency.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--gc-metal-gray)] sm:text-base">
            {dict.urgency.body}
          </p>
        </div>
        <div className="rounded-[var(--gc-radius-md)] border border-black/10 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--gc-amber)]">
            {dict.urgency.checklistHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--gc-ink)]">
            {dict.urgency.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-[var(--gc-glass-blue)]">
                  &#8250;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
