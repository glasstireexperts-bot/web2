# Arquitectura — glass-tire-experts

## Stack real (verificado en package.json, 2026-08-28)
- Next.js 16.3.3 (App Router, Turbopack)
- React 19.2.8
- TypeScript ^5 (strict)
- Tailwind CSS ^4
- ESLint ^9

## Decision: carpetas de negocio en la raiz, no en src/
Siguiendo el Documento 2 / nota Obsidian "01 MAPS 2.0 — Alcance, fuentes y reglas":
content/, components/, lib/, styles/, types/ viven en la RAIZ del proyecto web,
no dentro de src/. src/app/ contiene solo rutas. Alias de import agregados en
tsconfig.json: @content/*, @components/*, @lib/*, @styles/*, @ctypes/* (ademas
del @/* -> ./src/* que create-next-app genera por defecto).

## Rutas
- src/app/layout.tsx — root layout unico (html lang="en-US" por defecto).
- src/app/(marketing)/layout.tsx — layout de marketing, pass-through.
- src/app/(marketing)/page.tsx — Home en ingles, ruta "/".
- src/app/(marketing)/es/page.tsx — Home en espanol, ruta "/es".
- src/app/api/health/route.ts — healthcheck.
- src/app/robots.ts, src/app/sitemap.ts — SEO tecnico global.
- src/app/(marketing)/icon.tsx, opengraph-image.tsx — imagenes generadas via next/og.

## Decision: atributo lang en /es (limitacion conocida)
Next.js App Router permite un solo root layout para rutas estaticas "/" y "/es"
(no se uso un segmento dinamico [locale] porque el encargo pedia exactamente
"/" y "/es/", no un esquema simetrico). El root layout declara lang="en-US".
components/layout/LocaleHtmlSync.tsx corrige el atributo en el cliente para
/es via useEffect. El HTML inicial (antes de hidratar) de /es sigue mostrando
lang="en-US" — limitacion real, documentada, no oculta. canonical, hreflang y
el contenido visible SI son correctos de forma estatica en ambas rutas.
Alternativa mas correcta para el futuro: migrar a app/[locale]/... con
next-intl o similar si el cliente crece a mas de dos idiomas o rutas.

## Decision: sin next/font/google
El entorno de build usado no tiene salida de red hacia fonts.googleapis.com
(EPERM/timeout al intentar traer Geist). Se removio next/font/google y se usa
la pila de fuentes del sistema (ui-sans-serif, system-ui, -apple-system,
"Segoe UI", Roboto, sans-serif) via styles/tokens.css. Esto tambien evita una
dependencia de red en cada build futuro de cualquier cliente de MAPS 2.0 —
vale la pena revisar si el sistema general (scripts/bootstrap-client.sh) debe
dejar de usar next/font/google por defecto.

## Fuente unica de datos
content/business.ts: NAP y datos operativos, cada campo con status
(confirmed | observed_public | pending | placeholder | do_not_publish).
lib/seo/jsonld.ts excluye automaticamente todo campo pending/placeholder del
JSON-LD. Nunca hardcodear telefono/direccion/horario directamente en un
componente: siempre importar de content/business.ts.

## Componentes
- components/ui/*: primitivas (Container, SectionHeading, CallButton, Badge,
  DemoNoticeBadge).
- components/layout/*: SiteHeader, SiteFooter, MobileCallBar, LocaleHtmlSync.
- components/sections/*: las 10 secciones de la Home (Hero, TrustBar,
  Services, UrgencyContext, Process, Differentiators, Reviews, ServiceArea,
  Faq, FinalCta).
- components/HomeSections.tsx: ensamblaje unico reutilizado por ambas rutas.
