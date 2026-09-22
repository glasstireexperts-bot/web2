import type { Metadata } from "next"
import { esUS } from "@content/es-US"
import { buildMetadata } from "@lib/seo/metadata"
import { buildLocalBusinessJsonLd } from "@lib/seo/jsonld"
import { HomeSections } from "@components/HomeSections"

export const metadata: Metadata = buildMetadata(esUS)

export default function HomePageEs() {
  const jsonLd = buildLocalBusinessJsonLd()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeSections dict={esUS} />
    </>
  )
}
