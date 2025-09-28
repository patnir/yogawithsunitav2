import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yoga With Sunita - Breath-Led Viniyoga for Core Strength",
  description:
    "Engage your breath and core for pain-free back relief. Perfect for desk workers dealing with back pain, stress, and anxiety through personalized Viniyoga approach in Newark, DE.",
  generator: "v0.app",
  keywords: ["yoga", "viniyoga", "back pain relief", "stress relief", "Newark DE", "breath-led yoga", "core strength"],
  authors: [{ name: "Sunita" }],
  creator: "Yoga With Sunita",
  icons: {
    icon: "/pfp.png",
    shortcut: "/pfp.png",
    apple: "/pfp.png",
  },
  openGraph: {
    title: "Yoga With Sunita - Breath-Led Viniyoga",
    description: "Pain-free back relief through personalized Viniyoga approach in Newark, DE",
    url: "https://yogawithsunita.com",
    siteName: "Yoga With Sunita",
    images: [
      {
        url: "/yoga.jpg",
        width: 1200,
        height: 630,
        alt: "Sunita practicing breath-led Viniyoga in a peaceful outdoor setting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga With Sunita - Breath-Led Viniyoga",
    description: "Pain-free back relief through personalized Viniyoga approach",
    images: ["/yoga.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
