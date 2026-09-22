import type { Dictionary } from "@content/types"
import { business } from "@content/business"
import { toTelHref } from "@lib/contact/phone"
import { toWhatsAppHref } from "@lib/contact/whatsapp"

export function MobileCallBar({ dict }: { dict: Dictionary }) {
  const phoneReady = business.phone.status !== "pending" && business.phone.status !== "placeholder"
  const whatsappReady = business.whatsapp.status !== "pending" && business.whatsapp.status !== "placeholder"
  if (!phoneReady && !whatsappReady) return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-black/10 bg-[var(--gc-warm-white)] sm:hidden">
      {phoneReady ? (
        <a
          href={toTelHref(business.phone.value)}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-[var(--gc-warm-white)] bg-[var(--gc-amber)] active:scale-[0.97]"
        >
          {dict.mobileBar.call}
        </a>
      ) : null}
      {whatsappReady ? (
        <a
          href={toWhatsAppHref(business.whatsapp.value)}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-[#0b1a10] bg-[#25D366] active:scale-[0.97]"
        >
          {dict.mobileBar.whatsapp}
        </a>
      ) : null}
      {phoneReady ? (
        <a
          href={toTelHref(business.phone.value)}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-[var(--gc-ink)] active:scale-[0.97]"
        >
          {dict.mobileBar.estimate}
        </a>
      ) : null}
    </div>
  )
}
