import type { Metadata } from "next"
import { termsData } from "@/lib/legal-data/terms-data"
import { LegalHeader } from "@/components/legal/legal-header"
import { LegalDocumentView } from "@/components/legal/legal-document-view"
import { LegalFooter } from "@/components/legal/legal-footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | PADETUNES",
  description:
    "Official PADETUNES Terms & Conditions governing access to and use of the PADETUNES website, mobile applications, music streaming, and artist services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <LegalHeader />
      <main className="flex-1">
        <LegalDocumentView
          document={termsData}
          otherDoc={{
            title: "Privacy Policy",
            slug: "privacy",
            description:
              "Learn how PADETUNES collects, uses, protects, and stores personal information.",
          }}
        />
      </main>
      <LegalFooter />
    </div>
  )
}
