import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"
import { DemoNoticeBadge } from "@components/ui/DemoNoticeBadge"

/**
 * Seccion "Instalaciones" — tarjetas fotograficas cinematograficas
 * (fachada, area de trabajo, equipo). Fotos de referencia generadas,
 * NO son fotos reales del negocio ni de personas reales — ver
 * dict.shop.disclaimer y docs/ASSET_REGISTER.md. Imagenes esperadas en
 * /public/images/{storefront,workbay,team}.png. Reemplazar por fotografia
 * real antes de publicar. La etiqueta "Oscar & team" en dict.shop.items no
 * identifica a nadie en la imagen — la foto es generica.
 */
const SHOP_IMAGES: Record<string, string> = {
  storefront: "/images/storefront.png",
  "work-bay": "/images/workbay.png",
  team: "/images/team.png",
}

export function Shop({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--gc-warm-white)] py-16 sm:py-20">
      <Container>
        <SectionHeading heading={dict.shop.heading} tone="light" />
        <p className="mb-8 max-w-2xl text-sm text-[var(--gc-metal-gray)]">{dict.shop.intro}</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {dict.shop.items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-[var(--gc-radius-lg)] border border-black/10 bg-[var(--gc-graphite)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${SHOP_IMAGES[item.id] ?? SHOP_IMAGES.storefront})` }}
              />
              <div aria-hidden="true" className="absolute inset-0 gc-scrim-bottom" />
              <DemoNoticeBadge text="DEMO" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-[var(--gc-warm-white)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-[var(--gc-metal-gray)]">{dict.shop.disclaimer}</p>
      </Container>
    </section>
  )
}
