import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://incrypt.network"),
  title: {
    default: "Incrypt Network — AI DeFi + Trading on Solana",
    template: "%s | Incrypt Network",
  },
  description:
    "Incrypt Network builds AI-powered DeFi (IncryptDefi) and next-gen trading (IncryptX) on Solana.",
  icons: {
    icon: "/assets/favicon.svg",
  },
  openGraph: {
    title: "Incrypt Network",
    description:
      "AI-driven DeFi strategies and high-performance trading. Explore IncryptDefi and IncryptX.",
    url: "https://incrypt.network",
    siteName: "Incrypt Network",
    images: [
      {
        url: "/assets/incrypt-network-logo.svg",
        width: 1200,
        height: 630,
        alt: "Incrypt Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Incrypt_defi",
    title: "Incrypt Network",
    description:
      "AI DeFi and trading suite on Solana: IncryptDefi + IncryptX.",
    images: ["/assets/incrypt-network-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-40 backdrop-blur-sm border-b border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/incrypt-network-logo.svg" alt="Incrypt Network" width={28} height={28} />
              <span className="font-medium">Incrypt Network</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <Link href="/incrypt-defi" className="hover:underline">IncryptDefi</Link>
              <Link href="/incrypt-x" className="hover:underline">IncryptX</Link>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Incrypt Network</div>
            <div className="flex gap-4">
              <a href="https://x.com/Incrypt_defi" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="mailto:incryptinvestments@protonmail.com" className="hover:underline">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
