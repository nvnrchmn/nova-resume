import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Nurachman — Portfolio & Resume",
  description:
    "Portfolio & resume Nova Nurachman: web developer, IT support, dan inventory management.",
  metadataBase: new URL("https://nvnrchmn.github.io/nova-resume"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nova Nurachman — Portfolio & Resume",
    description: "Web developer & IT support. Jelajahi proyek dan unduh CV.",
    url: "/",
    type: "website",
    images: [
      { url: "/img/og-cover.svg", width: 1200, height: 630 },
      { url: "/img/profile.jpeg", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Nurachman — Portfolio & Resume",
    description: "Web developer & IT support. Jelajahi proyek dan unduh CV.",
    images: ["/img/profile.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-1 rounded"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nova Nurachman',
              url: 'https://nvnrchmn.github.io/nova-resume/',
              image: 'https://nvnrchmn.github.io/nova-resume/img/profile.jpeg',
              jobTitle: 'Administrasi & Operasional / Inventory & Aset',
              email: 'mailto:nv.nrchmn@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bekasi',
                addressRegion: 'Jawa Barat',
                addressCountry: 'ID'
              },
              sameAs: [
                'https://github.com/nvnrchmn',
                'https://www.linkedin.com/in/nvnrchmn/'
              ]
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
