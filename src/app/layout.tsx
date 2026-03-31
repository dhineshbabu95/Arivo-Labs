import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import { FunnyInitialSplash } from "@/components/FunnyInitialSplash";
import {
  SplashTransitionChrome,
  SplashTransitionProvider,
} from "@/components/SplashTransitionLayout";
import { site } from "@/content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Arivo Labs builds cloud, data, and AI systems for growing businesses. Practical architecture, reliable delivery, and long-term maintainability.",
  keywords: [
    "cloud",
    "data pipelines",
    "automation",
    "internal tools",
    "DevOps",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description:
      "Arivo Labs delivers cloud, data, and automation systems that help businesses scale with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description:
      "Arivo Labs: cloud, data, and AI systems for business growth.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E6EDF3" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1F33" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <SplashTransitionProvider>
            <FunnyInitialSplash />
            <SplashTransitionChrome>
              <ScrollToTop />
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
            </SplashTransitionChrome>
          </SplashTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
