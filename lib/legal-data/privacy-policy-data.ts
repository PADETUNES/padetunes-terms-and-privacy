export interface LegalSubSection {
  subtitle?: string
  content?: string[]
  list?: string[]
  orderedList?: string[]
}

export interface LegalSection {
  id: string
  number?: number
  title: string
  intro?: string
  content?: string[]
  subsections?: LegalSubSection[]
  list?: string[]
  orderedList?: string[]
  outro?: string
  callout?: {
    type: "info" | "warning" | "note"
    text: string
  }
}

export interface LegalDocument {
  title: string
  slug: string
  effectiveDate: string
  lastUpdated: string
  preamble: string[]
  sections: LegalSection[]
  finalNote?: string
}

export const privacyPolicyData: LegalDocument = {
  title: "PADETUNES PRIVACY POLICY",
  slug: "privacy",
  effectiveDate: "26-8-2026",
  lastUpdated: "15-9-2026",
  preamble: [
    'PADETUNES ("PADETUNES", "we", "us", or "our") is a digital music streaming and distribution platform that connects music lovers, artists, creators, producers, and other entertainment stakeholders.',
    'This Privacy Policy explains how PADETUNES collects, uses, stores, protects, shares, and otherwise processes personal information when you use our mobile applications, website, services, and related products (collectively, the "Services").',
    "By accessing or using PADETUNES, you acknowledge that you have read and understood this Privacy Policy.",
  ],
  sections: [
    {
      id: "section-1",
      number: 1,
      title: "WHO WE ARE",
      intro: "PADETUNES is operated by:",
      list: [
        "Legal Company Name: PADETUNES GLOBAL LIMITED",
        "Trading Name: PADETUNES MUSIC",
        "Country: Nigeria",
        "Business Address: 29 Alhaji Masha, Surulere, Lagos",
        "Email: Padetunes.official@gmail.com",
        "Website: [https://www.padetunes.com]",
      ],
      outro:
        "For purposes of applicable data-protection laws, PADETUNES may act as a data controller when determining why and how personal data is processed and may engage third-party service providers as data processors.",
    },
    {
      id: "section-2",
      number: 2,
      title: "INFORMATION WE COLLECT",
      intro:
        "We collect information that is necessary to provide, maintain, improve, secure, and personalize our Services.\n\nThe information we collect may include the following.",
      subsections: [
        {
          subtitle: "2.1 Information You Provide Directly",
          content: [
            "When you create or use a PADETUNES account, we may collect:",
          ],
          list: [
            "Full name",
            "Username",
            "Email address",
            "Phone number",
            "Password or authentication credentials",
            "Profile photograph",
            "Date of birth or age information where required",
            "Gender, where voluntarily provided",
            "Country, state, city, or general location",
            "Artist information",
            "Biography",
            "Music genre",
            "Social-media links",
            "Artist profile information",
            "Booking information",
            "Payment-related information",
            "Other information you voluntarily provide to us",
          ],
        },
      ],
      outro:
        "You may choose not to provide certain information, but some features may not function without it.",
    },
    {
      id: "section-3",
      number: 3,
      title: "INFORMATION COLLECTED FROM ARTISTS AND CREATORS",
      intro:
        "If you register as an artist, creator, producer, or other content provider, PADETUNES may collect additional information necessary to operate your account and distribute your content.\n\nThis may include:",
      list: [
        "Artist/stage name",
        "Legal name",
        "Artist biography",
        "Profile photograph",
        "Music recordings",
        "Album and song information",
        "Cover artwork",
        "Lyrics",
        "Music credits",
        "Composer and songwriter information",
        "Producer information",
        "Copyright or ownership information",
        "Royalty information",
        "Distribution information",
        "Payment information",
        "Tax information where legally required",
        "Identification or verification information where required",
        "Booking information",
        "Performance information",
        "Information concerning rights or licenses relating to uploaded content",
      ],
      outro:
        "Artists are responsible for ensuring that they have the necessary rights, permissions, licenses, and authority to upload content to PADETUNES.",
    },
    {
      id: "section-4",
      number: 4,
      title: "MUSIC, AUDIO, VIDEO AND OTHER USER CONTENT",
      intro:
        "PADETUNES allows users, particularly artists and creators, to upload and submit content.\n\nThis may include:",
      list: [
        "Songs",
        "Audio recordings",
        "Music videos",
        "Images",
        "Album artwork",
        "Lyrics",
        "Artist biographies",
        "Promotional materials",
        "Comments",
        "Reviews",
        "Playlists",
        "Other creator content",
      ],
      outro:
        "Content uploaded to PADETUNES may be processed, stored, streamed, distributed, displayed, promoted, or otherwise used in accordance with our Terms of Service and the permissions granted to PADETUNES.\n\nWhere content is intended to be publicly available, certain information associated with that content may also be visible to other users.",
    },
    {
      id: "section-5",
      number: 5,
      title: "INFORMATION WE COLLECT AUTOMATICALLY",
      intro:
        "When you access PADETUNES, we may automatically collect certain technical and usage information.\n\nThis may include:",
      list: [
        "IP address",
        "Device type",
        "Mobile device identifier",
        "Operating system",
        "Browser type",
        "App version",
        "Language preferences",
        "Network information",
        "Approximate location",
        "Device performance information",
        "Crash reports",
        "Log information",
        "Session information",
        "Pages or screens visited",
        "Music searched for",
        "Music played",
        "Music skipped",
        "Music downloaded",
        "Playlists created",
        "Artists followed",
        "Content interacted with",
        "Advertisement interactions",
        "Features used",
        "Date and time of activity",
      ],
      outro:
        "We use this information to operate, secure, analyze, and improve PADETUNES.",
    },
    {
      id: "section-6",
      number: 6,
      title: "LOCATION INFORMATION",
      intro:
        "PADETUNES may collect approximate location information, such as country, state, or city, where necessary for certain features.\n\nWe will only access precise device location where:",
      orderedList: [
        "The feature requires it;",
        "The operating system permits such access; and",
        "You provide the required permission.",
      ],
      outro:
        "You may disable location permissions through your device settings. Some features may not function correctly if location access is disabled.",
    },
    {
      id: "section-7",
      number: 7,
      title: "HOW WE USE YOUR INFORMATION",
      intro: "We may use personal information for the following purposes:",
      subsections: [
        {
          subtitle: "7.1 Providing the PADETUNES Service",
          content: ["We use your information to:"],
          list: [
            "Create and manage accounts",
            "Authenticate users",
            "Provide music streaming",
            "Provide downloads where available",
            "Create personalized experiences",
            "Maintain playlists",
            "Connect fans with artists",
            "Facilitate artist discovery",
            "Facilitate artist bookings",
            "Process appreciation/tipping transactions",
            "Process payments",
            "Manage artist accounts",
            "Distribute music",
            "Calculate and administer royalties",
            "Provide customer support",
          ],
        },
        {
          subtitle: "7.2 Improving PADETUNES",
          content: ["We may analyze usage information to:"],
          list: [
            "Improve application performance",
            "Improve recommendations",
            "Develop new features",
            "Understand user behavior",
            "Identify technical problems",
            "Improve search functionality",
            "Improve music discovery",
            "Improve artist tools",
          ],
        },
        {
          subtitle: "7.3 Security and Fraud Prevention",
          content: ["We may process information to:"],
          list: [
            "Detect fraudulent activity",
            "Prevent unauthorized access",
            "Protect accounts",
            "Detect abuse",
            "Investigate suspicious transactions",
            "Protect our systems",
            "Enforce our Terms of Service",
          ],
        },
        {
          subtitle: "7.4 Communications",
          content: ["We may use your information to send:"],
          list: [
            "Account notifications",
            "Security alerts",
            "Transaction confirmations",
            "Service updates",
            "Important policy updates",
            "Customer-support communications",
          ],
        },
      ],
      outro:
        "Where required by law, we will request consent before sending promotional communications.",
    },
    {
      id: "section-8",
      number: 8,
      title: "PERSONALIZED RECOMMENDATIONS",
      intro: "PADETUNES may use information such as:",
      list: [
        "Listening history",
        "Search history",
        "Artists followed",
        "Songs played",
        "Playlists",
        "Likes or other interactions",
        "General location",
        "Device and usage information",
      ],
      outro:
        "to personalize music recommendations and improve music discovery.\n\nYou may be able to control certain personalization features through your account or device settings.",
    },
    {
      id: "section-9",
      number: 9,
      title: "ADVERTISING",
      intro:
        "PADETUNES may display advertisements within its mobile applications and website.\n\nAdvertising partners may collect or receive certain information necessary to:",
      list: [
        "Deliver advertisements",
        "Measure advertising performance",
        "Prevent advertising fraud",
        "Understand advertisement interactions",
        "Provide relevant advertising",
      ],
      outro:
        "Where required by applicable law or platform policy, PADETUNES will obtain appropriate consent or provide applicable privacy choices.\n\nIf PADETUNES uses third-party advertising SDKs, those services will be identified in our applicable disclosures and our app-store privacy declarations will be updated accordingly.",
    },
    {
      id: "section-10",
      number: 10,
      title: "COOKIES AND SIMILAR TECHNOLOGIES",
      intro:
        "Our website may use cookies, pixels, SDKs, local storage, and similar technologies.\n\nThese technologies may be used to:",
      list: [
        "Keep you signed in",
        "Remember preferences",
        "Understand website usage",
        "Measure performance",
        "Improve security",
        "Analyze traffic",
        "Personalize content",
        "Support advertising",
      ],
      outro:
        "You may control cookies through your browser settings where available.",
    },
    {
      id: "section-11",
      number: 11,
      title: "PAYMENTS AND FINANCIAL INFORMATION",
      intro: "PADETUNES may offer services involving payments, including:",
      list: [
        "Fan appreciation",
        "Artist payments",
        "Booking payments",
        "Subscriptions, where introduced",
        "Music-related purchases",
        "Other transactions",
      ],
      content: [
        "Payment transactions may be processed through third-party payment processors.",
        "PADETUNES does not intend to store complete payment-card information when such information is processed directly by a third-party payment provider.",
        "Payment providers may process information such as:",
      ],
      subsections: [
        {
          list: [
            "Name",
            "Email",
            "Phone number",
            "Transaction amount",
            "Transaction reference",
            "Payment status",
            "Billing information",
            "Other information required to complete the transaction",
          ],
        },
      ],
      outro:
        "Third-party payment providers process information according to their own privacy policies and applicable laws.",
    },
    {
      id: "section-12",
      number: 12,
      title: "ARTIST APPRECIATION AND TIPPING",
      intro:
        "Where PADETUNES enables fans to financially appreciate artists, information necessary to process the transaction may be collected.\n\nThis may include:",
      list: [
        "Sender information",
        "Artist recipient information",
        "Transaction amount",
        "Transaction reference",
        "Payment status",
        "Date and time",
        "Related account information",
      ],
      outro:
        "Transaction information may be retained for accounting, fraud prevention, dispute resolution, tax, legal, and royalty purposes.",
    },
    {
      id: "section-13",
      number: 13,
      title: "ARTIST BOOKING",
      intro:
        "Where PADETUNES provides artist-booking functionality, we may process information necessary to facilitate a booking.\n\nThis may include:",
      list: [
        "Customer name",
        "Contact information",
        "Event information",
        "Event date",
        "Event location",
        "Artist information",
        "Booking fee",
        "Payment information",
        "Booking status",
        "Communication relating to the booking",
      ],
      outro:
        "We may share necessary information between the relevant parties to facilitate the booking.",
    },
    {
      id: "section-14",
      number: 14,
      title: "HOW WE SHARE INFORMATION",
      intro:
        "PADETUNES does not sell your personal information merely because you use the Services.\n\nWe may share information where reasonably necessary with:",
      subsections: [
        {
          subtitle: "Service Providers",
          content: ["These may include providers of:"],
          list: [
            "Cloud hosting",
            "Database services",
            "Payment processing",
            "Authentication",
            "Analytics",
            "Advertising",
            "Customer support",
            "Email and messaging",
            "Security",
            "Content delivery",
            "Crash reporting",
            "Music distribution",
            "Fraud prevention",
          ],
        },
        {
          subtitle: "Artists and Other Users",
          content: [
            "Service providers are expected to process information only for legitimate purposes and under appropriate contractual or legal safeguards.\n\nInformation that you intentionally make public may be visible to other users.\n\nFor example, your:",
          ],
          list: [
            "Username",
            "Artist profile",
            "Profile image",
            "Public biography",
            "Public music",
            "Public playlists",
            "Public comments",
          ],
        },
        {
          subtitle: "Legal and Regulatory Authorities",
          content: [
            "may be displayed to other PADETUNES users.\n\nWe may disclose information where required to:",
          ],
          list: [
            "Comply with applicable law",
            "Respond to lawful requests",
            "Protect our legal rights",
            "Investigate fraud",
            "Prevent harm",
            "Protect users",
            "Enforce our agreements",
          ],
        },
        {
          subtitle: "Business Transfers",
          content: ["If PADETUNES is involved in:"],
          list: [
            "A merger",
            "Acquisition",
            "Investment",
            "Reorganization",
            "Sale of assets",
            "Corporate restructuring",
          ],
        },
      ],
      outro:
        "personal information may be transferred as part of the transaction, subject to applicable privacy requirements.",
    },
    {
      id: "section-15",
      number: 15,
      title: "INTERNATIONAL DATA TRANSFERS",
      intro:
        "PADETUNES may use service providers located outside Nigeria.\n\nAs a result, personal information may be processed or stored in countries other than the country in which you live.\n\nWhere applicable, we will take reasonable steps to ensure that international transfers are conducted in accordance with applicable data-protection laws.",
    },
    {
      id: "section-16",
      number: 16,
      title: "DATA SECURITY",
      intro:
        "We take reasonable technical, administrative, and organizational measures to protect personal information against:",
      list: [
        "Unauthorized access",
        "Unauthorized disclosure",
        "Loss",
        "Misuse",
        "Alteration",
        "Destruction",
      ],
      content: ["Security measures may include:"],
      subsections: [
        {
          list: [
            "Encryption in transit",
            "Secure authentication",
            "Access controls",
            "Password protection",
            "Monitoring",
            "Logging",
            "Security testing",
            "Backups",
            "Role-based access controls",
          ],
        },
      ],
      outro:
        "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
    },
    {
      id: "section-17",
      number: 17,
      title: "DATA RETENTION",
      intro:
        "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:",
      list: [
        "Providing our Services",
        "Maintaining accounts",
        "Processing transactions",
        "Meeting legal obligations",
        "Resolving disputes",
        "Enforcing agreements",
        "Preventing fraud",
        "Maintaining business records",
      ],
      outro:
        "When information is no longer required, we may delete, anonymize, or securely dispose of it in accordance with applicable law.",
    },
    {
      id: "section-18",
      number: 18,
      title: "ACCOUNT DELETION",
      intro:
        "You may request deletion of your PADETUNES account.\n\nWhere available, account deletion may be initiated through the application or by contacting:\n\nEmail: privacy@padetunes.com\n\nWhen you request deletion, we will take reasonable steps to delete or anonymize personal information associated with your account, subject to information that we are legally required or legitimately permitted to retain.\n\nFor example, certain financial, transaction, fraud-prevention, legal, royalty, or accounting records may need to be retained for a legally required period.",
      outro:
        "Google Play specifically requires apps that permit account creation to provide users with a way to request account deletion and associated data deletion.",
      callout: {
        type: "info",
        text: "Account deletion can be requested via in-app settings or directly at privacy@padetunes.com.",
      },
    },
    {
      id: "section-19",
      number: 19,
      title: "YOUR DATA PROTECTION RIGHTS",
      intro: "Subject to applicable law, you may have rights including:",
      list: [
        "Right to be informed",
        "Right to access your personal information",
        "Right to request correction of inaccurate information",
        "Right to request deletion",
        "Right to object to certain processing",
        "Right to restrict certain processing",
        "Right to withdraw consent where processing relies on consent",
        "Right to data portability",
        "Right to lodge a complaint with a relevant supervisory authority",
        "Rights relating to certain automated decision-making",
      ],
      outro:
        "These rights are consistent with rights identified by the Nigeria Data Protection Commission under the Nigeria Data Protection Act framework.\n\nTo exercise your rights, contact:\n\nPrivacy Email: padetunes.officail@gmail.com\n\nWe may need to verify your identity before completing certain requests.",
    },
    {
      id: "section-20",
      number: 20,
      title: "CHILDREN'S PRIVACY",
      intro:
        "PADETUNES is not intended to knowingly collect personal information from children in circumstances were doing so would violate applicable law.\n\nIf you believe that a child has provided personal information to PADETUNES without appropriate authorization, please contact us.\n\nWe will take reasonable steps to investigate and, where appropriate, delete the information.\n\nIf PADETUNES later introduces features specifically directed toward children, we will update this Privacy Policy and implement any additional safeguards required by applicable law.",
    },
    {
      id: "section-21",
      number: 21,
      title: "THIRD-PARTY SERVICES",
      intro: "PADETUNES may integrate third-party services, including:",
      list: [
        "Payment providers",
        "Cloud hosting providers",
        "Analytics platforms",
        "Advertising networks",
        "Authentication providers",
        "Social-login providers",
        "Music distribution services",
        "Communication services",
        "Security services",
      ],
      outro:
        "These third parties may process information in accordance with their own privacy policies.\n\nPADETUNES will seek to ensure that third-party providers handling personal information provide appropriate privacy and security protections.\n\nApple requires apps to disclose third parties that receive user data, including analytics tools, advertising networks, and third-party SDKs.",
    },
    {
      id: "section-22",
      number: 22,
      title: "SOCIAL LOGIN",
      intro:
        "If you choose to register or log in using a third-party account such as Google or another supported authentication provider, we may receive information permitted by that provider.\n\nThis may include:",
      list: ["Name", "Email address", "Profile image", "Account identifier"],
      outro:
        "We use this information to create and authenticate your PADETUNES account.",
    },
    {
      id: "section-23",
      number: 23,
      title: "PUBLIC INFORMATION",
      intro:
        "Some information you provide may be publicly visible depending on how you use PADETUNES.\n\nFor example, artist accounts may display:",
      list: [
        "Artist name",
        "Profile photograph",
        "Biography",
        "Music",
        "Albums",
        "Songs",
        "Public playlists",
        "Social links",
        "Public booking information",
      ],
      outro:
        "Please consider carefully what information you choose to make publicly available.",
    },
    {
      id: "section-24",
      number: 24,
      title: "YOUR RESPONSIBILITY FOR UPLOADED CONTENT",
      intro:
        "If you upload music, artwork, videos, lyrics, photographs, or other content to PADETUNES, you are responsible for ensuring that you have the legal right to upload and use that content.\n\nYou should not upload content that:",
      list: [
        "You do not own or have permission to use;",
        "Infringes another person's intellectual-property rights;",
        "Violates applicable law;",
        "Contains unauthorized personal information;",
        "Contains malicious software; or",
        "Violates PADETUNES's Terms of Service.",
      ],
    },
    {
      id: "section-25",
      number: 25,
      title: "DATA ACCURACY",
      intro:
        "We aim to maintain accurate and up-to-date personal information.\n\nYou may update certain account information through your PADETUNES account.\n\nIf you believe information we hold about you is inaccurate, you may contact us and request correction.",
    },
    {
      id: "section-26",
      number: 26,
      title: "PRIVACY OF COMMUNICATIONS",
      intro:
        "Communications between you and PADETUNES may be stored or processed where reasonably necessary to:",
      list: [
        "Provide customer support;",
        "Resolve disputes;",
        "Investigate abuse;",
        "Maintain security;",
        "Comply with legal obligations; or",
        "Improve our Services.",
      ],
      outro:
        "We do not intend to monitor private communications except where permitted or required by applicable law and necessary for legitimate purposes.",
    },
    {
      id: "section-27",
      number: 27,
      title: "DATA BREACHES",
      intro:
        "If PADETUNES experiences a personal-data breach that triggers notification obligations under applicable law, we will take appropriate steps to investigate, contain, mitigate, and report the incident as required.\n\nWhere legally required, affected users and/or relevant regulatory authorities will be notified.",
    },
    {
      id: "section-28",
      number: 28,
      title: "CHANGES TO THIS PRIVACY POLICY",
      intro:
        "We may update this Privacy Policy from time to time.\n\nWhen we make material changes, we may:",
      list: [
        'Update the "Last Updated" date;',
        "Provide an in-app notification;",
        "Send an email notification where appropriate; or",
        "Provide other legally required notice.",
      ],
      outro:
        "Your continued use of PADETUNES after an updated Privacy Policy becomes effective means that you acknowledge the updated policy, subject to applicable legal requirements.",
    },
    {
      id: "section-29",
      number: 29,
      title: "CONTACT US",
      intro:
        "If you have questions, complaints, requests, or concerns regarding this Privacy Policy or the way PADETUNES processes personal information, please contact us.\n\nPADETUNES\nLegal Entity: PADETUNES GLOBAL LIMITED\nAddress: No 29 Alhaji Masha, Surulere, Lagos\nWebsite: [https://www.padetunes.com]\n\nWe will make reasonable efforts to respond to privacy-related requests within the period required by applicable law.",
    },
    {
      id: "section-30",
      number: 30,
      title: "GOVERNING PRIVACY LAW",
      intro:
        "PADETUNES intends to comply with applicable privacy and data-protection laws, including the Nigeria Data Protection Act 2023, applicable regulations and guidance issued by the Nigeria Data Protection Commission, and applicable requirements of the jurisdictions in which PADETUNES operates.\n\nWhere PADETUNES expands internationally, additional privacy requirements may apply depending on the location of users and the nature of our activities.",
    },
    {
      id: "section-31",
      number: 31,
      title: "IMPORTANT PLATFORM PRIVACY DISCLOSURES",
      intro:
        "PADETUNES will maintain its privacy disclosures in accordance with the requirements of the platforms through which it is distributed.\n\nFor the Apple App Store, PADETUNES will provide the required Privacy Policy URL and accurately complete App Store Connects App Privacy disclosures. Apple states that these disclosures must reflect data collected by both the app and relevant third-party partners.\n\nFor Google Play, PADETUNES will maintain an accessible Privacy Policy and accurately complete the Google Play Data Safety section. Google's requirements state that the Data Safety disclosures must be consistent with the app's actual data practices.",
    },
  ],
  finalNote:
    "This Privacy Policy is intended to provide transparency about how PADETUNES handles personal information. It should be read together with the PADETUNES Terms of Service, Artist/Music Rights Agreement, Cookie Policy, and any applicable payment or booking terms.",
}
