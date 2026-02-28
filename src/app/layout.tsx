import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UserSync } from "@/components/UserSync";
import TanStackProvider from "@/components/providers/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentwise - AI Powered Dental Assistant",
  description: "Get instant advice through our AI-powered dental assistant. Ask questions, get recommendations, and manage your dental health with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
    <ClerkProvider appearance={{
      variables:{
        colorPrimary:'#e78a53',
        colorBackground:'#f3f4f6',
        colorText:'#111827',
        colorNeutral:'#6b7280',
        borderRadius:'8px',
      }
    }}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <UserSync/>
        {children}
      </body>
    </html>
    </ClerkProvider>
    </TanStackProvider>
  );
}
