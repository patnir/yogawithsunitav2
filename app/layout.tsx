import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Back Pain from Sitting All Day? Find Relief & Mindfulness | Yoga With Sunita",
  description:
    "Heal back pain from sitting all day and find calm in a busy world. Therapeutic Viniyoga for office workers, remote professionals, and overwhelmed minds. Online sessions from Newark, DE.",
  generator: "v0.app",
  keywords: [
    "back pain from sitting all day", "office worker back pain", "remote work back pain", "sitting too long back pain",
    "mindfulness for busy people", "stress relief busy professionals", "yoga for overwhelmed minds",
    "desk posture pain", "computer work back pain", "work from home back pain", "sitting posture yoga",
    "mindful movement busy life", "therapeutic yoga office workers", "calm mind busy world", "Newark DE yoga"
  ],
  authors: [{ name: "Sunita" }],
  creator: "Yoga With Sunita",
  icons: {
    icon: "/pfp.png",
    shortcut: "/pfp.png",
    apple: "/pfp.png",
  },
  openGraph: {
    title: "Back Pain from Sitting All Day? Find Relief & Mindfulness",
    description: "Heal back pain from sitting all day and find calm in a busy world. Therapeutic Viniyoga for office workers and overwhelmed minds.",
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
    title: "Back Pain from Sitting All Day? Find Relief & Mindfulness",
    description: "Heal back pain from sitting all day and find calm in a busy world. Therapeutic Viniyoga for office workers.",
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
