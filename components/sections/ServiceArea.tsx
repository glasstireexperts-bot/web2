import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

export function ServiceArea({ dict }: { dict: Dictionary }) {
  const addressPublishable = business.address.status !== "pending" && business.address.status !== "placeholder"
  return (
    <section className="bg-[var(--gc-graphite)] py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading heading={dict.serviceArea.heading} tone="light" />
          {addressPublishable ? (
            <p className="text-sm text-[var(--gc-ink)]">
              {business.address.value.street}, {business.address.value.city}, {business.address.value.region}{" "}
              {business.address.value.postalCode}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-[var(--gc-metal-gray)]">{dict.serviceArea.coverageNote}</p>
          <p className="mt-4 text-xs text-[var(--gc-metal-gray)]/70">{dict.serviceArea.addressPendingNote}</p>
        </div>
        <div
          aria-hidden="true"
          className="flex h-48 items-center justify-center rounded-[var(--gc-radius-md)] border border-black/10 bg-white text-xs text-[var(--gc-metal-gray)]/80 lg:h-full"
        >
          Map placeholder — add verified Google Maps embed after GBP is confirmed
        </div>
      </Container>
    </section>
  )
}
