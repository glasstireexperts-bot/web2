import { business } from "@content/business"
import { absoluteUrl } from "@lib/utils/url"

/**
 * JSON-LD LocalBusiness/AutomotiveBusiness. Regla del sistema: nunca incluir
 * un campo cuyo status sea "pending", "placeholder" o "do_not_publish".
 * Ver content/business.ts para el estado real de cada dato.
 */
export function buildLocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": absoluteUrl("/#business"),
    name: business.brand.value,
    url: absoluteUrl("/"),
  }

  if (business.phone.status !== "pending" && business.phone.status !== "placeholder") {
    data.telephone = business.phone.value
  }

  if (business.address.status !== "pending" && business.address.status !== "placeholder") {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: business.address.value.street,
      addressLocality: business.address.value.city,
      addressRegion: business.address.value.region,
      postalCode: business.address.value.postalCode,
      addressCountry: business.address.value.country,
    }
  }

  if (business.hours.status !== "pending" && business.hours.status !== "placeholder") {
    // Mon-Sun 7:00 AM-8:00 PM -> todos los dias, mismo horario.
    data.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "07:00",
      closes: "20:00",
    }
  }

  const confirmedSocial = Object.values(business.social)
    .filter((f) => f && f.status === "confirmed" && f.value)
    .map((f) => f!.value)
  if (confirmedSocial.length > 0) {
    data.sameAs = confirmedSocial
  }

  return data
}
