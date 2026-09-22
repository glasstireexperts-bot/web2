# SEO checklist — glass-collision

- [x] Intencion primaria: "auto glass repair Washington DC" (H1 en, equivalente en es).
- [x] Un H1 por version, sin repetir keywords artificialmente.
- [x] Subtitulo explica valor sin lista de keywords.
- [x] Title/meta description unicos por idioma (ver content/en-US.ts, es-US.ts).
- [x] Canonical autorreferente en ambas rutas.
- [x] hreflang en-US, es-US, x-default reciprocos (verificado con curl, 2026-08-28).
- [x] robots.ts y sitemap.ts generados, ambas URLs con alternates.
- [x] Open Graph e icono generados via next/og (200 OK verificado).
- [x] JSON-LD AutomotiveBusiness, sin campos pending/placeholder (verificado en runtime).
- [x] Sin aggregateRating ni estrellas estructuradas (no implementado a proposito).
- [x] NAP visible en HTML (footer, service area), no solo en el mapa.
- [ ] Datos reales de NAP confirmados por Oscar (telefono, direccion, horario, email siguen "observed_public" o "pending").
- [ ] Compra y verificacion del dominio glasscollision.com.
- [ ] Google Search Console / Bing Webmaster Tools (requiere dominio publicado).
- [ ] Reemplazar resenas placeholder por resenas reales autorizadas.
- [ ] Fotografia real (actualmente sin imagenes de producto/negocio en la Home; ver ASSET_REGISTER.md).
- [x] prefers-reduced-motion respetado (styles/tokens.css).
- [x] Movil: barra de llamada fija, CTA accesible (MobileCallBar.tsx).

## Limitacion conocida
`<html lang>` de /es se corrige por JavaScript (ver docs/ARCHITECTURE.md).
canonical/hreflang no dependen de esto y son correctos estaticamente.
