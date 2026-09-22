import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

/**
 * Seccion "Instalaciones" — tarjetas fotograficas cinematograficas
 * (fachada, area de trabajo, equipo). La foto de "team" es generica y no
 * identifica a nadie — la etiqueta "Oscar & team" en dict.shop.items no
 * implica que la persona en la imagen sea Oscar. Imagenes en
 * /public/images/{storefront,workbay,team}.png — ver docs/ASSET_REGISTER.md
 * para el estado real de cada foto (uso interno, no se muestra en la UI).
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
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-[var(--gc-warm-white)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
