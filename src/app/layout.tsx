import type { Metadata } from "next"
import { business } from "@content/business"
import "./globals.css"
import "@styles/tokens.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://glasscollision.com"),
  title: {
    default: business.brand.value,
    template: "%s",
  },
  description: "Auto glass repair in Washington, DC.",
}

// Root layout unico para "/" y "/es" (ver components/layout/LocaleHtmlSync.tsx
// para la limitacion conocida del atributo lang en /es).
// Fuente del sistema: pila sans-serif del sistema operativo, sin next/font/google,
// para no depender de red en build time (fonts.googleapis.com no es alcanzable
// desde este entorno de build). Ver docs/BUILD_REPORT.md.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--gc-warm-white)] text-[var(--gc-ink)]">
        {children}
      </body>
    </html>
  )
}
