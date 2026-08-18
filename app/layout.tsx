import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const faviconUrl = `${siteUrl.replace(/\/$/, "")}/favicon.png`;
const socialImageUrl = `${siteUrl.replace(/\/$/, "")}/images/team-working.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UCLA BioKind Analytics — Data Science for Good",
    template: "%s | UCLA BioKind Analytics",
  },
  description:
    "UCLA students helping Los Angeles healthcare nonprofits understand and use their data.",
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
  },
  openGraph: {
    type: "website",
    title: "UCLA BioKind Analytics — Data Science for Good",
    description:
      "UCLA students helping Los Angeles healthcare nonprofits turn data into action.",
    siteName: "UCLA BioKind Analytics",
    images: [
      {
        url: socialImageUrl,
        width: 2000,
        height: 1333,
        alt: "Royce Hall on the UCLA campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UCLA BioKind Analytics — Data Science for Good",
    description:
      "UCLA students helping Los Angeles healthcare nonprofits turn data into action.",
    images: [socialImageUrl],
  },
};

export const viewport = {
  themeColor: "#0d2a23",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
