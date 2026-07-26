import type { Metadata, Viewport } from "next";
import { Zen_Kaku_Gothic_New, Marck_Script } from "next/font/google";
import ImageProtection from "@/components/ImageProtection";
import AosInit from "@/components/AosInit";
import "./globals.css";
import Script from "next/script";

// Showreel typefaces (home page). Exposed as CSS variables only — the site-wide
// `--font-sans` stays Geist; `.showreel-root` re-points it to `--font-zen` for
// the Showreel subtree. See `showreel/showreel.css`.
const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

// Handwritten accent face — the italic "Works" in the portfolio title.
const marckScript = Marck_Script({
  variable: "--font-marck",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "A Designer Ahmedabad | Build Your Brand's Journey",
  description:
    "A Designer Ahmedabad - expert graphic design services: logo, stationery, banner & standee, packaging & label, menu, invitation card, tag, and brochure design.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
 };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`font-sans ${zenKaku.variable} ${marckScript.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Geist:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <AosInit />
        <ImageProtection />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1988248838720405');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1988248838720405&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
