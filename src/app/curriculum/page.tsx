import Link from "next/link";
import { Github, Mail, MapPin, Smartphone } from "lucide-react";

const skills: string[] = [
  "JavaScript",
  "Node.js",
  "TypeScript",
  "C++",
  "C#",
  "React",
  "Next.js",
  "TailwindCSS",
  "Prisma",
  "MySQL",
  "Redis",
  "Visual Studio Code",
  "Git",
  "bash",
  "GitHub Actions",
  "Vercel",
  "Cloudflare",
  "PlanetScale",
  "GitHub",
  "UNIX",
];

const achievements: { [key: string]: string } = {
  "Twitch Affiliated": "2021",
};

const interests: string[] = [
  "Gaming",
  "Programming",
  "Music",
  "Coffee",
  "Apple",
  "Unix",
  "Privacy",
  "Open Source",
];

export default function Home() {
  return (
    <div className="prose-xl prose-invert mx-auto px-8 lg:px-0">
      <Link className="no-underline hover:underline" href="/">
        <h1>d6stiny</h1>
      </Link>
      <h2 className="text-rose-300/100">Self-taught Back-end Developer</h2>

      <div className="grid gap-3 text-center md:grid-cols-2 md:grid-rows-2">
        <span className="flex items-center gap-2">
          <Mail />
          <Link href="mailto:hi@d6stiny.lol" className="hover:underline">
            hi@d6stiny.lol
          </Link>
        </span>
        <span className="flex items-center gap-2">
          <Smartphone />
          <span>(+351) 912 596 653</span>
        </span>
        <span className="flex items-center gap-2">
          <MapPin />
          <span>Setúbal, Portugal</span>
        </span>
        <span className="flex items-center gap-2">
          <Github />
          <Link href="https://github.com/d6stiny" className="hover:underline">
            github.com/d6stiny
          </Link>
        </span>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div>
          <h2>Education</h2>
          <div id="education">
            <h3>High School - Escola Profissional do Montijo</h3>
            <span>Hardware and Software Management</span>
            <span className="relative flex w-full items-center justify-between">
              <span className="pr-2">09/2021</span>
              <span className="pr-2">07/2024</span>
            </span>
          </div>

          <h2>Internships</h2>
          <div id="internships">
            <h3>ublocks</h3>
            <span>Hardware and Software Management</span>
            <span className="relative flex w-full items-center justify-between">
              <span className="pr-2">02/2023</span>
              <span className="pr-2">04/2023</span>
            </span>
          </div>
        </div>

        <div>
          <h2>Skills</h2>
          <div id="skills" className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-sm bg-white/10 px-2 py-1">
                {skill}
              </span>
            ))}
          </div>

          <h2>Languages</h2>
          <div id="languages">
            <span className="relative flex w-full items-center justify-between">
              <span className="pr-2">Portuguese</span>
              <span className="pr-2">Native</span>
            </span>
            <span className="relative flex w-full items-center justify-between">
              <span className="pr-2">English</span>
              <span className="pr-2">Professional Working Proficiency</span>
            </span>
          </div>

          <h2>Achievements</h2>
          <div id="achievements">
            {Object.entries(achievements).map(([achievement, date]) => (
              <span
                key={achievement}
                className="relative flex w-full items-center justify-between"
              >
                <span className="pr-2">{achievement}</span>
                <span className="pr-2">{date}</span>
              </span>
            ))}
          </div>

          <h2>Interests</h2>
          <div id="skills" className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-sm px-2 py-1 ring-2 ring-white/10"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
