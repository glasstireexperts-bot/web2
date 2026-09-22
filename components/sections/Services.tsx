"use client"

import { useEffect, useRef, useState } from "react"
import type { Dictionary } from "@content/types"
import { Container } from "@components/ui/Container"
import { SectionHeading } from "@components/ui/SectionHeading"

/**
 * Carrusel de servicios: banda oscura (contraste con el resto de la pagina,
 * clara) + tarjetas que alternan claro/oscuro entre si ("zebra"). Avanza
 * solo cada 4.5s (va y viene, sin salto brusco al reiniciar), se puede
 * mover con flechas o puntos, y se pausa al pasar el mouse. Pedido de Lups
 * 2026-09-22: que se sienta como carrusel real, no una parrilla estatica.
 */
export function Services({ dict }: { dict: Dictionary }) {
  const items = dict.services.items
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const directionRef = useRef(1)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((prev) => {
        let next = prev + directionRef.current
        if (next >= items.length - 1) {
          next = items.length - 1
          directionRef.current = -1
        } else if (next <= 0) {
          next = 0
          directionRef.current = 1
        }
        return next
      })
    }, 4500)
    return () => clearInterval(id)
  }, [paused, items.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    if (!card) return
    const style = window.getComputedStyle(track)
    const gap = parseFloat(style.columnGap || style.gap || "0")
    const step = card.offsetWidth + gap
    track.scrollTo({ left: step * index, behavior: "smooth" })
  }, [index])

  function goTo(i: number) {
    directionRef.current = i > index ? 1 : -1
    setIndex(Math.max(0, Math.min(items.length - 1, i)))
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--gc-ink)] py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-hidden="true" className="absolute inset-0 gc-spotlight opacity-60" />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={dict.hero.ctaSecondary} heading={dict.services.heading} tone="dark" />
          <div className="mb-8 flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[var(--gc-amber)] hover:text-[var(--gc-amber)]"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo(index + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[var(--gc-amber)] hover:text-[var(--gc-amber)]"
            >
              &#8594;
            </button>
          </div>
        </div>
        <p className="mb-8 max-w-2xl text-sm text-white/70">{dict.services.intro}</p>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((service, i) => {
            const dark = i % 2 === 0
            return (
              <article
                key={service.id}
                className={`min-w-[85%] shrink-0 snap-start rounded-[var(--gc-radius-lg)] border p-6 sm:min-w-[46%] lg:min-w-[31%] ${
                  dark
                    ? "border-white/15 bg-white/[0.06] text-[var(--gc-warm-white)] backdrop-blur-sm"
                    : "border-black/5 bg-[var(--gc-warm-white)] text-[var(--gc-ink)] shadow-lg shadow-black/20"
                }`}
              >
                <span className={`text-xs font-bold ${dark ? "text-[var(--gc-amber)]" : "text-[var(--gc-amber-strong)]"}`}>
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold">{service.title}</h3>
                <p className={`mt-2 text-sm ${dark ? "text-white/75" : "text-[var(--gc-ink)]/75"}`}>
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-6 flex items-center gap-2">
          {items.map((service, i) => (
            <button
              key={service.id}
              type="button"
              aria-label={`Go to ${service.title}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[var(--gc-amber)]" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>

        <p className="mt-6 text-xs text-white/60">{dict.services.pendingNote}</p>
      </Container>
    </section>
  )
}
