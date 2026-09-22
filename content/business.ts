import type { BusinessProfile } from "./types"

// Fuente unica de NAP y datos de negocio de Oscar Auto Glass (antes "Glass
// Collision") — SEGUNDA UBICACION real del mismo operador de DC Glass
// Collision (Oscar Rodriguez). No inventar datos que no esten aqui.
//
// Nota de contexto (2026-09-22): la direccion real (4222 14th St NW) NO
// coincide con la que se tenia anotada antes (4454 Nannie Helen Burroughs
// Ave NE, a 3 numeros de DC Glass Collision) — el riesgo de duplicidad
// documentado en rondas anteriores por proximidad de direccion queda
// resuelto, son ubicaciones distintas de verdad. Tambien la marca paso de
// "Glass Collision" (nombre generico inferido del dominio) a
// "oscarautoglass.com" — un nombre que SI incluye el nombre de Oscar de
// forma directa y publica, distinto del plan original de "otro dueno
// aparente" descrito en el expediente de Obsidian. El limite que sigue de
// pie sin excepcion: el nombre de Maria (hermana de Oscar) nunca se
// publica en ningun material — eso no cambio.

export const business: BusinessProfile = {
  brand: {
    value: "Oscar Auto Glass",
    status: "confirmed",
    note: "Dominio indicado por Lups (chat 2026-09-22): oscarautoglass.com, nombre de marca 'oscarautoglass' sin espacios/mayusculas segun el mensaje original. Se muestra en la UI como 'Oscar Auto Glass' (espaciado/capitalizacion propia para legibilidad, no confirmado con Oscar) — verificar antes de imprimir en senaletica o material fisico.",
  },
  legalContact: {
    value: "Oscar Rodriguez",
    status: "confirmed",
    note: "Operador real (mismo que DC Glass Collision). Con esta marca su nombre SI es publico (esta en el dominio) — ya no aplica el ocultamiento que tenia 'Glass Collision'. El limite que sigue vigente es unicamente sobre Maria (hermana de Oscar): su nombre nunca se publica.",
  },
  phone: {
    value: "+1 202-845-1312",
    status: "confirmed",
    note: "Confirmado por Lups en chat 2026-09-22.",
  },
  whatsapp: {
    value: "+1 202-845-1312",
    status: "confirmed",
    note: "Se asume el mismo numero que el telefono (Lups dijo 'se le atiende por chat o llamada' sin dar un numero de WhatsApp aparte) — confirmar con Oscar si en realidad usa un numero distinto para WhatsApp.",
  },
  email: {
    value: "",
    status: "pending",
    note: "Sin correo propio confirmado para esta marca todavia.",
  },
  address: {
    value: {
      street: "4222 14th St NW",
      city: "Washington",
      region: "DC",
      postalCode: "20011",
      country: "US",
    },
    status: "confirmed",
    note: "Confirmado por Lups en chat 2026-09-22 — reemplaza la direccion anterior (4454 Nannie Helen Burroughs Ave NE). Ubicacion real distinta a la de DC Glass Collision, sin riesgo de duplicidad por proximidad.",
  },
  hours: {
    value: "Every day, 8:00 AM to 7:00 PM",
    status: "confirmed",
    note: "Confirmado por Lups en chat 2026-09-22. 'Atencion al cliente 24 horas por chat o llamada' NO significa personal contestando de madrugada (confirmado explicitamente por Lups) — significa que se puede escribir/llamar a cualquier hora y se responde dentro del horario de operacion. No representar como soporte 24/7 real en la UI ni en JSON-LD.",
  },
  domain: {
    value: "oscarautoglass.com",
    status: "confirmed",
    note: "Indicado por Lups 2026-09-22, reemplaza glasscollision.com. Verificar que el dominio este realmente registrado a nombre del cliente antes de usarlo en Google Business Profile o anuncios pagados.",
  },
  spanishPhoneSupport: {
    value: false,
    status: "pending",
    note: "Ahora hay telefono confirmado, pero no se confirmo si se atiende en espanol — no asumir.",
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
      note: "Sin Page confirmada para esta marca todavia.",
    },
  },
}
