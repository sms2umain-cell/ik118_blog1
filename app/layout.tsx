import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IK118 - Australia's Premier Casino & Gaming Information Hub | Pokies, Slots & Live Games",
  description: "Discover Australia's best online casino reviews, pokies strategies, live game insights, and sports betting tips at IK118. Your trusted source for casino gaming information and expert analysis.",
  keywords: "IK118, Australia casino, online pokies, slot games, live casino, sports betting, casino reviews, gaming strategies, Australian gambling",
  authors: [{ name: "IK118 Team" }],
  openGraph: {
    title: "IK118 - Australia's Premier Casino & Gaming Information Hub",
    description: "Your trusted source for casino gaming information, pokies strategies, and expert analysis in Australia.",
    url: "https://www.ik118.net/",
    siteName: "IK118",
    images: [
      {
        url: "https://ik118.net/media/33dfa7164c776a171779f.png",
        width: 1200,
        height: 630,
        alt: "IK118 Casino Gaming Hub",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IK118 - Australia's Premier Casino & Gaming Information Hub",
    description: "Your trusted source for casino gaming information, pokies strategies, and expert analysis in Australia.",
    images: ["https://ik118.net/media/33dfa7164c776a171779f.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://www.ik118.net/" />
        <link rel="icon" href="https://ik118.net/media/a5beea7efb776a8bb36ad.png" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
        <Script 
          src="https://readdy.ai/api/public/assistant/widget?projectId=ffe1d2a2-abe1-41fe-bef0-bfbf108f9e16"
          strategy="afterInteractive"
          mode="hybrid"
          voice-show-transcript="true"
          theme="light"
          size="compact"
          accent-color="#f59e0b"
          button-base-color="#1e3a8a"
          button-accent-color="#ffffff"
        />
      </body>
    </html>
  );
}