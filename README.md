# MAPS 2.0 — glass-collision

Proyecto web independiente dentro de Google mas Maps / Somos Lazaro.
Cliente: Oscar Rodriguez — Marca: Oscar Glass Shop (segunda ubicacion real,
misma operacion que DC Glass Collision — ver docs/CLIENT_BRIEF.md).

Este proyecto se creo copiando la arquitectura de `../glass-tire-experts/web`
(mismo stack, mismos patrones) y recoloreando con la paleta "Clean Slate"
(clara + acento rojo) para que se sienta como una marca distinta.

## Inicio local

```bash
npm install
npm run dev
```

## Verificacion

```bash
npm run lint
npm run build
```

## Reglas

- Datos del negocio y contenido centralizados en content/business.ts.
- Server Components por defecto.
- No desplegar ni conectar dominio sin autorizacion.
- Bilingue: / en ingles, /es/ en espanol. Contenido equivalente, no traduccion automatica.
- Ningun boton de llamada/WhatsApp se muestra mientras phone/whatsapp sigan
  `status: "pending"` en content/business.ts (ver Hero, SiteHeader,
  MobileCallBar, FinalCta) — no se inventan numeros para rellenar la demo.
  Telefono confirmado (2026-09-22): ambos CTA ya se muestran.
