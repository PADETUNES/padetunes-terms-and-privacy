"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, Shield, FileText, Menu, X, Home } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LegalSearchDialog } from "@/components/legal/legal-search-dialog"

export function LegalHeader() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Keyboard shortcut Ctrl+K / Cmd+K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const navLinks = [
    { href: "/", label: "Overview", icon: Home },
    { href: "/privacy", label: "Privacy Policy", icon: Shield },
    { href: "/terms", label: "Terms & Conditions", icon: FileText },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Top Left: Padetunes Logo + "Padetunes" text */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-90"
              aria-label="Padetunes Home"
            >
              {/* <div className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-xs"> */}
              <div>
                <Image
                  src="/images/padetunes.png"
                  alt="Padetunes Logo"
                  width={36}
                  height={36}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-foreground">
                    Padetunes
                  </span>
                  <span className="hidden items-center rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold tracking-wider text-primary uppercase sm:inline-flex">
                    Legal
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="ml-4 hidden items-center gap-1.5 border-l border-border/60 pl-6 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-transparent text-padetunes shadow-xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Right Side Actions: Search, Theme Toggle, Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search documents"
              className="inline-flex h-9 items-center justify-between gap-2 rounded-lg border border-border bg-muted/40 px-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:w-48 lg:w-64"
            >
              <div className="flex items-center gap-2">
                <Search className="size-3.5" />
                <span className="hidden sm:inline">Search legal docs...</span>
                <span className="sm:hidden">Search...</span>
              </div>
              <kbd className="hidden items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="animate-in space-y-1 border-b border-border bg-background px-4 py-3 shadow-lg slide-in-from-top-2 md:hidden">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary font-semibold text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </header>

      {/* Search Modal */}
      <LegalSearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  )
}
