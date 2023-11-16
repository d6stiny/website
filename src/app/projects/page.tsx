import Link from "next/link";

const projects: {
  name: string;
  href?: string;
  description: string;
}[] = [
  {
    name: "Vary",
    description: "A simple, funny Discord bot.",
  },
  {
    name: "Shiber",
    description:
      "An open source discord moderation bot with a web dashboard and a lot of features.",
  },
  {
    name: "Chino Kafuu",
    href: "https://github.com/RabbitHouseCorp/ChinoKafuu",
    description:
      "An incredible bot which can help you in your daily routine in your guild whenever you need it.",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="prose prose-invert m-auto mb-8 text-center">
        <h1 className="mb-0 font-bold">Projects</h1>
        <div className="not-prose mt-6 grid  grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              href={project.href || ""}
              key={project.name}
              className="mt-2 rounded-lg p-3 px-5 text-left transition hover:-translate-y-1 hover:scale-105 hover:bg-muted"
            >
              <div>
                <h3 className="font-bold">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
