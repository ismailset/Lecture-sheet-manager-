import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CLSO - CSE Lecture Sheets & Outlines",
  description:
    "Your organized hub for lecture sheets and course outlines. Access comprehensive study materials for university courses maintained by Md Ismail, Department of CSE.",
  keywords:
    "CLSO, CSE, Computer Science, Lecture Sheets, Course Outlines, University, Study Materials, Bangladesh, Introduction to Computers, Emergence of Bangladesh",
  authors: [{ name: "Md Ismail" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "CLSO - CSE Lecture Sheets & Outlines",
    description: "Your organized hub for lecture sheets and course outlines",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
