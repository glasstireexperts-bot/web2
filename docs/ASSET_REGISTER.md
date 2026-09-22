# Registro de assets — glass-collision

Estado actual (actualizado 2026-09-22): fotografia generada por IA en uso
(ver Ronda 2026-09-22, "Fotografia"), pendiente de fotografia real del
local. Telefono, direccion y horario ya son datos reales confirmados por
Oscar — dejaron de ser placeholder (ver Ronda 2026-09-22 (3)).

| Elemento | Fuente | Tipo | Seccion | Debe reemplazarse por | Estado |
|---|---|---|---|---|---|
| Fondo Hero / Shop / Process (fotografia generada) | IA, guardada manualmente por Lups | generated (imagen) | Hero, Shop, Process, FinalCta | Fotografia real de ESTE local (fachada, area de trabajo, equipo) | generado, pendiente de foto real |
| 3 tarjetas de resena | Texto de muestra en tono, no de clientes reales | placeholder | Reviews | Resenas reales autorizadas de este local (Lups las reemplaza cuando el cliente apruebe) | placeholder |
| Mapa de ubicacion | Bloque de texto "Map placeholder" | placeholder | Service Area | Embed real de Google Maps — direccion ya confirmada (4222 14th St NW), sin riesgo de duplicidad pendiente | placeholder |
| Boton de llamada / WhatsApp | Renderizado, con telefono real | activo | Hero, Header, MobileCallBar, FinalCta, FloatingCta, ChatWidget | — ya usa `+1 202-845-1312` (confirmado) | activo |

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

## Ronda 2026-09-22 (2) — Quitar avisos de "demo/placeholder", carrusel, resenas y chat

Pedido de Lups tras ver la primera version del rediseno cinematografico:
seguia sintiendose parecido al anterior, y pidio quitar toda mencion visible
de "demo/placeholder/sustituir antes de publicar" porque el mismo se
encarga de reemplazar el contenido cuando el cliente apruebe y mande datos
reales.

**Riesgo marcado antes de ejecutar** (regla propia de Lups: marcar riesgo
antes de recomendar cuando algo toca reputacion/entregas): quitar avisos de
"esto es de muestra" de fotos de stock es una practica de diseno estandar
para una demo que se le ensena al cliente. Quitarlo de las **resenas**
(nombres + estrellas presentados como clientes reales) es un nivel de
riesgo distinto — son testimonios inventados. Se verifico que
`lib/seo/jsonld.ts` NUNCA lee `business.reviews` (no hay `Review` ni
`AggregateRating` en el JSON-LD), asi que estas resenas de muestra no
llegan a Google como datos estructurados bajo ninguna circunstancia — el
riesgo queda acotado a que un visitante humano las vea en la pagina, no a
que aparezcan en resultados de busqueda con estrellas. Lups conocia el
riesgo y decidio proceder porque el mismo reemplaza el contenido antes de
publicar con el cliente.

Cambios:
- Se quitó `DemoNoticeBadge` de todo el sitio (Hero, Shop, Reviews) y se
  borró el componente (`components/ui/DemoNoticeBadge.tsx`) por quedar sin
  uso.
- Se quitaron los campos de contenido `hero.photoDisclaimer`,
  `shop.disclaimer`, `reviews.disclaimer`, `reviews.placeholderNote`,
  `reviews.linkLabel` y el campo global `demoNotice` (no se usaba en
  ningun componente, pero SI viajaba en el payload serializado de la
  pagina — se detecto revisando el HTML compilado, no solo la vista, ver
  nota tecnica abajo).
- Se eliminó por completo la sección `Gallery` (componente, tipo de
  contenido y contenido en ambos idiomas) — estaba fuera del flujo desde
  la ronda anterior pero su copy ("placeholder illustrations...") seguía
  viajando en el HTML/JS de la página aunque no se viera en pantalla.
- `content/types.ts` + `en-US.ts` + `es-US.ts`: `reviews` ahora es
  `{ heading, intro, items: ReviewCopy[] }` con 3 reseñas de muestra reales
  en tono (cita + nombre + detalle del servicio), en vez del texto
  hardcodeado que había antes directo en el componente.
- Nuevo componente `ChatWidget.tsx` (burbuja flotante "How can we help
  today?" / "En que te ayudamos hoy?"): el visitante escribe, el botón abre
  WhatsApp con el mensaje ya listo — no es un bot con respuestas
  automáticas. Usa `business.whatsappWidget.value`, un número FICTICIO del
  bloque reservado NANP 555-0100 a 555-0199 (nunca asignable a una línea
  real — si alguien lo usa antes de que Lups ponga el real, el mensaje no
  le llega a nadie, no se hace pasar por Glass Collision). Reemplazar ese
  único valor en `content/business.ts` en cuanto Oscar confirme su
  WhatsApp.
- `Services.tsx` reescrito como carrusel: banda de fondo oscuro (contraste
  con el resto de la página, que sigue clara), tarjetas alternando
  claro/oscuro entre sí, avance automático cada 4.5s con rebote (no salto
  brusco), flechas y puntos de navegación, se pausa al pasar el mouse.
- `Reviews.tsx` reescrito: 5 estrellas, comilla grande decorativa, avatar
  de inicial, tarjeta central ligeramente elevada — acomodo tipo
  testimonio real en vez de tarjeta con borde punteado.
- `SectionHeading.tsx`: se agregó una barra roja decorativa bajo cada
  título — firma gráfica propia que DC Glass Collision no usa.
- No se implementaron los divisores diagonales (clip-path) que se habían
  considerado para diferenciar más el acomodo general — se descartó por no
  poder verificar visualmente la geometría sin una vista renderizada, y el
  riesgo de que se vea roto en algún ancho de pantalla no vale la pena
  frente al resto de cambios ya logrados. Queda como posible siguiente paso
  si Lups lo sigue sintiendo parecido.

### Nota tecnica — por que "quitar un aviso del componente" no bastaba
La primera pasada solo dejó de RENDERIZAR los avisos de demo/placeholder,
pero el objeto de contenido completo (`dict`) se le sigue pasando entero a
los componentes cliente (Hero, Services, ChatWidget, FloatingCta) para que
React pueda hidratarlos en el navegador — eso significa que aunque un campo
no se muestre en pantalla, su texto SI queda embebido en el HTML/JS que se
manda al navegador (visible en "ver código fuente"). Se verificó esto
descargando el HTML compilado con curl y buscando "demo"/"placeholder"
directamente en el archivo, no solo mirando la página — así se encontraron
`gallery.disclaimer` y `demoNotice` todavía presentes pese a no
renderizarse. Ambos ya se eliminaron del contenido, no solo del render.

Verificado: `npx tsc --noEmit`, `npm run lint`, `npm run build` limpios;
`npm run dev` + curl en `/` y `/es` → 200; se confirmó con grep sobre el
HTML compilado que ya no aparece "demo", "placeholder illustrat",
"sustituir" ni "replace before publishing" en ningún idioma.

## Ronda 2026-09-22 (3) — Datos reales del negocio + cambio de marca/dominio

Oscar envio, via Lups: telefono, direccion, horario, aclaracion de
"atencion 24 horas" y el cambio de marca/dominio a "Oscar Auto Glass" /
oscarautoglass.com (reemplaza el nombre inferido "Glass Collision" y el
dominio glasscollision.com).

**Riesgo verificado antes de ejecutar**: la direccion nueva (4222 14th St
NW) no coincidia con ninguna de las dos direcciones ya documentadas en el
proyecto (ni la de este local, ni la de DC Glass Collision) — en vez de
asumir a que proyecto correspondia, se pregunto directamente a Lups.
Tambien se confirmo el alcance real de "atencion 24 horas": es
disponibilidad de contacto (chat/llamada en cualquier momento), la
respuesta llega en horario — no es soporte nocturno con personal ni
despacho real de emergencia. El servicio `emergency-24-7` sigue `pending`
a proposito por esto.

Cambios:
- `content/business.ts`: `brand` -> "Oscar Auto Glass" (confirmed);
  `phone`/`whatsapp` -> "+1 202-845-1312" (confirmed, ambos CTA activos en
  todo el sitio); `address` -> 4222 14th St NW, Washington, DC 20011
  (confirmed, reemplaza la direccion anterior y su riesgo de proximidad
  con DC Glass Collision); `hours` -> "Every day, 8:00 AM to 7:00 PM"
  (confirmed); `domain` -> "oscarautoglass.com" (confirmed). Nota agregada
  en el archivo: la marca ahora incluye el nombre de Oscar directamente
  (antes se evitaba mostrar un nombre propio) — el limite que sigue
  vigente sin cambios es unicamente sobre Maria, que nunca se publica.
- `lib/utils/url.ts`: `SITE_URL` -> `https://oscarautoglass.com`.
- `src/app/layout.tsx`: `metadataBase` -> `https://oscarautoglass.com`.
- `lib/seo/jsonld.ts`: el bloque `openingHoursSpecification` estaba
  hardcodeado en 7:00-20:00 (heredado de DC Glass Collision) y nunca se
  activaba porque `hours.status` era `pending`. Con el horario ya
  confirmado el bloque se activa, asi que se corrigio a 8:00-19:00 (horario
  real) antes de que se activara con el dato equivocado.
- `components/layout/ChatWidget.tsx`: dejo de usar el numero FICTICIO
  reservado (bloque NANP 555-0100/0199) y ahora usa
  `business.whatsapp.value` real, igual que el resto de los CTA.
- `content/en-US.ts` / `es-US.ts`: nombre de marca actualizado a "Oscar
  Auto Glass" en todas las ocurrencias; `hoursLabel` con el horario real;
  `trustBar` con un quinto punto sobre poder escribir/llamar en cualquier
  momento; `chatWidget.intro` reescrito para reflejar honestamente que la
  respuesta llega en horario, no 24/7 con personal.

Verificado: `npx tsc --noEmit`, `npm run lint`, `npm run build` limpios;
grep sobre el proyecto confirma cero menciones residuales de "Glass
Collision"/"glasscollision.com" en codigo/contenido de produccion (solo
quedan en documentacion historica de `docs/` y en `package.json`/
`package-lock.json` como nombre interno del paquete, sin impacto en el
sitio publicado).

## Ronda 2026-09-22 (4) — Correccion de dominio real + ajuste de reclamo bilingue

Lups compartio el link real del sitio ya en vivo (https://www.oscarglassshop.com/)
al pedir que se agregara "el nombre completo" a la ficha de Google Maps.
El dominio en el codigo hasta este punto (oscarautoglass.com) estaba mal
anotado — Lups confirmo que oscarglassshop.com es el dominio real y que
es el mismo proyecto de este repo, ya deployado ahi.

Cambios:
- `content/business.ts`, `lib/utils/url.ts`, `src/app/layout.tsx`:
  dominio/`SITE_URL`/`metadataBase` corregidos a `oscarglassshop.com` en
  todo el proyecto (afecta canonical, OG, sitemap y JSON-LD).
- Nombre de marca ("Oscar Auto Glass") verificado exacto contra el sitio
  real en vivo — coincide con lo que ya estaba en `content/business.ts`,
  sin cambios ahi.
- **Riesgo detectado y corregido**: la barra de confianza (`trustBar`)
  afirmaba "Bilingual team: English & Espanol*" con un asterisco huerfano
  (sin nota al pie en ningun lado) — una afirmacion mas fuerte que el
  propio FAQ del sitio, que dice "the team is working toward full
  bilingual phone support" (no confirmado). `business.ts` tiene
  `spanishPhoneSupport` en `pending` desde el principio; la promesa
  entera en el trust bar no era consistente con ese estado. Se suavizo
  a "Working toward full bilingual support (English/Espanol)" /
  "Trabajando hacia atencion bilingue completa (Ingles/Espanol)" en
  ambos idiomas, igual de honesto que el FAQ, sin asterisco huerfano.
  Esto no vino de la web real (esa web ES este mismo proyecto) — fue una
  inconsistencia interna que se detecto al revisar el contenido contra el
  estado real de `spanishPhoneSupport`.

Verificado: `npx tsc --noEmit`, `npm run lint`, `npm run build` limpios.

## Ronda 2026-09-22 (5) — Correccion de nombre completo: "Oscar Glass Shop"

Lups aclaro que la ronda anterior no cambio el nombre que el pedia: solo
queria agregar "Shop" al nombre para la ficha de Maps. El nombre completo
correcto, confirmado explicitamente, es **"Oscar Glass Shop"** — no
"Oscar Auto Glass" (que fue una capitalizacion/nombre propio que el
asistente invento antes a partir del dominio viejo mal anotado,
oscarautoglass.com, y nunca fue confirmado por Lups). "Oscar Glass Shop"
coincide exactamente con el dominio real: oscarglassshop.com.

Se corrigio en `content/business.ts` (brand + nota explicativa),
`content/en-US.ts`, `content/es-US.ts` (title, headings, FAQ) y
`components/layout/ChatWidget.tsx` (comentario). Tambien en README.md y
docs/CLIENT_BRIEF.md. Se confirma ademas que esta correccion se aplico
unicamente en este proyecto (`Clientes/glass-collision/web`, remoto
`web2`) — no se toco `glass-tire-experts` (DC Glass Collision, `web1`) en
ningun momento de esta sesion.

Verificado: `npx tsc --noEmit`, `npm run lint`, `npm run build` limpios.
