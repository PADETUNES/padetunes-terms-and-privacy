"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const emptySubscribe = () => () => {}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors ${className ?? ""}`}
      >
        <span className="size-4" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme (or press 'd')" : "Switch to dark theme (or press 'd')"}
      className={`inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="size-4 text-slate-700 transition-transform duration-200 rotate-0 scale-100" />
      )}
    </button>
  )
}
