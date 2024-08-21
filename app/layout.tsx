import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premier Relocation Management",
  description: "Serving the Pensacola Metropolitan Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //Daisy UI data-theme is defined in tailwind.config.ts
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
