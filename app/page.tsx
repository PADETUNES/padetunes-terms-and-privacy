import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield,
  ArrowRight,
  Building,
  Building2,
  CheckCircle2,
  Lock,
  Music,
  Scale,
  Mail,
  Calendar,
} from "lucide-react"
import { LegalHeader } from "@/components/legal/legal-header"
import { LegalFooter } from "@/components/legal/legal-footer"
import { HeroSearch } from "@/components/legal/hero-search"

export const metadata: Metadata = {
  title: "Padetunes Legal & Compliance Center",
  description:
    "Official legal documentation, Privacy Policy, and Terms & Conditions for PADETUNES music streaming and distribution platform.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <LegalHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/70 bg-muted/20 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              {/* Monospace Eyebrow */}
              <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                <span>PADETUNES GLOBAL LIMITED</span>
                <span>/</span>
                <span className="font-semibold text-foreground">
                  Legal & Policy Hub
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Padetunes Legal & Compliance Hub
              </h1>

              {/* Concise Human Summary */}
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                The official documentation governing music streaming, content
                distribution, artist licensing, listener accounts, and data
                protection on the PADETUNES platform.
              </p>

              {/* Interactive Search & Fast Clause Access */}
              <div className="pt-2">
                <HeroSearch />
              </div>
            </div>

            {/* Corporate Fact Ribbon */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:grid-cols-4">
              <div className="space-y-1">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Building2 className="size-3.5 text-primary" />
                  Legal Entity
                </span>
                <p>PADETUNES GLOBAL LIMITED</p>
                <p className="text-[11px] text-muted-foreground/80">
                  Surulere, Lagos, Nigeria
                </p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Scale className="size-3.5 text-primary" />
                  Governing Law
                </span>
                <p>Federal Republic of Nigeria</p>
                <p className="text-[11px] text-muted-foreground/80">
                  Nigeria Data Protection Act 2023
                </p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Calendar className="size-3.5 text-primary" />
                  Last Updated
                </span>
                <p>September 15, 2026</p>
                <p className="text-[11px] text-muted-foreground/80">
                  Version 1.2 Review
                </p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Mail className="size-3.5 text-primary" />
                  Legal Inquiries
                </span>
                <p>Padetunes.official@gmail.com</p>
                <p className="text-[11px] text-muted-foreground/80">
                  privacy@padetunes.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Legal Documents Section (Reverted to the way they were) */}
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Privacy Policy Card */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:shadow-emerald-500/30 sm:p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-5">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Shield className="size-7" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      Privacy Policy
                    </h2>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
                    31 Sections
                  </span>
                </div>

                <div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Details how PADETUNES collects, uses, stores, secures, and
                    protects personal data across our mobile applications,
                    website, and services.
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-border/60 py-5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>
                      Nigeria Data Protection Act (NDPA 2023) Framework
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>
                      Clear Account & Data Deletion protocols (Google Play
                      compliant)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>
                      Transparent third-party disclosures for Apple & Android
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-6">
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>
                    <strong>Effective:</strong> 26-8-2026
                  </div>
                  <div>
                    <strong>Updated:</strong> 15-9-2026
                  </div>
                </div>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600! px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
                >
                  <span>Read Privacy Policy</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Terms & Conditions Card */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:shadow-padetunes/40 sm:p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-5">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Scale className="size-7" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      Terms & Conditions
                    </h2>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
                    49 Sections
                  </span>
                </div>

                <div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Governs access and use of PADETUNES services, including
                    streaming, downloads, artist distribution, bookings, fan
                    appreciation, and licensing.
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-border/60 py-5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-blue-500" />
                    <span>
                      Artists retain ownership of legally owned uploaded music
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-blue-500" />
                    <span>
                      Clear rules on streaming, downloads, bookings & fan
                      appreciation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-blue-500" />
                    <span>
                      Governed by the laws of the Federal Republic of Nigeria
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-6">
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>
                    <strong>Effective:</strong> 28-8-2026
                  </div>
                  <div>
                    <strong>Updated:</strong> 15-9-2026
                  </div>
                </div>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 rounded-lg bg-padetunes! px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
                >
                  <span>Read Terms & Conditions</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LegalFooter />
    </div>
  )
}
