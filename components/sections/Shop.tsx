import type { ReactElement } from "react"
import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"
import { DemoNoticeBadge } from "@components/ui/DemoNoticeBadge"

/**
 * Iconos placeholder para la seccion "Shop" (fachada, area de trabajo, equipo).
 * No son fotos reales del negocio — ver dict.shop.disclaimer y
 * docs/ASSET_REGISTER.md. Se reemplazan por fotografia real antes de publicar.
 * Objetivo de la seccion: dar un respiro visual entre bloques de texto
 * (Differentiators / Reviews) y anticipar el mismo set de fotos que ya pide
 * el checklist de Google Business Profile (fachada, area de trabajo, equipo).
 */
function StorefrontIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10">
      <path d="M10 26 L10 52 L54 52 L54 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 26 L32 12 L56 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="27" y="38" width="10" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 32 L24 32" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M40 32 L48 32" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}

function WorkBayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10">
      <rect x="8" y="18" width="48" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 30 L56 30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="20" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="44" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M26 12 L30 18 M34 12 L30 18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10">
      <circle cx="24" cy="22" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 48 Q12 34 24 34 Q36 34 36 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="44" cy="26" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path d="M35 50 Q35 39 44 39 Q53 39 53 50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" strokeLinejoin="round" />
    </svg>
  )
}

const SHOP_ICONS: Record<string, () => ReactElement> = {
  storefront: StorefrontIcon,
  "work-bay": WorkBayIcon,
  team: TeamIcon,
}

export function Shop({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-graphite)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.shop.heading} tone="light" />
        <p className="mb-8 max-w-2xl text-sm text-[var(--gc-metal-gray)]">{dict.shop.intro}</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {dict.shop.items.map((item) => {
            const Icon = SHOP_ICONS[item.id] ?? StorefrontIcon
            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center gap-3 rounded-[var(--gc-radius-md)] border border-black/10 bg-white px-4 py-10 text-center"
              >
                <DemoNoticeBadge text="DEMO" />
                <span className="text-[var(--gc-amber)]">
                  <Icon />
                </span>
                <p className="text-xs font-medium text-[var(--gc-ink)]">{item.label}</p>
              </div>
            )
          })}
        </div>
        <p className="mt-6 text-xs text-[var(--gc-metal-gray)]">{dict.shop.disclaimer}</p>
      </Container>
    </section>
  )
}
