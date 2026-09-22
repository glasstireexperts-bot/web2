import type { Dictionary } from "@content/types"
import { SiteHeader } from "@components/layout/SiteHeader"
import { SiteFooter } from "@components/layout/SiteFooter"
import { MobileCallBar } from "@components/layout/MobileCallBar"
import { FloatingCta } from "@components/layout/FloatingCta"
import { LocaleHtmlSync } from "@components/layout/LocaleHtmlSync"
import { Hero } from "@components/sections/Hero"
import { TrustBar } from "@components/sections/TrustBar"
import { UrgencyContext } from "@components/sections/UrgencyContext"
import { Services } from "@components/sections/Services"
import { Process } from "@components/sections/Process"
import { Shop } from "@components/sections/Shop"
import { Differentiators } from "@components/sections/Differentiators"
import { Guarantee } from "@components/sections/Guarantee"
import { Reviews } from "@components/sections/Reviews"
import { ServiceArea } from "@components/sections/ServiceArea"
import { Faq } from "@components/sections/Faq"
import { FinalCta } from "@components/sections/FinalCta"
import { Reveal } from "@components/ui/Reveal"

/**
 * Ensamblaje unico de la Home. Ambas rutas (/ y /es) reutilizan este
 * componente con su propio diccionario — no se duplica estructura.
 * El Hero no lleva Reveal (es lo primero que se ve, sin scroll de por medio);
 * el resto entra con una animacion de aparicion breve al hacer scroll.
 *
 * Orden y estructura DELIBERADAMENTE distintos de DC Glass Collision
 * (2026-09-22, pedido explicito de Lups: "cambia todo diseno, que se vea
 * como un taller de pelicula"): urgencia sube antes que el catalogo de
 * servicios, el proceso y las instalaciones usan fotografia + scrim en vez
 * de iconos planos, y se agrego una banda de garantia con su propio CTA a
 * media pagina. La antigua seccion Gallery (icono generico repitiendo la
 * lista de servicios) se retiro del flujo por redundante frente a Services
 * y Shop — el archivo se deja sin usar por si se recupera contenido de ahi.
 */
export function HomeSections({ dict }: { dict: Dictionary }) {
  return (
    <>
      {dict.locale === "es-US" ? <LocaleHtmlSync lang="es-US" /> : null}
      <SiteHeader dict={dict} />
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero dict={dict} />
        <Reveal><TrustBar dict={dict} /></Reveal>
        <Reveal><UrgencyContext dict={dict} /></Reveal>
        <Reveal><Services dict={dict} /></Reveal>
        <Reveal><Process dict={dict} /></Reveal>
        <Reveal><Shop dict={dict} /></Reveal>
        <Reveal><Differentiators dict={dict} /></Reveal>
        <Reveal><Guarantee dict={dict} /></Reveal>
        <Reveal><Reviews dict={dict} /></Reveal>
        <Reveal><ServiceArea dict={dict} /></Reveal>
        <Reveal><Faq dict={dict} /></Reveal>
        <Reveal><FinalCta dict={dict} /></Reveal>
      </main>
      <SiteFooter dict={dict} />
      <MobileCallBar dict={dict} />
      <FloatingCta dict={dict} />
    </>
  )
}
