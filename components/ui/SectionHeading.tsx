export function SectionHeading({
  eyebrow,
  heading,
  tone = "light",
}: {
  eyebrow?: string
  heading: string
  tone?: "light" | "dark"
}) {
  const headingColor = tone === "dark" ? "text-[var(--gc-warm-white)]" : "text-[var(--gc-ink)]"
  return (
    <div className="mb-6 sm:mb-8">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gc-amber-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingColor}`}>{heading}</h2>
      {/* Acento grafico — firma visual de Glass Collision, DC Glass Collision no lo usa */}
      <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-[var(--gc-amber)]" />
    </div>
  )
}
