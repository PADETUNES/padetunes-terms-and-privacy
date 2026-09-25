"use client"

import * as React from "react"
import Link from "next/link"
import { Search, X, ArrowRight, ShieldCheck, Scale } from "lucide-react"
import { privacyPolicyData } from "@/lib/legal-data/privacy-policy-data"
import { termsData } from "@/lib/legal-data/terms-data"

interface SearchResult {
  docTitle: string;
  docSlug: string;
  sectionId: string;
  sectionNumber?: number;
  sectionTitle: string;
  snippet: string;
}

export function LegalSearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose()
        }
      }
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const results = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return []

    const list: SearchResult[] = []

    const searchInDoc = (doc: typeof privacyPolicyData) => {
      for (const section of doc.sections) {
        let matchSnippet = ""
        const titleMatch = section.title.toLowerCase().includes(trimmed)
        const introMatch = section.intro?.toLowerCase().includes(trimmed)
        const outroMatch = section.outro?.toLowerCase().includes(trimmed)
        const listMatch = section.list?.find((item) =>
          item.toLowerCase().includes(trimmed)
        )
        const orderedMatch = section.orderedList?.find((item) =>
          item.toLowerCase().includes(trimmed)
        )
        let subMatch = ""

        if (section.subsections) {
          for (const sub of section.subsections) {
            const subTitleMatch = sub.subtitle?.toLowerCase().includes(trimmed)
            const subContentMatch = sub.content?.find((c) =>
              c.toLowerCase().includes(trimmed)
            )
            const subListMatch = sub.list?.find((l) =>
              l.toLowerCase().includes(trimmed)
            )
            if (subTitleMatch || subContentMatch || subListMatch) {
              subMatch = subTitleMatch
                ? (sub.subtitle ?? "")
                : (subContentMatch || subListMatch || "")
              break
            }
          }
        }

        if (titleMatch || introMatch || outroMatch || listMatch || orderedMatch || subMatch) {
          if (titleMatch) {
            matchSnippet = section.intro?.slice(0, 140) || "Matching section title"
          } else if (introMatch) {
            matchSnippet = section.intro?.slice(0, 140) || ""
          } else if (listMatch) {
            matchSnippet = listMatch
          } else if (orderedMatch) {
            matchSnippet = orderedMatch
          } else if (subMatch) {
            matchSnippet = subMatch
          } else if (outroMatch) {
            matchSnippet = section.outro?.slice(0, 140) || ""
          }

          list.push({
            docTitle: doc.slug === "privacy" ? "Privacy Policy" : "Terms & Conditions",
            docSlug: doc.slug,
            sectionId: section.id,
            sectionNumber: section.number,
            sectionTitle: section.title,
            snippet: matchSnippet,
          })
        }
      }
    }

    searchInDoc(privacyPolicyData)
    searchInDoc(termsData)

    return list.slice(0, 20)
  }, [query])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-20 backdrop-blur-sm sm:pt-28"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="size-5 text-muted-foreground mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Privacy Policy and Terms & Conditions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 rounded-md p-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-border/40">
          {!query && (
            <div className="py-8 text-center text-xs text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Quick Search</p>
              <p>
                Type keywords like &ldquo;royalties&rdquo;, &ldquo;cancellation&rdquo;, &ldquo;deletion&rdquo;, &ldquo;copyright&rdquo;, &ldquo;booking&rdquo;, or &ldquo;payments&rdquo;
              </p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No matching sections found for &ldquo;{query}&rdquo;.
            </div>
          )}

          {results.map((res) => (
            <Link
              key={`${res.docSlug}-${res.sectionId}`}
              href={`/${res.docSlug}#${res.sectionId}`}
              onClick={onClose}
              className="flex items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-muted/70 group"
            >
              <div className="mt-0.5 shrink-0 rounded-md border border-border bg-muted/50 p-1.5 text-muted-foreground group-hover:text-primary group-hover:border-primary/40">
                {res.docSlug === "privacy" ? (
                  <ShieldCheck className="size-4 text-emerald-500" />
                ) : (
                  <Scale className="size-4 text-blue-500" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/80">{res.docTitle}</span>
                  <span>•</span>
                  <span>Section {res.sectionNumber}</span>
                </div>
                <div className="mt-0.5 font-semibold text-sm text-foreground group-hover:text-primary">
                  {res.sectionTitle}
                </div>
                {res.snippet && (
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                    {res.snippet}
                  </p>
                )}
              </div>
              <ArrowRight className="size-4 text-muted-foreground self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
          <span>{results.length} result{results.length === 1 ? "" : "s"} found</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  )
}
