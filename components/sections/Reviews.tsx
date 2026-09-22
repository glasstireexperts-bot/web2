import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"
import { DemoNoticeBadge } from "@components/ui/DemoNoticeBadge"

export function Reviews({ dict }: { dict: Dictionary }) {
  const demoReviews = business.reviews.filter((r) => r.status === "placeholder")
  return (
    <section className="bg-[var(--gc-warm-white)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.reviews.heading} tone="light" />
        <p className="mb-6 max-w-2xl text-sm text-[var(--gc-ink)]/75">{dict.reviews.disclaimer}</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {demoReviews.map((review) => (
            <div
              key={review.id}
              className="relative rounded-[var(--gc-radius-md)] border border-dashed border-[var(--gc-glass-blue)]/60 bg-white p-5"
            >
              <DemoNoticeBadge text={dict.reviews.placeholderNote} />
              <p className="mt-4 text-sm italic text-[var(--gc-ink)]/70">
                &ldquo;Demo review copy — replace with a real, authorized review before publishing.&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold text-[var(--gc-ink)]/60">Demo customer</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
