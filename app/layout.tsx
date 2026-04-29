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
  title: "Lesedi Smart Solutions",
  description: "Simple Solutions for Real Problems.",
  icons: {
    icon: "/lesedi-logo.png",
  },
  openGraph: {
    title: "Lesedi Smart Solutions",
    description: "Simple Solutions for Real Problems.",
    url: "https://lesedismartsolutions.co.za",
    siteName: "Lesedi Smart Solutions",
    images: [
      {
        url: "https://lesedismartsolutions.co.za/lesedi-logo.png",
        width: 1200,
        height: 630,
        alt: "Lesedi Smart Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lesedi Smart Solutions",
    description: "Simple Solutions for Real Problems.",
    images: ["https://lesedismartsolutions.co.za/lesedi-logo.png"],
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