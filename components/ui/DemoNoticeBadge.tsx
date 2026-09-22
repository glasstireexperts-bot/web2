export function DemoNoticeBadge({ text }: { text: string }) {
  return (
    <span className="absolute right-2 top-2 rounded-full bg-[var(--gc-danger)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
      {text}
    </span>
  )
}
