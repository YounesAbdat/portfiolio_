import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Cinematic Portfolio - Video Editor & Filmmaker",
  description:
    "Professional video editing, filmmaking, and voice-over services. I tell stories through visuals, sound, and emotion.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfairDisplay.variable} ${sourceSansPro.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
