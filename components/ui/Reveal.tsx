"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

/**
 * Envoltura de animacion de entrada al hacer scroll. Duraciones cortas,
 * ease-out, una sola vez por elemento (viewport once: true) — criterio de
 * "emil-design-eng": la animacion debe justificarse y no repetirse en
 * acciones de alta frecuencia. Respeta prefers-reduced-motion via la
 * config global de Motion (reduce automaticamente si el SO lo pide).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
