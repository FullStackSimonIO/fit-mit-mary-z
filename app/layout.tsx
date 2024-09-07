import GoogleAnalytics from "@/components/GoogleAnalytics";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { metaData } from "@/data/index";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />

      <body className={`${lato.className} bg-primary-backgroundGreen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
