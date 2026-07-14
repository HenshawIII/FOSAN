import type { Metadata } from "next";
import { Libre_Baskerville, Poppins } from "next/font/google";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME_SHORT}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME_SHORT,
  keywords: [
    "food safety",
    "FoSAN",
    "Food Safety Ambassadors Network",
    "Nigeria",
    "food safety education",
    "training",
    "advocacy",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME_SHORT,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: SITE_NAME_SHORT,
  url: SITE_URL,
  logo: `${SITE_URL}/fosanlogo.svg`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_TEL,
  description: SITE_DESCRIPTION,
  areaServed: "NG",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_PHONE_TEL,
    email: CONTACT_EMAIL,
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-white font-sans text-fosan-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
