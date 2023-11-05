import Link from "next/link";
import { allNotes } from "contentlayer/generated";
import dayjs from "dayjs";

export default function Notes() {
  return (
    <div className="prose prose-invert m-auto">
      <h1>Notes</h1>
      <ul>
        {allNotes.map((note) => (
          <Link
            key={note._id}
            href={note.url}
            className="block font-normal mb-6 mt-2 no-underline"
          >
            <li className="flex flex-col md:flex-row gap-2 md:items-center">
              <span className="text-lg leading-5 flex gap-2 flex-wrap">
                {note.title}
              </span>
              <div className="flex gap-2 items-center">
                <span className="text-sm whitespace-nowrap">
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
