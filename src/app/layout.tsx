import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GovData Ghana — E-Government Data Centralization Platform",
  description:
    "Centralized platform for Ghana's digital governance — payment systems, agency management, AI analytics, and data center infrastructure monitoring.",
  keywords: [
    "Ghana",
    "e-government",
    "data centralization",
    "digital governance",
    "payment systems",
    "AI analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-gray-950 text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
