import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mia Truong",
  description: "Personal Portfolio",
  icons: {
    icon: '/mia-logo-dark.png'
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
