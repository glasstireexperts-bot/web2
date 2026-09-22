import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"
import { DemoNoticeBadge } from "@components/ui/DemoNoticeBadge"

/**
 * Icono generico de "vidrio de auto" usado como ilustracion placeholder.
 * No es una foto real del negocio ni del equipo — ver dict.gallery.disclaimer
 * y docs/ASSET_REGISTER.md. Se reemplaza por fotografia real antes de publicar.
 */
function GlassIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10">
      <path
        d="M8 20 L32 10 L56 20 L52 40 Q32 50 12 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 24 L48 24" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M20 30 L44 30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M24 36 L40 36" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    </svg>
  )
}

export function Gallery({ dict }: { dict: Dictionary }) {
  return (
    <section id="gallery" className="bg-[var(--gc-graphite)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.gallery.heading} tone="light" />
        <p className="mb-8 max-w-2xl text-sm text-[var(--gc-metal-gray)]">{dict.gallery.intro}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {dict.gallery.items.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center justify-center gap-3 rounded-[var(--gc-radius-md)] border border-black/10 bg-white px-4 py-8 text-center"
            >
              <DemoNoticeBadge text="DEMO" />
              <span className="text-[var(--gc-amber)]">
                <GlassIcon />
              </span>
              <p className="text-xs font-medium text-[var(--gc-ink)]">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-[var(--gc-metal-gray)]">{dict.gallery.disclaimer}</p>
      </Container>
    </section>
  )
}
