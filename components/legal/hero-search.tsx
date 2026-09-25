"use client"

import * as React from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { LegalSearchDialog } from "@/components/legal/legal-search-dialog"

const QUICK_TOPICS = [
  { label: "Account Deletion", href: "/privacy#section-18" },
  { label: "Artist Ownership & Rights", href: "/terms#section-11" },
  { label: "Copyright & Takedowns", href: "/terms#section-12" },
  { label: "Royalties & Payments", href: "/terms#section-22" },
  { label: "Fan Appreciation / Tipping", href: "/terms#section-19" },
  { label: "NDPA Data Rights", href: "/privacy#section-19" },
  { label: "Music Downloads", href: "/terms#section-7" },
]

export function HeroSearch() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className="space-y-4">
        {/* Interactive Search Bar */}
        <div className="relative max-w-2xl">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-between rounded-xl border border-border bg-background/80 px-4 py-3 text-left text-sm text-muted-foreground shadow-xs backdrop-blur-xs transition-colors hover:border-primary/50 hover:bg-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex items-center gap-3">
              <Search className="size-4 text-muted-foreground" />
              <span>
                Search across all 80 clauses (e.g., royalties, deletion, copyright, refund)...
              </span>
            </div>
            <kbd className="hidden items-center gap-1 rounded border border-border bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground sm:inline-flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Quick Topics Jump Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-medium text-muted-foreground">Frequent Inquiries:</span>
          {QUICK_TOPICS.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="inline-flex items-center rounded-lg border border-border/80 bg-muted/30 px-2.5 py-1 text-foreground/80 transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>

      <LegalSearchDialog isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
