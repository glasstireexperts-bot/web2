# Build report — glass-collision

## 2026-09-21 — scaffold inicial (placeholder, no publicar)

- Origen: instruccion directa de Lups en chat. Segunda ubicacion real de
  Oscar Rodriguez (mismo operador que DC Glass Collision), marca
  deliberadamente distinta de cara al publico.
- Metodo: copia de `../glass-tire-experts/web` completa (arquitectura,
  componentes, tipos de contenido) + recoloreado a paleta "Clean Slate" +
  contenido/NAP propios de este local. Ver ASSET_REGISTER.md para el
  detalle exacto de cada cambio.
- Datos de negocio: direccion confirmada (con riesgo de duplicidad
  documentado), telefono/whatsapp/email/horario en pending — sin datos
  inventados. La UI oculta los CTAs de contacto mientras sigan pending.
- Verificacion ejecutada: `npm run lint` (limpio), `npm run build`
  (exitoso, rutas `/` y `/es` estaticas, sin errores de TypeScript).
- No se ejecuto: compra de dominio, alta de Google Business Profile,
  conexion de hosting/DNS, ni ninguna publicacion. Ver DEPLOY_CHECKLIST.md.
- Siguiente paso: Lups revisa localmente (`npm run dev` dentro de
  `Clientes/glass-collision/web`) y envia a Oscar para recabar telefono,
  horario, nombre de marca exacto y fotografias reales.

## 2026-09-22 — corregido: bootstrap oficial + verificacion en ejecucion

La primera version de este proyecto (2026-09-21) se construyo copiando
manualmente `glass-tire-experts/web` en una ruta que NO estaba realmente
conectada al Mac del usuario (quedo en almacenamiento efimero de la sesion,
invisible en Finder/Terminal). Corregido:

- Se ejecuto el comando oficial `./scripts/bootstrap-client.sh glass-collision`
  desde la raiz real `Google mas Maps` (conectada por el usuario), siguiendo
  PROCESO_REPETIBLE.md al pie de la letra.
- Se porto toda la arquitectura ya construida (content/, components/, lib/,
  styles/tokens.css, types/, docs/) sobre el scaffold oficial recien creado.
- Se agrego la dependencia `motion` (usada por components/ui/Reveal.tsx) y
  se completaron los alias de `tsconfig.json` (`@content`, `@components`,
  `@lib`, `@styles`, `@ctypes`).
- Verificado en la ubicacion real: `scripts/verify-structure.sh` (valida),
  `npm run lint` (limpio), `npm run build` (exitoso, rutas `/` y `/es`
  estaticas), y **servidor en ejecucion**: `npm run dev` levantado y
  probado con curl — `GET /` → 200, `GET /es` → 200, `GET /api/health` →
  `{"status":"ok"}`. Servidor detenido despues de la prueba.
- Git inicializado por `create-next-app` dentro del bootstrap; se hizo el
  primer commit real sobre esta ubicacion.

```yaml
cliente: "Oscar Rodriguez"
slug: "glass-collision"
ruta: "Clientes/glass-collision/web"
fase: "scaffold + arquitectura placeholder, sin datos reales de contacto"
documentado: true
estructura_valida: true
lint: true
compila: true
funciona_en_ejecucion: true
listo_para_produccion: false
publicado_verificado: false
evidencia:
  - "scripts/verify-structure.sh -> Estructura valida."
  - "npm run lint -> sin errores"
  - "npm run build -> rutas / y /es generadas como estatico"
  - "npm run dev + curl -> GET / 200, GET /es 200, GET /api/health 200"
bloqueos:
  - "Sin telefono/whatsapp/email/horario reales (CTAs ocultos en la UI a proposito)"
  - "Riesgo de duplicidad de domicilio frente a DC Glass Collision (ver CLIENT_BRIEF.md)"
  - "Sin fotografia real del local"
siguiente_accion: "Lups revisa localmente (npm run dev) y envia a Oscar para recabar telefono, horario, nombre de marca exacto y fotografias"
requiere_aprobacion: true
```

## 2026-09-22 — Rediseno cinematografico "claro + dramatico"

Pedido de Lups: el sitio se sentia igual en forma/acomodo a DC Glass
Collision, solo con otro color — pidio taller "de pelicula", animado, con
fotografia y mas CTAs/secciones. Antes de tocar codigo se confirmo con
Lups (1) que el pedido era para este proyecto y (2) la direccion visual:
se opto por mantener el fondo claro de Clean Slate (no oscurecer todo el
sitio) y lograr el drama con fotografia/scrims/movimiento — para no
converger visualmente con DC Glass Collision, protegiendo la estrategia
anti-duplicado ya documentada.

Cambios: ver detalle completo en `docs/ASSET_REGISTER.md` (Ronda
2026-09-22). Resumen: Hero/Process/FinalCta con foto de fondo + scrim,
Shop con fotos en vez de iconos, seccion nueva Guarantee (CTA a media
pagina), CTA flotante de escritorio nuevo, orden de secciones reordenado
respecto a DC Glass Collision, hover-lift en tarjetas de Services y
Differentiators.

Bloqueo abierto: las 4 fotos de referencia se generaron pero no se
pudieron copiar al proyecto por una politica de red de la organizacion que
bloquea el CDN de origen — se muestran en el chat para que Lups las
descargue y las coloque el mismo en `public/images/` (ver instrucciones en
el chat). El codigo ya esta cableado a esas rutas con fallback visual si
faltan, asi que no rompe nada mientras tanto.

```yaml
cliente: "Oscar Rodriguez"
slug: "glass-collision"
ruta: "Clientes/glass-collision/web"
fase: "rediseno visual cinematografico, sin datos reales de contacto todavia"
documentado: true
estructura_valida: true
lint: true
compila: true
funciona_en_ejecucion: true
listo_para_produccion: false
publicado_verificado: false
evidencia:
  - "npx tsc --noEmit -> sin errores"
  - "npm run lint -> sin errores"
  - "npm run build -> rutas / y /es generadas como estatico"
  - "npm run dev + curl -> GET / 200, GET /es 200, GET /api/health 200, marcadores cinematograficos presentes en el HTML"
bloqueos:
  - "Fotos de referencia generadas pero no copiadas al proyecto (bloqueo de red del CDN de origen) — pendiente que Lups las guarde en public/images/"
  - "Sin telefono/whatsapp/email/horario reales (CTAs ocultos en la UI a proposito)"
  - "Riesgo de duplicidad de domicilio frente a DC Glass Collision (ver CLIENT_BRIEF.md)"
siguiente_accion: "Lups guarda las 4 fotos en public/images/ (nombres exactos en el chat) y revisa npm run dev en su Mac"
requiere_aprobacion: true
```

## 2026-09-22 (2) — Quitar avisos demo/placeholder, carrusel, resenas y chat WhatsApp

Ver detalle completo en `docs/ASSET_REGISTER.md` (Ronda 2026-09-22 (2)).
Resumen: se quitaron todos los avisos visibles de "demo/placeholder/
sustituir antes de publicar" (incluyendo contenido que viajaba en el
payload de la pagina aunque no se viera en pantalla — Gallery y
demoNotice), se agrego un carrusel real a Services, se rediseño Reviews
con estrellas y look de testimonio real, se agrego un widget de chat
flotante que abre WhatsApp con un numero ficticio reemplazable en un solo
lugar (`content/business.ts` -> `whatsappWidget`).

Riesgo marcado y aceptado por Lups: las resenas de muestra ahora se ven
como reales (nombre + estrellas), sin ninguna marca de que son de
muestra. Se confirmo que no llegan a Google como datos estructurados
(jsonld.ts no lee `business.reviews`). Lups es quien reemplaza este
contenido antes de que el sitio sea publico, una vez el cliente apruebe.

```yaml
cliente: "Oscar Rodriguez"
slug: "glass-collision"
ruta: "Clientes/glass-collision/web"
fase: "demo visual para aprobacion de cliente, sin datos reales de contacto"
documentado: true
estructura_valida: true
lint: true
compila: true
funciona_en_ejecucion: true
listo_para_produccion: false
publicado_verificado: false
evidencia:
  - "npx tsc --noEmit -> sin errores"
  - "npm run lint -> sin errores"
  - "npm run build -> rutas / y /es generadas como estatico"
  - "npm run dev + curl -> GET / 200, GET /es 200, GET /api/health 200"
  - "grep sobre HTML compilado -> sin 'demo', 'placeholder illustrat', 'sustituir' ni 'replace before publishing' en ningun idioma"
bloqueos:
  - "Fotos de referencia generadas pero no copiadas al proyecto (bloqueo de red del CDN de origen) — Lups las guarda manualmente en public/images/"
  - "Resenas de muestra se ven como reales (sin marca de demo) — Lups debe reemplazarlas por resenas reales y autorizadas antes de publicar"
  - "whatsappWidget usa numero ficticio (bloque NANP 555) — reemplazar en content/business.ts en cuanto Oscar confirme su WhatsApp real"
  - "Sin telefono/whatsapp/email/horario reales del negocio (CTAs principales siguen ocultos en la UI a proposito)"
  - "Riesgo de duplicidad de domicilio frente a DC Glass Collision (ver CLIENT_BRIEF.md)"
siguiente_accion: "Lups revisa en su Mac, guarda las 4 fotos en public/images/, y decide si el diseno ya se siente suficientemente distinto o se ajusta mas"
requiere_aprobacion: true
```

## 2026-09-22 (3) — Datos reales de negocio + cambio de marca/dominio

Ver detalle completo en `docs/ASSET_REGISTER.md` (Ronda 2026-09-22 (3)) y
`docs/CLIENT_BRIEF.md`. Resumen: Oscar envio, via Lups, telefono
(+1 202-845-1312), direccion (4222 14th St NW, Washington, DC 20011),
horario (todos los dias, 8:00 AM a 7:00 PM), aclaracion de "atencion 24
horas" (disponibilidad de contacto, no soporte nocturno con personal), y
el cambio de marca/dominio a "Oscar Auto Glass" / oscarautoglass.com.

Propagado a `content/business.ts`, `lib/utils/url.ts`, `src/app/layout.tsx`
(metadataBase), `lib/seo/jsonld.ts` (horario en JSON-LD, que estaba
hardcodeado sin usar heredado de DC Glass Collision y se corrigio antes de
activarse), `ChatWidget.tsx` (dejo el numero ficticio, usa el WhatsApp
real) y ambos idiomas de contenido. Los CTA de llamada y WhatsApp, ocultos
hasta ahora, ya se muestran en todo el sitio. El riesgo de duplicidad de
domicilio frente a DC Glass Collision queda cerrado: la direccion real es
una ubicacion distinta, sin proximidad. El limite sobre no publicar el
nombre de Maria (hermana de Oscar) sigue vigente sin cambios; el nombre de
Oscar si es publico porque forma parte de la marca.

```yaml
cliente: "Oscar Rodriguez"
slug: "glass-collision"
ruta: "Clientes/glass-collision/web"
fase: "datos reales de contacto confirmados, pendiente fotografia real y aprobacion de resenas"
documentado: true
estructura_valida: true
lint: true
compila: true
funciona_en_ejecucion: true
listo_para_produccion: false
publicado_verificado: false
evidencia:
  - "npx tsc --noEmit -> sin errores"
  - "npm run lint -> sin errores"
  - "npm run build -> rutas / y /es generadas como estatico"
  - "grep del proyecto -> sin menciones residuales de 'Glass Collision'/'glasscollision.com' en codigo o contenido de produccion"
bloqueos:
  - "Fotografia real del local pendiente (hoy usa fotografia generada por IA guardada por Lups)"
  - "Resenas de muestra se ven como reales (sin marca de demo) — Lups debe reemplazarlas por resenas reales y autorizadas antes de publicar"
  - "Email del negocio sin definir (pending)"
  - "Dominio oscarautoglass.com confirmado por el cliente, pendiente verificar que este registrado a su nombre"
  - "No dar de alta Google Business Profile hasta confirmar senializacion visitable propia del local"
siguiente_accion: "Lups revisa en su Mac (npm run dev), confirma que los CTA de llamada/WhatsApp ya se ven, y hace git push del commit correspondiente"
requiere_aprobacion: true
```

## 2026-09-22 (4) — Correccion de dominio (oscarglassshop.com) + fix de reclamo bilingue

Ver detalle en `docs/ASSET_REGISTER.md` (Ronda 2026-09-22 (4)). Lups
compartio el link real del sitio ya en vivo y confirmo que es este mismo
proyecto — el dominio correcto es `oscarglassshop.com`, no
`oscarautoglass.com` como se habia anotado por error en la ronda
anterior. Corregido en `content/business.ts`, `lib/utils/url.ts` y
`src/app/layout.tsx`. Tambien se detecto y corrigio una inconsistencia:
el trust bar prometia equipo bilingue como si fuera un hecho, mientras
`business.ts` sigue teniendo `spanishPhoneSupport: pending` y el FAQ del
mismo sitio lo trata como "en progreso" — se alineo el trust bar con esa
realidad.

```yaml
cliente: "Oscar Rodriguez"
slug: "glass-collision"
ruta: "Clientes/glass-collision/web"
fase: "dominio real corregido y verificado en vivo; pendiente fotografia real, resenas autorizadas y confirmar soporte en espanol"
documentado: true
estructura_valida: true
lint: true
compila: true
funciona_en_ejecucion: true
listo_para_produccion: false
publicado_verificado: true
evidencia:
  - "npx tsc --noEmit -> sin errores"
  - "npm run lint -> sin errores"
  - "npm run build -> rutas / y /es generadas como estatico"
  - "Sitio verificado en vivo por Lups en https://www.oscarglassshop.com/ (mismo NAP y servicios que content/business.ts)"
bloqueos:
  - "Fotografia real del local pendiente (hoy usa fotografia generada por IA)"
  - "Resenas de muestra se ven como reales (sin marca de demo) — Lups debe reemplazarlas por resenas reales y autorizadas"
  - "spanishPhoneSupport sigue pending — no representar como bilingue confirmado en ningun material nuevo (Maps incluido)"
  - "Email del negocio sin definir (pending)"
siguiente_accion: "Usar oscarglassshop.com como sitio web en la ficha de Google Maps; confirmar con Oscar si realmente hay atencion en espanol antes de agregarlo como atributo en Maps"
requiere_aprobacion: true
```
