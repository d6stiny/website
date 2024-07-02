import Link from "next/link";

export default async function Home() {
  return (
    <div className="prose prose-invert m-auto mb-8">
      <h1 className="mb-0">Diogo Castro</h1>
      <p>
        Howdy! I am Diogo Castro (aka d6stiny), a self-taught developer. I love
        everything Apple, privacy & open-source software. I also like
        shitposting lol.
      </p>
      <p>
        When I&apos;m not programming, I like to play games, listen to music,
        watch movies/series and spend time with friends.
      </p>
      <p>
        Best way to reach out to me is via Discord{" "}
        <span className="font-semibold">@d6stiny</span>.
      </p>
      <p className="flex flex-wrap gap-3">
        <Link href="https://github.com/d6stiny" target="_blank">
          GitHub
        </Link>
        <Link href="https://instagram.com/d6stinylol" target="_blank">
          Instagram
        </Link>
        <Link href="https://www.twitch.tv/d6stinylol" target="_blank">
          Twitch
        </Link>
      </p>
    </div>
  );
}
