import { Geist, Lexend } from "next/font/google";
import "./globals.css";

import { siteMetadata } from "@/lib/site-metadata";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${geist.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
