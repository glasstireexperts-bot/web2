import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-warm-white)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.process.heading} tone="light" />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <li key={step.title} className="rounded-[var(--gc-radius-md)] border border-black/5 bg-white p-5">
              <span className="text-xs font-bold text-[var(--gc-amber-strong)]">0{i + 1}</span>
              <h3 className="mt-2 text-sm font-semibold text-[var(--gc-ink)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--gc-ink)]/75">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-[var(--gc-ink)]/60">{dict.process.disclaimer}</p>
      </Container>
    </section>
  )
}
