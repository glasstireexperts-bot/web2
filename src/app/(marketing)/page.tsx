import type { Metadata } from "next"
import { enUS } from "@content/en-US"
import { buildMetadata } from "@lib/seo/metadata"
import { buildLocalBusinessJsonLd } from "@lib/seo/jsonld"
import { HomeSections } from "@components/HomeSections"

export const metadata: Metadata = buildMetadata(enUS)

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeSections dict={enUS} />
    </>
  )
}
