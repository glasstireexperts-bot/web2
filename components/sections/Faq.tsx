import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-warm-white)] py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading heading={dict.faq.heading} tone="light" />
        <dl className="divide-y divide-black/10">
          {dict.faq.items.map((item) => (
            <div key={item.question} className="py-4">
              <dt className="text-sm font-semibold text-[var(--gc-ink)]">{item.question}</dt>
              <dd className="mt-2 text-sm text-[var(--gc-ink)]/75">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
