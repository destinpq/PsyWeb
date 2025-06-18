import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ConditionalLayout } from "@/components/conditional-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Akanksha Agarwal - Licensed Psychologist",
  description:
    "Professional psychological services by Dr. Akanksha Agarwal, PsyD. Specializing in individual, couples, and family therapy with evidence-based treatments.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
