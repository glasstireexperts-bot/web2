"use client"

import { motion } from "motion/react"
import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { CallButton } from "@components/ui/CallButton"
import { WhatsAppButton } from "@components/ui/WhatsAppButton"

/**
 * CTA flotante persistente para escritorio (>= sm). En movil ya existe
 * MobileCallBar; este es el equivalente de escritorio, oculto en movil para
 * no duplicar con la barra inferior. Otro punto de contacto de llamada a la
 * accion ademas del Hero y el FinalCta, tal como pidio Lups.
 */
export function FloatingCta({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  if (!phoneReady && !whatsappReady) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed bottom-24 right-6 z-30 hidden flex-col items-end gap-2 sm:flex"
    >
      {whatsappReady ? (
        <WhatsAppButton
          whatsappDisplay={business.whatsapp.value}
          label={dict.header.whatsappLabel}
          variant="primary"
          className="shadow-lg shadow-black/10"
        />
      ) : null}
      {phoneReady ? (
        <CallButton
          phoneDisplay={business.phone.value}
          label={dict.header.callLabel}
          variant="primary"
          className="shadow-lg shadow-black/15"
        />
      ) : null}
    </motion.div>
  )
}
