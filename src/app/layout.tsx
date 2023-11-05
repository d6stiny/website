import "./globals.css";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import Header from "@components/Header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "d6stiny.sh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} h-screen bg-black text-white`}>
        <div className="max-w-[80ch] mr-auto ml-auto p-2 scroll-smooth relative">
          <Header />
          <main className="px-7 py-10 overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
