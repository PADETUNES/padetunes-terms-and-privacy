"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Mail, Globe, MapPin } from "lucide-react"

export function LegalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="mt-20 border-t border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src="/images/padetunes.png"
                  alt="Padetunes Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Padetunes
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              PADETUNES is a digital music streaming and distribution platform
              connecting music lovers, artists, creators, producers, and
              entertainment stakeholders across the globe.
            </p>
            <div className="space-y-1.5 pt-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0 text-primary" />
                <span>29 Alhaji Masha, Surulere, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 text-primary" />
                <span>Padetunes.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="size-3.5 shrink-0 text-primary" />
                <span>https://www.padetunes.com</span>
              </div>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-foreground uppercase">
              Legal Documents
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  Legal Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Regulatory & Platform Notice */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-foreground uppercase">
              Compliance & Platform
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Operated by <strong>PADETUNES GLOBAL LIMITED</strong>. Fully
              aligned with the <strong>Nigeria Data Protection Act 2023</strong>{" "}
              (NDPA) and major digital platform standards including Apple App
              Store and Google Play Data Safety policies.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 PADETUNES. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
