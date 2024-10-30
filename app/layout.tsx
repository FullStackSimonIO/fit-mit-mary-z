import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navigation from "@/components/shared/navigation/Navigation";
import Footer from "@/components/shared/footer/Footer";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Yoga & Fitness in Künzing bei Deggendorf",
  description:
    "Tiefenentspannende Yoga Kurse in meinem professionellen Yogastudio in Künzing zwischen Vilshofen und Deggendorf. Egal ob Anfänger oder Fortgeschrittener, bei mir findest du den passenden Kurs.",
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
      <head>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="157f0bd6-6cac-4835-a384-81bc3ee8a552"
          data-blockingmode="auto"
          type="text/javascript"
          async
        ></script>
      </head>
      <body className={`${lato.className} bg-primary-backgroundGreen`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />

        {/* Facebook Pixel */}
        {/* <Script id="facebook-pixel" strategy="afterInteractive">
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
        </noscript>*/}
      </body>
    </html>
  );
}
