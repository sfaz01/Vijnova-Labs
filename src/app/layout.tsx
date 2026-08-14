import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijnova Labs | Designing the next generation of organisational intelligence.",
  description: "Vijnova Labs builds evidence-based AI software for knowledge work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased h-full`} style={{ colorScheme: "dark" }}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
