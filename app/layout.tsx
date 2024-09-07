import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { metaData } from "@/data/index";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Yoga & Fitness in Künzing bei Deggendorf",
  description:
    "Erlebe tiefenentspannende Yoga-Kurse in meinem professionellen Studio. Egal ob Anfänger oder Fortgeschrittener. Künzing bei Deggendorf.",
  metadataBase: new URL("https://fit-mit-mary.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://fit-mit-mary.de",
    siteName: "Fit-Mit-Mary",
    images: [
      {
        url: "/assets/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fit-Mit-Mary | Yoga & Fitness in Künzing bei Deggendorf",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-primary-backgroundGreen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
