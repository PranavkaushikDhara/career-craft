import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GenericNavbar from "@/components/organisms/GenericNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-CareerCraftBackground bg-gradient-to-r from-CareerCraftBackground to-CareerCraftPrimaryDark/40">
        {children}
      </body>
    </html>
  );
}
