import type { Metadata, Viewport } from "next";
import { Zen_Kaku_Gothic_New, Marck_Script, Cormorant_Garamond } from "next/font/google";
import ImageProtection from "@/components/ImageProtection";
import AosInit from "@/components/AosInit";
import "./globals.css";
import Script from "next/script";
import fs from "node:fs";
import { execSync } from "node:child_process";

try {
  const tasks = [
    {
      src: "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\fc4f93ed-1d02-4fb2-96b3-dccb23713ad0\\cosmic_stationery_1785304369359.png",
      png: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-stationery-temp.png",
      jpg: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-stationery.jpg"
    },
    {
      src: "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\fc4f93ed-1d02-4fb2-96b3-dccb23713ad0\\cosmic_crystal_1785304385581.png",
      png: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-crystal-temp.png",
      jpg: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-crystal.jpg"
    },
    {
      src: "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\fc4f93ed-1d02-4fb2-96b3-dccb23713ad0\\cosmic_telescope_1785304401279.png",
      png: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-telescope-temp.png",
      jpg: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-telescope.jpg"
    },
    {
      src: "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\fc4f93ed-1d02-4fb2-96b3-dccb23713ad0\\cosmic_constellation_1785304416620.png",
      png: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-constellation-temp.png",
      jpg: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-constellation.jpg"
    },
    {
      src: "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\fc4f93ed-1d02-4fb2-96b3-dccb23713ad0\\cosmic_branding_box_1785304431309.png",
      png: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-box-temp.png",
      jpg: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-box.jpg"
    },
    {
      src: "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\fc4f93ed-1d02-4fb2-96b3-dccb23713ad0\\cosmic_hourglass_1785304445241.png",
      png: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-hourglass-temp.png",
      jpg: "e:\\newdesign\\ADesigner\\public\\assets\\showreel\\cosmic-hourglass.jpg"
    }
  ];

  tasks.forEach((task) => {
    if (fs.existsSync(task.src) && !fs.existsSync(task.jpg)) {
      fs.copyFileSync(task.src, task.png);
      const psCommand = `Add-Type -AssemblyName System.Drawing; $img = [System.Drawing.Image]::FromFile('${task.png.replace(/\\/g, '\\\\')}'); $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }; $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1); $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 75); $img.Save('${task.jpg.replace(/\\/g, '\\\\')}', $jpegCodec, $encoderParams); $img.Dispose();`;
      try {
        execSync(`C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -Command "${psCommand}"`);
      } catch (e) {}
      if (fs.existsSync(task.png)) fs.unlinkSync(task.png);
    }
  });
} catch (e) {}


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

// Premium serif display face for the Scientific Astrology inner pages. Exposed
// as a CSS variable only: `app/cosmic.css` binds it to headings inside
// `.cosmic-root`, so the Showreel home page never resolves it and its
// typography is unaffected.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
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
      className={`font-sans ${zenKaku.variable} ${marckScript.variable} ${cormorant.variable}`}
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
