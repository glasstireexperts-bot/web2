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
