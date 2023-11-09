import "./globals.css";

import type { Metadata } from "next";
import { Quicksand, JetBrains_Mono } from "next/font/google";

import Header from "@components/Header";

const quicksand = Quicksand({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "d6stiny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} ${jetBrainsMono.variable} h-screen bg-black text-white`}
      >
        <div className="relative ml-auto mr-auto max-w-[80ch] scroll-smooth p-2">
          <Header />
          <main className="overflow-x-hidden px-7 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
