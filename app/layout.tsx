import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import Navigation from "@/components/navigation";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediChain Labs - Blockchain-Powered Clinical Laboratory Solutions",
  description:
    "Secure, transparent, and efficient clinical data management powered by Web3 technology",
  icons: {
    icon: "/logoM.png", // Path to the logo in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
