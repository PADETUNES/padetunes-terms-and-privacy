"use client"

import * as React from "react"
import { ListFilter } from "lucide-react"
import { LegalSection } from "@/lib/legal-data/privacy-policy-data"

export function TableOfContents({
  sections,
}: {
  sections: LegalSection[];
  docSlug?: string;
}) {
  const [activeId, setActiveId] = React.useState<string>("")
  const [filterText, setFilterText] = React.useState<string>("")

  // Intersection Observer for scroll spy
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting)
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries[0]
          setActiveId(topEntry.target.id)
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      }
    )

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const filteredSections = React.useMemo(() => {
    if (!filterText.trim()) return sections
    const q = filterText.toLowerCase()
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        (s.number && s.number.toString() === q.trim()) ||
        s.intro?.toLowerCase().includes(q)
    )
  }, [sections, filterText])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 88 // account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      window.history.replaceState(null, "", `#${id}`)
      setActiveId(id)
    }
  }

  return (
    <div className="sticky top-24 pl-4 border-l border-border/60">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          On This Page
        </h3>
        <span className="text-[11px] text-muted-foreground">
          {sections.length} clauses
        </span>
      </div>

      {/* Filter Input */}
      <div className="my-2.5">
        <div className="relative">
          <ListFilter className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 size-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter sections..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full rounded-md border border-border bg-background/50 py-1 pl-7 pr-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Section Links */}
      <nav
        aria-label="Table of contents"
        className="max-h-[calc(100vh-220px)] overflow-y-auto pr-2 space-y-0.5 scrollbar-thin text-xs"
      >
        {filteredSections.length === 0 ? (
          <p className="py-3 text-xs text-muted-foreground">
            No sections match &ldquo;{filterText}&rdquo;
          </p>
        ) : (
          filteredSections.map((sec) => {
            const isCurrent = activeId === sec.id
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`group flex w-full items-start gap-2 py-1.5 text-left transition-colors ${
                  isCurrent
                    ? "font-semibold text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[11px] shrink-0 opacity-60">
                  {sec.number !== undefined ? `${sec.number}.` : "•"}
                </span>
                <span className="line-clamp-1 leading-snug">
                  {sec.title}
                </span>
              </button>
            )
          })
        )}
      </nav>
    </div>
  )
}
