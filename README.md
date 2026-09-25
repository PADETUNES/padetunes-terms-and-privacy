# PADETUNES Legal & Policy Documentation Portal

The official legal and compliance portal for **PADETUNES** — a digital music streaming and distribution platform operated by **PADETUNES GLOBAL LIMITED** that connects music lovers, artists, creators, producers, and entertainment stakeholders across the globe.

---

## Overview

This repository hosts the official, clause-by-clause legal documentation and public compliance portal for PADETUNES. Built with **Next.js 16**, **React 19**, and **Tailwind CSS**, it delivers a standard, continuous document-reading experience optimized for transparency, searchability, and cross-platform compliance (including the Nigeria Data Protection Act 2023, Apple App Store, and Google Play Data Safety policies).

---

## Core Pages & Features

### 1. Legal Hub Overview (`/`)
- **Editorial Legal Header**: Clean, non-generic legal directory interface with corporate governance facts.
- **Corporate Fact Ribbon**: Highlights operating entity, jurisdiction, last revised date, and verified contact channels.
- **Integrated Full-Text Clause Search**: Instant keyword search across all 80 clauses (`Ctrl+K` / `⌘K`).
- **Quick-Access Inquiries**: Direct jump pills to frequent topics (Account Deletion, Artist Ownership, Royalties, Copyright Takedowns, NDPA Rights, Music Downloads).
- **Core Document Dossiers**: Executive overview cards for the Privacy Policy and Terms & Conditions.

### 2. Privacy Policy (`/privacy` & `/privacy-policy`)
- **Standard Document Format**: Distraction-free, continuous reading layout matching standard legal document formatting.
- **Scope**: Complete **31 numbered sections**, preamble, and final notes:
  - Corporate details & data controller/processor definitions
  - Direct information collection & artist/creator profiling
  - Automated analytics, logs, and location permissions
  - 4 Purpose groups for data processing
  - Personalized recommendations, advertising, and cookie policies
  - Payment processing and financial disclosures
  - Fan appreciation / tipping & artist booking data
  - Data sharing (service providers, public data, legal authorities)
  - International transfers & technical data security standards
  - Data retention & **Google Play-compliant Account Deletion** (`privacy@padetunes.com`)
  - **Nigeria Data Protection Act (NDPA 2023)** statutory rights
  - Children's privacy & platform disclosures (Apple App Store & Google Play)

### 3. Terms & Conditions (`/terms` & `/terms-and-conditions`)
- **Standard Document Format**: Full continuous legal text with section permalinks.
- **Scope**: Complete **49 numbered sections**, preamble, and copyright notice:
  - Service overview, acceptance, and eligibility criteria
  - User accounts and acceptable use prohibitions
  - Music streaming rules & music download restrictions
  - Artist accounts, creator tools, representations, and sample clearance warranties
  - Platform licensing & **retention of artist ownership**
  - Copyright enforcement, DMCA/counter-notices, and content moderation
  - Fan appreciation transactions & artist booking facilitation
  - Booking escrow, fee structures, and **royalty administration**
  - Intellectual property, software license, and third-party store terms
  - Limitation of liability, indemnification, and user dispute processes
  - Governing law: **Federal Republic of Nigeria**
  - Severability, entire agreement, contact information, and user acknowledgement

### 4. Interactive Documentation Features
- **Sticky Table of Contents**: Minimal sidebar on desktop with live scrollspy (`IntersectionObserver`) and real-time clause filtering.
- **Section Permalinks**: Hoverable `#` anchor links on every clause for direct sharing.
- **Document Utilities**: One-click **Print / Save as PDF** and **Copy Document Link**.
- **Customized Brand Appbar**: Displays the official PADETUNES logo (`public/images/padetunes.png`) and bold **Padetunes** brand title at the top left.
- **Dark & Light Mode**: Accessible theme switcher with system preference detection and hotkey toggle (`d`).

---

## Tech Stack

| Technology | Description |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) & [@base-ui/react](https://base-ui.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |

---

## Project Structure

```
padetunes-doc/
├── app/
│   ├── layout.tsx                 # Root layout with Geist font & ThemeProvider
│   ├── page.tsx                   # Legal Hub Overview with hero search & dossiers
│   ├── globals.css                # Tailwind v4 theme variables (light/dark)
│   ├── privacy/
│   │   └── page.tsx               # Full Privacy Policy page (31 sections)
│   ├── privacy-policy/
│   │   └── page.tsx               # Permanent redirect to /privacy
│   ├── terms/
│   │   └── page.tsx               # Full Terms & Conditions page (49 sections)
│   └── terms-and-conditions/
│       └── page.tsx               # Permanent redirect to /terms
├── components/
│   ├── legal/
│   │   ├── legal-header.tsx       # Top Appbar: Padetunes Logo + Title + Search + Nav
│   │   ├── legal-footer.tsx       # Corporate footer with address, emails, and links
│   │   ├── legal-document-view.tsx# Standard continuous legal document renderer
│   │   ├── legal-search-dialog.tsx# Global clause search modal (Ctrl+K)
│   │   ├── table-of-contents.tsx  # Sticky marginal TOC with scrollspy & filter
│   │   └── hero-search.tsx        # Hero search bar and quick inquiry pills
│   ├── theme-provider.tsx         # NextThemes wrapper with hotkey support
│   ├── theme-toggle.tsx           # Sun/Moon theme toggle button
│   └── ui/
│       └── button.tsx             # Base UI accessible button primitive
├── lib/
│   ├── utils.ts                   # Class merging utility (cn)
│   └── legal-data/
│       ├── privacy-policy-data.ts # Full structured dataset for Privacy Policy
│       └── terms-data.ts          # Full structured dataset for Terms & Conditions
└── public/
    └── images/
        └── padetunes.png          # Official Padetunes logo asset
```

---

## Getting Started

### Prerequisites
- **Node.js** (v20+ recommended)
- **pnpm** (v10+ recommended)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/flexcodes/padetunes-doc.git
cd padetunes-doc
pnpm install
```

### Development
Start the local development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portal.

### Build & Static Export
Create an optimized production build:
```bash
pnpm build
```

### Code Quality & Validation
Run type checks and linting:
```bash
# Type check TypeScript files
pnpm typecheck

# Lint files with ESLint
pnpm lint

# Format code with Prettier
pnpm format
```

---

## Corporate & Contact Information

| Detail | Information |
| :--- | :--- |
| **Legal Entity** | PADETUNES GLOBAL LIMITED |
| **Trading Name** | PADETUNES / PADETUNES MUSIC |
| **Country** | Nigeria |
| **Business Address** | 29 Alhaji Masha, Surulere, Lagos, Nigeria |
| **Official Email** | [Padetunes.official@gmail.com](mailto:Padetunes.official@gmail.com) |
| **Privacy Inquiries** | [privacy@padetunes.com](mailto:privacy@padetunes.com) |
| **Official Website** | [https://www.padetunes.com](https://www.padetunes.com) |

---

## Copyright

© 2026 PADETUNES GLOBAL LIMITED. All rights reserved.
