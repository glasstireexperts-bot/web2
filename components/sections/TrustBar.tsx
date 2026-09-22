import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"

export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-black/5 bg-[var(--gc-graphite-soft)] py-8">
      <Container>
        <ul className="grid grid-cols-1 gap-4 text-sm text-[var(--gc-ink)] sm:grid-cols-2 lg:grid-cols-4">
          {dict.trustBar.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-0.5 text-[var(--gc-amber)]">
                &#10003;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-[var(--gc-metal-gray)]">{dict.trustBar.processLine}</p>
      </Container>
    </section>
  )
}
