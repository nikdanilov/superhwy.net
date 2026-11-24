import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superhwy.net"),
  title: "superhwy.net — An open-source database of Superintelligence",
  description:
    "An open-source database of Superintelligence — model specs, modalities, pricing, and verified inference providers.",
  openGraph: {
    title: "superhwy.net — An open-source database of Superintelligence",
    description:
      "An open-source database of Superintelligence — model specs, modalities, pricing, and verified inference providers.",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060608] text-[#f4f4f2] selection:bg-[#ff5a5f]/30 selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
