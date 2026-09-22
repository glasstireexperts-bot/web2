"use client"

import { motion } from "motion/react"
import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { Container } from "@components/ui/Container"
import { CallButton } from "@components/ui/CallButton"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

/**
 * Hero cinematografico "claro + dramatico". El fondo de la SECCION usa una
 * fotografia de referencia (placeholder, ver dict.hero.photoDisclaimer) con
 * scrim lateral para legibilidad — la pagina en general se mantiene clara
 * (Clean Slate); el drama vive aqui y en las bandas puntuales, no en un
 * fondo oscuro global. Imagen esperada: /public/images/hero-bg.png
 * (generada, pendiente de reemplazo por foto real — ver ASSET_REGISTER.md).
 * No lleva <Reveal> porque es lo primero que se ve sin scroll: usa su propia
 * entrada escalonada.
 */
const PARTICLES = [
  { left: "8%", size: 5, duration: 7, delay: 0 },
  { left: "18%", size: 3, duration: 9, delay: 1.2 },
  { left: "27%", size: 4, duration: 8, delay: 2.4 },
  { left: "39%", size: 3, duration: 10, delay: 0.6 },
  { left: "52%", size: 5, duration: 7.5, delay: 3 },
  { left: "63%", size: 3, duration: 9.5, delay: 1.8 },
]

export function Hero({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  return (
    <section className="gc-letterbox relative overflow-hidden bg-[var(--gc-ink)] py-24 sm:py-32">
      {/* Foto de fondo (placeholder cinematografico) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(17,14,13,0.55), rgba(17,14,13,0.2)), url(/images/hero-bg.png)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 gc-scrim-side" />
      <div aria-hidden="true" className="absolute inset-0 gc-vignette" />
      <div aria-hidden="true" className="absolute inset-0 gc-spotlight" />
      <div aria-hidden="true" className="gc-grain" />
      {/* Particulas de polvo/chispa */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="gc-particle"
            style={{
              left: p.left,
              bottom: "6%",
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ["--gc-particle-opacity" as string]: 0.55,
            }}
          />
        ))}
      </div>

      <Container className="relative">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gc-warm-white)]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--gc-amber)]" />
            {dict.header.locationLabel}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="text-3xl font-bold leading-tight tracking-tight text-[var(--gc-warm-white)] sm:text-5xl"
          >
            {dict.hero.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {dict.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {phoneReady ? (
              <CallButton phoneDisplay={business.phone.value} label={dict.hero.ctaPrimary} variant="primary" />
            ) : null}
            {whatsappReady ? (
              <WhatsAppButton whatsappDisplay={business.whatsapp.value} label={dict.header.whatsappLabel} variant="primary" />
            ) : null}
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-[var(--gc-radius-sm)] border border-white/40 px-5 py-3 text-sm font-semibold text-[var(--gc-warm-white)] transition-colors hover:border-[var(--gc-amber)] hover:text-[var(--gc-amber)]"
            >
              {dict.hero.ctaSecondary}
            </a>
            {!phoneReady && !whatsappReady ? (
              <span className="text-xs font-medium text-white/70">
                {dict.locale === "es-US" ? "Telefono y WhatsApp proximamente" : "Phone and WhatsApp coming soon"}
              </span>
            ) : null}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-[11px] text-white/45"
          >
            {dict.hero.photoDisclaimer}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
