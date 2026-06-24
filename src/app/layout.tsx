import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lmcmu26.au | Contact Us",
  description: "Get in touch with lmcmu26.au. Send us a message using our contact form.",
  robots: "index, follow",
  alternates: {
    canonical: "https://lmcmu26.au",
  },
  openGraph: {
    title: "lmcmu26.au | Contact Us",
    description: "Get in touch with lmcmu26.au. Send us a message using our contact form.",
    url: "https://lmcmu26.au",
    siteName: "lmcmu26.au",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "lmcmu26.au | Contact Us",
    description: "Get in touch with lmcmu26.au. Send us a message using our contact form.",
  },
  icons: {
    icon: "/icon.svg",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
