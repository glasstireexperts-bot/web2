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
