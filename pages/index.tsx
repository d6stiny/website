import Head from "next/head";
import Image from "next/image";
import { Nunito } from "@next/font/google";
import Link from "next/link";
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { SiMastodon } from "react-icons/si";

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
      <main className="font-nunito mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16">
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
        <Card className="col-span-2 h-full">
          <Link
            href="https://mstdn.party/@d6stiny"
            target="_blank"
            rel="noopener noreferrer me"
            className={clsx(
              "flex h-full items-center justify-center rounded-2xl bg-[#6364FF] text-4xl text-white",
              cardStyles
            )}
          >
            <span className="sr-only">Twitter</span>
            <span className="transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
              <SiMastodon />
            </span>
          </Link>
        </Card>
      </main>
    </>
  );
}

const cardStyles =
  "transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100";
const Card = ({
  children,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("group", props.className)}>{children}</div>;
};
