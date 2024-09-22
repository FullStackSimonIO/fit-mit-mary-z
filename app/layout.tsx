import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Image from "next/image";
import Navigation from "@/components/experimental/Navigation";

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
  twitter: {
    card: "summary_large_image",
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
        <Navigation />
        {children}
        <Analytics />

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
            alt="pixel"
            unoptimized
          />
        </noscript>
      </body>
    </html>
  );
}
