import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

export function Differentiators({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-graphite-soft)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.differentiators.heading} tone="light" />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {dict.differentiators.items.map((item) => (
            <li
              key={item}
              className="rounded-[var(--gc-radius-md)] border border-black/10 bg-white p-4 text-sm text-[var(--gc-ink)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-[var(--gc-metal-gray)]/80">{dict.differentiators.disclaimer}</p>
      </Container>
    </section>
  )
}
