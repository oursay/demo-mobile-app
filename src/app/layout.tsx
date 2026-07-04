import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { THEME_COOKIE } from "@/lib/state/cookies";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OurSay",
  description: "OurSay — verified, auditable civic participation.",
};

/** Lock zoom and keep the keyboard from resizing the fixed app frame. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "overlays-content",
};

// Static export can't read cookies on the server, so seed the theme class on
// the client before first paint from the persisted cookie (no light→dark
// flash). AppProvider re-syncs it after hydration.
const THEME_INIT_SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )${THEME_COOKIE}=([^;]*)/);if(m&&decodeURIComponent(m[1])==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
