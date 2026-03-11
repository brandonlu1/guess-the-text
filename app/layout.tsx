import type { Metadata, Viewport } from "next"; // Import Viewport type
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hardest engineer",
  description: "Who said what?",
};

// Use the dedicated viewport export for viewport-fit=cover
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans font-mono">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
