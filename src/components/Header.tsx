import { Nav } from "./Nav";

export default function Header() {
  return (
    <header className="flex pt-5 pb-2 mb-6 transition duration-300 ease-out border-gray-900 border-b">
      <div className="inline-flex w-full">
        <h1 className="inline-flex items-center w-[220px]">
          <a href="/">
            <span className="font-mono font-bold pb-1">d6stiny.lol</span>
          </a>
        </h1>
        <nav className="w-full justify-end hidden sm:flex">
          <ul className="flex items-center gap-8">
            <div className="flex-grow gap-4 flex">
              <Nav />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
