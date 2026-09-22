# Registro de assets — glass-collision

Ninguna fotografia real fue usada todavia. Este proyecto se creo copiando la
arquitectura de `../glass-tire-experts/web` (misma estructura de componentes,
mismos placeholders tipo "DEMO"), recoloreado con la paleta "Clean Slate".

| Elemento | Fuente | Tipo | Seccion | Debe reemplazarse por | Estado |
|---|---|---|---|---|---|
| Fondo Hero (gradiente diagonal rojo tenue) | Generado en CSS, sin imagen | generated (css) | Hero | Fotografia real del segundo local, o se mantiene como fondo de marca | placeholder |
| 7 iconos de galeria de servicios | SVG lineal, mismo set que DC Glass Collision | generated (svg) | Gallery | Fotografia real de cada servicio completado, con badge DEMO removido | placeholder |
| 3 iconos de "Shop" (fachada, area de trabajo, equipo) | SVG lineal | generated (svg) | Shop | Fotografia real de ESTE local (no reutilizar fotos de DC Glass Collision) | placeholder |
| 3 tarjetas de resena | Texto demostrativo | placeholder | Reviews | Resenas reales autorizadas de este local | placeholder |
| Mapa de ubicacion | Bloque de texto "Map placeholder" | placeholder | Service Area | Embed real de Google Maps — SOLO despues de resolver el riesgo de duplicidad con DC Glass Collision (ver CLIENT_BRIEF.md) | placeholder |
| Boton de llamada / WhatsApp | No renderizado | n/a | Hero, Header, MobileCallBar, FinalCta | Se activan solos cuando `business.phone`/`business.whatsapp` dejen de ser `status: "pending"` en content/business.ts | oculto a proposito |

## Ronda 2026-09-21 — scaffold inicial

- Proyecto creado copiando `glass-tire-experts/web` completo (sin
  `node_modules`, `.next`, `.git`), reinstalado con `npm install` limpio.
- Renombrado el prefijo de variables CSS `--gte-` a `--gc-` en todo el
  proyecto (mecanico, sin cambios de logica).
- `styles/tokens.css` reescrito con la paleta "Clean Slate": fondo claro
  dominante + un solo acento rojo (`#c81e2c` / `#9c1620`), en vez de
  grafito oscuro + ambar de la marca hermana.
- Todas las secciones que antes usaban fondo oscuro (Hero, Header,
  MobileCallBar, Gallery, UrgencyContext, TrustBar, ServiceArea,
  Differentiators, Shop, SiteFooter) se invirtieron a fondo claro con texto
  en tinta — cambio deliberado de tono, no solo de color de variable.
  FinalCta se mantiene como el unico bloque solido de color (rojo), con
  texto y boton en blanco — el "momento de marca" fuerte del sitio.
- Se agrego logica de bloqueo de CTA: como `business.phone` y
  `business.whatsapp` estan en `status: "pending"` (Oscar no tiene numero
  todavia), los botones de Llamar/WhatsApp NO se renderizan en Hero,
  SiteHeader, MobileCallBar ni FinalCta — se muestra un texto neutro
  ("Phone coming soon" / "Telefono proximamente") en su lugar. Ningun
  numero inventado.
- `content/business.ts` reescrito para Glass Collision: marca, direccion
  confirmadas; telefono, whatsapp, email, horario en `pending` (vacios,
  sin inventar). Direccion marcada con nota de riesgo de duplicidad frente
  a DC Glass Collision (3 numeros de distancia, misma cuadra).
- `content/en-US.ts` / `es-US.ts`: nombre de marca reemplazado en todas las
  ocurrencias; `hoursLabel` cambiado de un horario especifico inventado
  (heredado de la copia) a "Hours coming soon" / "Horario proximamente",
  porque a diferencia de DC Glass Collision no hay ni siquiera un horario
  observado publicamente para este local.
- Verificado: `npm run lint` limpio, `npm run build` exitoso (rutas `/` y
  `/es` generadas como estatico, sin errores de tipos).

## Pendiente de Oscar antes de reemplazar
- Telefono propio del segundo local (bloquea CTAs de llamada/WhatsApp).
- Horario.
- Nombre exacto de marca a confirmar (se uso "Glass Collision" por el dominio).
- Fotografias reales de ESTE local — fachada, area de trabajo, equipo — sin
  reutilizar material de DC Glass Collision, debe sentirse un negocio
  distinto de verdad.
- Permiso de uso para cada fotografia.

Guardar los archivos reales en:
`Clientes/glass-collision/fotos/{crudo,editadas,stock}/` y
`Clientes/glass-collision/perfil/` para logo/identidad — luego mover las
versiones finales optimizadas a `web/public/images/` y `web/public/brand/`
segun corresponda, y actualizar este registro.

## Ronda 2026-09-22 — Rediseno cinematografico "claro + dramatico"

Pedido explicito de Lups: el sitio se sentia con la misma forma/acomodo que
DC Glass Collision solo con otro color. Se rediseno manteniendo la
estrategia anti-duplicado (fondo claro dominante, NUNCA oscuro completo —
ver riesgo de duplicidad documentado en `content/business.ts`), logrando el
efecto "taller de pelicula" con fotografia de alto contraste, scrims,
grano, particulas y mas animacion — no con un fondo oscuro global.

Cambios de estructura (orden deliberadamente distinto al de DC Glass
Collision):
- Nuevo orden: Hero -> TrustBar -> UrgencyContext -> Services -> Process
  (banda cinematografica) -> Shop/"Instalaciones" (fotos) -> Differentiators
  -> Guarantee (nueva) -> Reviews -> ServiceArea -> Faq -> FinalCta.
- Se retiro `Gallery` del flujo (`components/HomeSections.tsx`) por
  redundante frente a `Services` (misma lista de servicios, solo iconos) —
  el archivo `components/sections/Gallery.tsx` y el campo `dict.gallery`
  se dejan sin usar en el codigo por si se recupera contenido de ahi;
  candidato a borrar en una limpieza futura.
- Nueva seccion `Guarantee.tsx` (banda de confianza + segundo CTA a media
  pagina) — requiere el nuevo campo de contenido `dict.guarantee`.
- Nuevo componente `FloatingCta.tsx` (CTA flotante de escritorio,
  equivalente a `MobileCallBar` pero para pantallas >= sm) — tercer punto
  de contacto ademas de Hero y FinalCta.
- `Shop.tsx` reescrito: tarjetas de icono SVG -> tarjetas fotograficas con
  scrim y hover-zoom (fachada, area de trabajo, equipo).
- `Process.tsx` reescrito: tarjetas planas -> banda cinematografica con
  foto de fondo + scrim vertical + CTA propio (`dict.process.ctaLabel`).
- `Hero.tsx` reescrito: foto de fondo, scrim lateral, vinieta, spotlight
  rojo, particulas de polvo/chispa (CSS, respeta `prefers-reduced-motion`),
  entrada escalonada con `motion` (sin `Reveal`, sigue siendo lo primero
  visible sin scroll), disclaimer de foto de referencia.
- `FinalCta.tsx` reescrito: foto de fondo (misma imagen del Hero, para dar
  continuidad de "apertura/cierre") + overlay rojo de marca.
- `Services.tsx` / `Differentiators.tsx`: hover-lift (translate + sombra)
  en las tarjetas.
- `styles/tokens.css`: nuevas variables `--gc-scrim-*`, `--gc-vignette`,
  `--gc-spotlight`.
- `src/app/globals.css`: nuevas clases `.gc-grain`, `.gc-scrim-*`,
  `.gc-vignette`, `.gc-spotlight`, `.gc-letterbox`, `.gc-particle`
  (con `@keyframes gc-drift` y bloqueo por `prefers-reduced-motion`).
- `content/types.ts` + `en-US.ts` + `es-US.ts`: se agregaron
  `hero.photoDisclaimer`, `process.ctaLabel` y la seccion `guarantee`
  (heading/body/points/ctaLabel) en ambos idiomas.

### Fotografia — generada, PENDIENTE de copiar al proyecto
Se generaron 4 fotos de referencia (IA, alto contraste, luz diurna
dramatica, sin texto/logos/personas identificables) para dar vida visual
al sitio mientras llegan fotos reales del taller. **No pude descargarlas yo
mismo al proyecto: la politica de red de la organizacion bloquea el
dominio del CDN donde se generaron** (mismo bloqueo tanto en mi sandbox
como en el shell del Mac). Se mostraron en el chat para que Lups las
guarde manualmente.

Archivos esperados por el codigo (rutas ya cableadas, con fallback de
gradiente oscuro si el archivo aun no existe — no rompe el render):
- `public/images/hero-bg.png` — usada en Hero y FinalCta.
- `public/images/storefront.png` — tarjeta "Fachada y senaletica" en Shop.
- `public/images/workbay.png` — tarjeta "Area de trabajo" en Shop, fondo de
  la banda Process.
- `public/images/team.png` — tarjeta "Oscar & team" en Shop (la foto es
  generica, NO es una foto real de Oscar ni de nadie identificable).

Todas marcadas con `DemoNoticeBadge` ("DEMO") y con el disclaimer de texto
correspondiente en `content/*.ts` — se reemplazan por fotografia real del
taller antes de publicar, igual que el resto de placeholders del proyecto.

Verificado (con `npm install` corrido tambien en el sandbox Linux solo para
poder probar build/dev aqui — no afecta ni rompe la instalacion de Mac, los
paquetes de plataforma son aditivos): `npx tsc --noEmit` limpio, `npm run
lint` limpio, `npm run build` exitoso, `npm run dev` + `curl` en `/`, `/es`
y `/api/health` devolvieron 200 con los marcadores cinematograficos
(`gc-grain`, `gc-scrim-*`, `gc-particle`, `gc-vignette`) presentes en el
HTML.
