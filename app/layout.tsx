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
  title: "Lesedi Smart Solutions | Digital Solutions for Schools and Businesses",
  
  description:
    "Lesedi Smart Solutions builds digital platforms for schools and businesses in South Africa, including DailyBloom preschool management software and WageFlow payroll solutions.",

  keywords: [
    "Lesedi Smart Solutions",
    "DailyBloom",
    "WageFlow",
    "South Africa software company",
    "preschool management software",
    "school management system",
    "payroll software South Africa",
    "business software solutions",
    "digital solutions for schools",
  ],

  metadataBase: new URL("https://lesedismartsolutions.co.za"),

  icons: {
    icon: "/lesedi-logo.png",
  },

  openGraph: {
    title:
      "Lesedi Smart Solutions | Digital Solutions for Schools and Businesses",

    description:
      "Digital platforms for schools and businesses in South Africa including DailyBloom and WageFlow.",

    url: "https://lesedismartsolutions.co.za",

    siteName: "Lesedi Smart Solutions",

    images: [
      {
        url: "/lesedi-logo.png",
        width: 1200,
        height: 630,
        alt: "Lesedi Smart Solutions",
      },
    ],

    locale: "en_ZA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Lesedi Smart Solutions | Digital Solutions for Schools and Businesses",

    description:
      "Digital platforms for schools and businesses in South Africa.",

    images: ["/lesedi-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}