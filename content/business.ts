import type { BusinessProfile } from "./types"

// Fuente unica de NAP y datos de negocio de Glass Collision — SEGUNDA
// UBICACION real del mismo operador de DC Glass Collision (Oscar Rodriguez).
// De cara al publico este local se presenta con otra gestion; por
// instruccion explicita de Lups (chat 2026-09-21) NO se publica en ningun
// material (web, redes, Google) el nombre de la persona que lo atiende.
// Ese detalle vive solo en Obsidian:
// "Oscar Rodriguez — Glass Collision/00 Glass Collision — Expediente
// (segunda ubicacion).md". No inventar telefono, horario ni fotos.

export const business: BusinessProfile = {
  brand: {
    value: "Glass Collision",
    status: "confirmed",
    note: "Nombre inferido del dominio glasscollision.com, indicado por Lups en chat el 2026-09-21. Verificar capitalizacion/espaciado exactos antes de publicar.",
  },
  legalContact: {
    value: "Oscar Rodriguez",
    status: "confirmed",
    note: "Operador real (mismo que DC Glass Collision). No se muestra en la UI publica bajo ninguna circunstancia — este campo es solo registro interno.",
  },
  phone: {
    value: "",
    status: "pending",
    note: "Oscar aun no tiene un telefono propio para este local (chat Lups 2026-09-21). No inventar numero. La UI oculta los botones de llamada mientras este campo siga pending.",
  },
  whatsapp: {
    value: "",
    status: "pending",
    note: "Sin numero confirmado todavia. La UI oculta el boton de WhatsApp mientras este campo siga pending.",
  },
  email: {
    value: "",
    status: "pending",
    note: "Sin correo propio confirmado para esta marca todavia.",
  },
  address: {
    value: {
      street: "4454 Nannie Helen Burroughs Ave NE",
      city: "Washington",
      region: "DC",
      postalCode: "20019",
      country: "US",
    },
    status: "confirmed",
    note: "Confirmado por Lups en chat 2026-09-21. ATENCION: a 3 numeros de la direccion de DC Glass Collision (4451 Nannie Helen Burroughs Ave NE), misma cuadra — riesgo real de duplicidad ante Google al dar de alta el Business Profile. Ver expediente Obsidian antes de cualquier alta de Google.",
  },
  hours: {
    value: "",
    status: "pending",
    note: "Sin horario confirmado todavia para este local.",
  },
  domain: {
    value: "glasscollision.com",
    status: "pending",
    note: "Indicado por Lups 2026-09-21. Verificar disponibilidad/registro antes de tratarlo como propiedad del cliente.",
  },
  spanishPhoneSupport: {
    value: false,
    status: "pending",
    note: "Sin telefono propio todavia, no aplica confirmar idioma de atencion.",
  },
  mobileService: {
    value: false,
    status: "pending",
    note: "No confirmado para esta marca.",
  },
  // Mismo servicio que DC Glass Collision segun el cliente ("mismo servicio").
  // Se reutiliza el nucleo ya validado hasta que Oscar confirme diferencias reales.
  coreServiceIds: [
    "auto-glass-repair",
    "windshield-replacement",
    "car-side-window-replacement",
    "rear-window-replacement",
    "window-regulator-repair",
    "window-tinting",
    "sunroof-repair",
  ],
  pendingServiceIds: [
    "mobile-service",
    "same-day-service",
    "emergency-24-7",
    "oem-glass",
    "adas-recalibration",
    "certifications",
    "written-warranty",
    "insurance-assistance",
    "residential-glass",
    "commercial-glass",
  ],
  reviews: [
    // Placeholders demostrativos unicamente, igual que en DC Glass Collision.
    { id: "demo-1", status: "placeholder" },
    { id: "demo-2", status: "placeholder" },
    { id: "demo-3", status: "placeholder" },
  ],
  social: {
    // Ninguna cuenta oficial confirmada todavia para esta marca.
    facebook: {
      value: "",
      status: "pending",
      note: "Sin Page confirmada para Glass Collision todavia.",
    },
  },
}
