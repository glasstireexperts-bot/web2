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
