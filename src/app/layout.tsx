import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "C SQUARE Coaching Institute | JEE, NEET & Boards",
  description: "Crack JEE, NEET & Boards with Expert Guidance. Join C SQUARE Coaching Institute for expert faculty, mock tests, and top results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased bg-dark-900 text-white relative`}>
        <ScrollProgress />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
