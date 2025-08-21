import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/mode-toggle";

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
  metadataBase: new URL("https://nvnrchmn.github.io/nova-resume/"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nova Nurachman — Portfolio & Resume",
    description: "Web developer & IT support. Jelajahi proyek dan unduh CV.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/img/og-cover.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Nurachman — Portfolio & Resume",
    description: "Web developer & IT support. Jelajahi proyek dan unduh CV.",
    images: ["/img/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
