import type { Metadata } from "next";
import { Lekton } from "next/font/google";
import "./globals.css";

const lekton = Lekton({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Made By Darwin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lekton.className} bg-main-gradient `}>{children}</body>
    </html>
  );
}