import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Back Pain Relief Through Yoga | Yoga With Sunita | Newark, DE",
  description:
    "Relieve chronic back pain naturally with breath-led Viniyoga. Online classes for desk workers, lower back pain, sciatica relief. Certified instructor in Newark, DE. Book your healing session today.",
  generator: "v0.app",
  keywords: [
    "back pain relief yoga", "chronic back pain", "lower back pain yoga", "sciatica relief",
    "desk job back pain", "yoga for back pain", "viniyoga back pain", "online yoga back pain",
    "back pain Newark DE", "core strengthening yoga", "posture correction yoga",
    "herniated disc yoga", "spinal alignment yoga", "therapeutic yoga", "pain management yoga"
  ],
  authors: [{ name: "Sunita" }],
  creator: "Yoga With Sunita",
  icons: {
    icon: "/pfp.png",
    shortcut: "/pfp.png",
    apple: "/pfp.png",
  },
  openGraph: {
    title: "Back Pain Relief Through Yoga | Yoga With Sunita",
    description: "Relieve chronic back pain naturally with therapeutic Viniyoga. Online classes for desk workers, sciatica, lower back pain. Newark, DE certified instructor.",
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
    title: "Back Pain Relief Through Yoga | Yoga With Sunita",
    description: "Relieve chronic back pain naturally with therapeutic Viniyoga. Online classes for desk workers & sciatica relief.",
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
