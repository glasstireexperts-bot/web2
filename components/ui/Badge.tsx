export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--gc-metal-gray)] px-3 py-1 text-xs font-medium text-[var(--gc-ink)]">
      {children}
    </span>
  )
}
