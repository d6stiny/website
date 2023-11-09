import Link from "next/link";
import { allNotes } from "contentlayer/generated";
import dayjs from "dayjs";

export default function Notes() {
  const notes = allNotes.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });

  return (
    <div className="prose prose-invert m-auto">
      <h1>Notas</h1>
      <ul>
        {notes.map((note) => (
          <Link
            key={note._id}
            href={note.url}
            className="mb-6 mt-2 block font-normal no-underline"
          >
            <li className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="flex flex-wrap gap-2 text-lg leading-5">
                {note.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-sm">
                  {dayjs(note.date).format("DD/MM/YYYY")}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
