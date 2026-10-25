import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque", 
  subsets: ["latin"],
})

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans", 
  subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrains-mono", 
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mia Truong",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
