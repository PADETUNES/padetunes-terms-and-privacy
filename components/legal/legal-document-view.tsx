"use client"

import * as React from "react"
import Link from "next/link"
import {
  Printer,
  Check,
  Share2,
  ChevronRight,
  Hash,
} from "lucide-react"
import { LegalDocument } from "@/lib/legal-data/privacy-policy-data"
import { TableOfContents } from "@/components/legal/table-of-contents"

export function LegalDocumentView({
  document,
  otherDoc,
}: {
  document: LegalDocument;
  otherDoc: { title: string; slug: string; description: string };
}) {
  const [copiedId, setCopiedId] = React.useState<string | null>(null)
  const [docLinkCopied, setDocLinkCopied] = React.useState(false)

  const copySectionLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const copyDocLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setDocLinkCopied(true)
    setTimeout(() => setDocLinkCopied(false), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Document Body (Continuous standard legal document layout) */}
        <main className="lg:col-span-8 min-w-0">
          <div className="max-w-3xl">
            {/* Header / Title block (matching reference format) */}
            <div className="border-b border-border/60 pb-6 mb-8">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {document.slug === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
                </h1>

                {/* Print and Share buttons */}
                <div className="print:hidden flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyDocLink}
                    title="Copy document link"
                    aria-label="Share document"
                    className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {docLinkCopied ? (
                      <Check className="size-4 text-emerald-500" />
                    ) : (
                      <Share2 className="size-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    title="Print document"
                    aria-label="Print document"
                    className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <Printer className="size-4" />
                  </button>
                </div>
              </div>

              {/* Italic date line matching reference format: Last Updated: ... */}
              <p className="mt-3 text-sm italic text-muted-foreground">
                Last Updated: {document.lastUpdated}
                <span className="mx-2 not-italic text-border">•</span>
                Effective Date: {document.effectiveDate}
              </p>
            </div>

            {/* Preamble / Introduction */}
            <div className="space-y-4 text-base leading-relaxed text-foreground/90 mb-10">
              {document.preamble.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Continuous Sections */}
            <div className="space-y-10">
              {document.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 group/section"
                >
                  {/* Section Title with anchor link */}
                  <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-2 mb-4">
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                      <span>
                        {section.number !== undefined ? `${section.number}. ` : ""}
                        {section.title}
                      </span>
                    </h2>

                    <button
                      type="button"
                      onClick={() => copySectionLink(section.id)}
                      title="Copy link to this section"
                      aria-label={`Copy link to section ${section.title}`}
                      className="print:hidden opacity-0 group-hover/section:opacity-100 p-1 text-muted-foreground hover:text-primary transition-opacity"
                    >
                      {copiedId === section.id ? (
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <Check className="size-3" /> Copied
                        </span>
                      ) : (
                        <Hash className="size-4" />
                      )}
                    </button>
                  </div>

                  {/* Section Body */}
                  <div className="space-y-4 text-base leading-relaxed text-foreground/90">
                    {section.intro && (
                      <div className="whitespace-pre-line leading-relaxed">
                        {section.intro}
                      </div>
                    )}

                    {section.content && (
                      <div className="space-y-3">
                        {section.content.map((p, idx) => (
                          <p key={idx} className="whitespace-pre-line leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Subsections if any */}
                    {section.subsections && (
                      <div className="space-y-6 pt-2">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-3">
                            {sub.subtitle && (
                              <h3 className="font-bold text-foreground text-base mt-4 mb-2">
                                {sub.subtitle}
                              </h3>
                            )}
                            {sub.content && (
                              <div className="space-y-2">
                                {sub.content.map((sc, scIdx) => (
                                  <p key={scIdx} className="whitespace-pre-line text-base leading-relaxed">
                                    {sc}
                                  </p>
                                ))}
                              </div>
                            )}
                            {sub.list && (
                              <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground/90 my-3">
                                {sub.list.map((item, lIdx) => (
                                  <li key={lIdx} className="leading-relaxed">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {sub.orderedList && (
                              <ol className="list-decimal pl-6 space-y-1.5 text-base text-foreground/90 my-3">
                                {sub.orderedList.map((item, olIdx) => (
                                  <li key={olIdx} className="leading-relaxed">
                                    {item}
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Unordered List */}
                    {section.list && (
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground/90 my-3">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Ordered List */}
                    {section.orderedList && (
                      <ol className="list-decimal pl-6 space-y-1.5 text-base text-foreground/90 my-3">
                        {section.orderedList.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Outro */}
                    {section.outro && (
                      <div className="whitespace-pre-line leading-relaxed pt-1">
                        {section.outro}
                      </div>
                    )}

                    {/* Callout Notice if present */}
                    {section.callout && (
                      <div className="my-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                        {section.callout.text}
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Final Note */}
            {document.finalNote && (
              <div className="mt-14 border-t border-border/80 pt-6 text-sm text-muted-foreground leading-relaxed space-y-2">
                <p className="font-bold uppercase tracking-wider text-foreground">
                  Final Note
                </p>
                <p>{document.finalNote}</p>
                <p className="text-xs font-mono pt-1">Last Updated: {document.lastUpdated}</p>
              </div>
            )}

            {/* Switch to Next Legal Document */}
            <div className="print:hidden mt-12 border-t border-border pt-8 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Related Document
                </p>
                <p className="text-base font-semibold text-foreground">
                  {otherDoc.title}
                </p>
              </div>
              <Link
                href={`/${otherDoc.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                <span>Read {otherDoc.title}</span>
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Quiet, sticky sidebar Table of Contents in the margin */}
        <aside className="hidden lg:block lg:col-span-4 print:hidden">
          <TableOfContents sections={document.sections} />
        </aside>
      </div>
    </div>
  )
}
