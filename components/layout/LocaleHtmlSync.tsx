"use client"

import { useEffect } from "react"

/**
 * El root layout unico declara <html lang="en-US"> porque Next.js App Router
 * solo permite un layout raiz para las rutas estaticas "/" y "/es" (no se usa
 * un segmento dinamico [locale]). Este componente corrige el atributo lang en
 * el cliente para /es. Limitacion conocida y documentada en
 * docs/SEO_CHECKLIST.md: un crawler que no ejecute JS vera lang="en-US" en el
 * HTML inicial de /es. hreflang, canonical y el contenido visible SI son
 * correctos de forma estatica, sin depender de este componente.
 */
export function LocaleHtmlSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
    return () => {
      document.documentElement.lang = "en-US"
    }
  }, [lang])
  return null
}
