// app/layout.tsx
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Guess the Text",
  description: "Guess who sent each text message",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics /> {/* Vercel Analytics script */}
      </body>
    </html>
  )
}