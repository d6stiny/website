import Head from "next/head";
import Image from "next/image";
import { Nunito } from "@next/font/google";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"] });

const age =
  new Date(Date.now() - new Date("2006-11-28").getTime()).getUTCFullYear() -
  1970;

export default function Home() {
  return (
    <>
      <Head>
        <title>d6stiny</title>
      </Head>
      <main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16">
        <div className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl border-pink-500 bg-pink-500/20 backdrop-blur-2xl md:col-span-4 md:h-52">
          <div className="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
            <Image
              src="https://github.com/d6stiny.png"
              height={96}
              width={96}
              className="h-24 w-24 rounded-full border border-pink-500 object-cover"
              alt=""
            />

            <div className="space-y-1">
              <h1 className="text-center font-title text-xl font-bold tracking-tighter text-pink-300 text-glow-pink-500/50 md:text-left">
                d6stiny
              </h1>

              <p className="text-center text-pink-300/95 text-glow-pink-500/50 md:text-left">
                {age} y/o full stack TypeScript engineer
              </p>

              <p className="text-center text-pink-300/80 text-glow-pink-500/30 md:text-left">
                <Link
                  href="https://github.com/d6stiny"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github ↗️
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
