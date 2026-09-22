"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { toWhatsAppHref } from "@lib/contact/whatsapp"

/**
 * Burbuja de chat -> WhatsApp. No es un chatbot con respuestas automaticas:
 * el visitante escribe, el boton abre WhatsApp con el mensaje ya listo para
 * enviar al numero real de Oscar Auto Glass (una persona contesta del otro
 * lado, dentro de horario de operacion — no es soporte 24/7 staffed, ver
 * dict.chatWidget.intro y content/business.ts -> hours.note).
 * Usa business.whatsapp directamente (numero real, confirmado 2026-09-22);
 * se oculta si en algun momento vuelve a quedar pending.
 */
export function ChatWidget({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"

  if (!whatsappReady) return null

  function handleSend() {
    const text = message.trim() || dict.chatWidget.placeholder
    const href = toWhatsAppHref(business.whatsapp.value, text)
    window.open(href, "_blank", "noopener,noreferrer")
    setMessage("")
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-72 overflow-hidden rounded-[var(--gc-radius-lg)] border border-black/10 bg-[var(--gc-warm-white)] shadow-2xl shadow-black/20"
          >
            <div className="bg-[var(--gc-ink)] px-4 py-3">
              <p className="text-sm font-semibold text-[var(--gc-warm-white)]">{dict.chatWidget.heading}</p>
              <p className="mt-1 text-xs text-white/60">{dict.chatWidget.intro}</p>
            </div>
            <div className="p-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={dict.chatWidget.placeholder}
                rows={3}
                className="w-full resize-none rounded-[var(--gc-radius-sm)] border border-black/10 bg-white p-2.5 text-sm text-[var(--gc-ink)] outline-none focus:border-[var(--gc-amber)]"
              />
              <button
                type="button"
                onClick={handleSend}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-[var(--gc-radius-sm)] bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#0b1a10] transition-transform active:scale-[0.97]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12 2C6.48 2 2 6.35 2 11.7c0 1.98.62 3.82 1.68 5.36L2.4 22l5.13-1.3a10.3 10.3 0 0 0 4.47 1c5.52 0 10-4.35 10-9.7S17.52 2 12 2Zm0 17.6c-1.42 0-2.78-.38-3.96-1.1l-.28-.17-3.05.78.8-2.97-.18-.3A7.86 7.86 0 0 1 4.2 11.7c0-4.27 3.5-7.73 7.8-7.73s7.8 3.46 7.8 7.73-3.5 7.9-7.8 7.9Zm4.3-5.8c-.24-.12-1.4-.7-1.62-.77-.22-.08-.37-.12-.53.12-.15.23-.6.77-.74.93-.14.15-.27.17-.5.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.23-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.15.04-.29-.02-.4-.06-.12-.53-1.28-.72-1.76-.19-.46-.38-.4-.53-.4h-.45c-.15 0-.4.06-.6.29-.2.23-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.62 2.5 3.94 3.5.55.24.98.38 1.31.48.55.17 1.06.15 1.45.09.44-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                {dict.chatWidget.sendLabel}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        aria-label={dict.chatWidget.heading}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gc-amber)] text-[var(--gc-warm-white)] shadow-lg shadow-black/25 transition-colors hover:bg-[var(--gc-amber-strong)]"
      >
        {open ? (
          <span aria-hidden="true" className="text-xl leading-none">&#10005;</span>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4.7 3.5A1 1 0 0 1 2 19.7V5a1 1 0 0 1 1-1Z" />
          </svg>
        )}
      </motion.button>
    </div>
  )
}
