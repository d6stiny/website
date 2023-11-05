import Link from "next/link";

export default function Header() {
  return (
    <header className="flex pt-5 pb-2 mb-6 transition duration-300 ease-out border-gray-900 border-b">
      <div className="inline-flex w-full">
        <h1 className="inline-flex items-center w-[220px]">
          <a href="/">
            <span className="font-mono font-bold pb-1">d6stiny.lol</span>
          </a>
        </h1>
        <nav className="w-full text-right">
          <ul className="flex items-center gap-8">
            <div className="flex-grow gap-4 flex">
              <span className="first:flex-grow w-min flex-shrink">
                <Link
                  href="/notes"
                  className="no-underline hover:underline decoration-rose-100/80 decoration-wavy"
                >
                  notes
                </Link>
              </span>
              <span className="first:flex-grow w-min flex-shrink">
                <a className="no-underline hover:underline decoration-rose-100/80 decoration-wavy">
                  projects
                </a>
              </span>
              <span className="first:flex-grow w-min flex-shrink">
                <a className="no-underline hover:underline decoration-rose-100/80 decoration-wavy">
                  resume
                </a>
              </span>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
