import type { Dictionary } from "@content/types"
import { SiteHeader } from "@components/layout/SiteHeader"
import { SiteFooter } from "@components/layout/SiteFooter"
import { MobileCallBar } from "@components/layout/MobileCallBar"
import { LocaleHtmlSync } from "@components/layout/LocaleHtmlSync"
import { Hero } from "@components/sections/Hero"
import { TrustBar } from "@components/sections/TrustBar"
import { Services } from "@components/sections/Services"
import { Gallery } from "@components/sections/Gallery"
import { UrgencyContext } from "@components/sections/UrgencyContext"
import { Process } from "@components/sections/Process"
import { Differentiators } from "@components/sections/Differentiators"
import { Shop } from "@components/sections/Shop"
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
 */
export function HomeSections({ dict }: { dict: Dictionary }) {
  return (
    <>
      {dict.locale === "es-US" ? <LocaleHtmlSync lang="es-US" /> : null}
      <SiteHeader dict={dict} />
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero dict={dict} />
        <Reveal><TrustBar dict={dict} /></Reveal>
        <Reveal><Services dict={dict} /></Reveal>
        <Reveal><Gallery dict={dict} /></Reveal>
        <Reveal><UrgencyContext dict={dict} /></Reveal>
        <Reveal><Process dict={dict} /></Reveal>
        <Reveal><Differentiators dict={dict} /></Reveal>
        <Reveal><Shop dict={dict} /></Reveal>
        <Reveal><Reviews dict={dict} /></Reveal>
        <Reveal><ServiceArea dict={dict} /></Reveal>
        <Reveal><Faq dict={dict} /></Reveal>
        <Reveal><FinalCta dict={dict} /></Reveal>
      </main>
      <SiteFooter dict={dict} />
      <MobileCallBar dict={dict} />
    </>
  )
}
