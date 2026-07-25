import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Anton } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesounddockk.com"),
  title: "THE SOUND DOCKK — Mixing & Mastering Studio · Hyderabad",
  description:
    "THE SOUND DOCKK is a boutique sound mixing, mastering and vocal recording studio in Hyderabad. Where your sound gets docked, dialled-in and delivered.",
  keywords: [
    "sound mixing studio Hyderabad",
    "mastering studio Hyderabad",
    "vocal recording studio",
    "The Sound Dockk",
    "music production Hyderabad",
  ],
  openGraph: {
    title: "THE SOUND DOCKK — Mixing & Mastering Studio · Hyderabad",
    description:
      "Boutique mixing, mastering and vocal recording studio in Hyderabad.",
    type: "website",
    locale: "en_IN",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${anton.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
