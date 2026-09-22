import Link from "next/link"
import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-black/5 bg-[var(--gc-graphite-soft)] py-10 text-[var(--gc-metal-gray)]">
      <Container className="flex flex-col gap-6 text-sm sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-[var(--gc-ink)]">{business.brand.value}</p>
          <p className="mt-1">{dict.footer.hoursLabel}</p>
          <p className="mt-1 text-xs text-[var(--gc-metal-gray)]/80">{dict.footer.addressPendingNote}</p>
        </div>
        <div className="flex flex-col gap-2">
          {dict.footer.languageLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--gc-amber)]">
              {l.label}
            </Link>
          ))}
          <span className="text-xs text-[var(--gc-metal-gray)]/70">{dict.footer.privacyLabel}</span>
        </div>
      </Container>
      <Container className="mt-8 border-t border-black/10 pt-4 text-xs text-[var(--gc-metal-gray)]/70">
        {dict.footer.attribution} &middot; {business.brand.value}
      </Container>
    </footer>
  )
}
