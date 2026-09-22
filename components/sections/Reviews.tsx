import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 text-[var(--gc-amber)]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.47 5.6 6.03.53-4.58 4.02 1.38 5.9L10 14.62l-5.3 2.93 1.38-5.9L1.5 7.63l6.03-.53z" />
        </svg>
      ))}
    </div>
  )
}

function initialFrom(name: string) {
  return name.trim().charAt(0).toUpperCase()
}

export function Reviews({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-warm-white)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.reviews.heading} tone="light" />
        <p className="mb-8 max-w-2xl text-sm text-[var(--gc-ink)]/75">{dict.reviews.intro}</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {dict.reviews.items.map((review, i) => (
            <div
              key={review.author}
              className={`rounded-[var(--gc-radius-lg)] border border-black/5 bg-white p-6 shadow-sm ${
                i === 1 ? "sm:-translate-y-3 sm:shadow-md" : ""
              }`}
            >
              <span aria-hidden="true" className="text-4xl font-serif leading-none text-[var(--gc-amber)]/30">
                &ldquo;
              </span>
              <StarRow />
              <p className="mt-3 text-sm leading-relaxed text-[var(--gc-ink)]/85">{review.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gc-graphite)] text-sm font-semibold text-[var(--gc-amber-strong)]">
                  {initialFrom(review.author)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--gc-ink)]">{review.author}</p>
                  <p className="text-xs text-[var(--gc-metal-gray)]">{review.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
