import type { Metadata } from "next"
import { privacyPolicyData } from "@/lib/legal-data/privacy-policy-data"
import { LegalHeader } from "@/components/legal/legal-header"
import { LegalDocumentView } from "@/components/legal/legal-document-view"
import { LegalFooter } from "@/components/legal/legal-footer"

export const metadata: Metadata = {
  title: "Privacy Policy | PADETUNES",
  description:
    "Official PADETUNES Privacy Policy explaining how PADETUNES collects, uses, stores, protects, shares, and otherwise processes personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <LegalHeader />
      <main className="flex-1">
        <LegalDocumentView
          document={privacyPolicyData}
          otherDoc={{
            title: "Terms & Conditions",
            slug: "terms",
            description:
              "Read the terms governing use of PADETUNES streaming, music distribution, artist accounts, and bookings.",
          }}
        />
      </main>
      <LegalFooter />
    </div>
  )
}
