import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SplashTransitionChrome,
  SplashTransitionProvider,
} from "@/components/SplashTransitionLayout";
import { site } from "@/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Arivo Labs makes digital transformation simple: professional websites, clear dashboards, and practical automation for SMBs—explained with visuals, not jargon.",
  keywords: [
    "small business website",
    "local business digital",
    "analytics for small business",
    "business automation",
    "Arivo Labs",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description:
      "From no digital setup to a professional online presence—websites, dashboards, and automation for clinics, law firms, gyms, restaurants, and local services.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description:
      "Websites, analytics, and automation for businesses ready to go digital.",
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
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0F" },
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
      className={`${inter.variable} ${sora.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <SplashTransitionProvider>
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
