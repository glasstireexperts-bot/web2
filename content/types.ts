// Fuente unica de contratos de contenido para DC Glass Collision.
// No hardcodear NAP ni contenido del negocio fuera de content/.

export type FieldStatus =
  | "confirmed"        // confirmado por Oscar/Lups
  | "observed_public"  // visto en fuentes publicas, sin confirmar con el cliente
  | "pending"           // falta confirmacion; no usar en JSON-LD ni como promesa
  | "placeholder"       // contenido demostrativo, nunca real
  | "do_not_publish"    // existe pero no debe salir a produccion

export interface Field<T> {
  value: T
  status: FieldStatus
  note?: string
}

export interface Address {
  street: string
  city: string
  region: string
  postalCode: string
  country: string
}

export interface ServiceEntry {
  id: string
  status: FieldStatus
}

export interface ReviewEntry {
  id: string
  status: "verified_public" | "placeholder"
  sourceUrl?: string
  sourceLabel?: string
}

export interface BusinessProfile {
  brand: Field<string>
  legalContact: Field<string>
  phone: Field<string>
  whatsapp: Field<string>
  email: Field<string>
  address: Field<Address>
  hours: Field<string>
  domain: Field<string>
  spanishPhoneSupport: Field<boolean>
  mobileService: Field<boolean>
  coreServiceIds: string[]
  pendingServiceIds: string[]
  reviews: ReviewEntry[]
  social: Partial<Record<"facebook" | "instagram" | "yelp" | "google", Field<string>>>
}

export type Locale = "en-US" | "es-US"

export interface ServiceCopy {
  id: string
  title: string
  description: string
}

export interface FaqCopy {
  question: string
  answer: string
}

export interface GalleryItemCopy {
  id: string
  label: string
}

export interface ProcessStepCopy {
  title: string
  description: string
}

export interface Dictionary {
  locale: Locale
  htmlLang: Locale
  path: "/" | "/es"
  meta: {
    title: string
    description: string
  }
  header: {
    languageLabel: string
    languageSwitchTo: string
    languageSwitchHref: "/" | "/es"
    hoursLabel: string
    locationLabel: string
    callLabel: string
    whatsappLabel: string
  }
  hero: {
    h1: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    reviewsPendingNote: string
    photoDisclaimer: string
  }
  trustBar: {
    heading: string
    items: string[]
    processLine: string
  }
  services: {
    heading: string
    intro: string
    items: ServiceCopy[]
    pendingNote: string
  }
  gallery: {
    heading: string
    intro: string
    items: GalleryItemCopy[]
    disclaimer: string
  }
  urgency: {
    heading: string
    body: string
    checklistHeading: string
    checklist: string[]
  }
  process: {
    heading: string
    steps: ProcessStepCopy[]
    disclaimer: string
    ctaLabel: string
  }
  differentiators: {
    heading: string
    items: string[]
    disclaimer: string
  }
  guarantee: {
    heading: string
    body: string
    points: string[]
    ctaLabel: string
  }
  shop: {
    heading: string
    intro: string
    items: GalleryItemCopy[]
    disclaimer: string
  }
  reviews: {
    heading: string
    disclaimer: string
    placeholderNote: string
    linkLabel: string
  }
  serviceArea: {
    heading: string
    addressPendingNote: string
    coverageNote: string
  }
  faq: {
    heading: string
    items: FaqCopy[]
  }
  finalCta: {
    heading: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
    ctaWhatsapp: string
  }
  footer: {
    hoursLabel: string
    addressPendingNote: string
    privacyLabel: string
    attribution: string
    languageLinks: { label: string; href: "/" | "/es" }[]
  }
  mobileBar: {
    call: string
    estimate: string
    whatsapp: string
  }
  demoNotice: string
}
