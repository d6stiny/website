import { allNotes } from "contentlayer/generated";
import dayjs from "dayjs";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export function generateStaticParams(): Array<Props["params"]> {
  return allNotes.map((note) => ({ slug: note.slug }));
}

export default function Note({ params }: Props) {
  const note = allNotes.find((note) => note.slug === params.slug);

  if (!note) notFound();

  const MDXContent = useMDXComponent(note.body.code);

  return (
    <div className="lg:prose-xs container prose m-auto mb-20 max-w-4xl p-4 pt-14 prose-invert">
      <>
        <section className="-mx-8 flex flex-wrap gap-4 rounded-xl px-8">
          <div className="w-full grow">
            <h1 className="m-0 text-2xl leading-snug sm:text-4xl sm:leading-normal">
              {note.title}
            </h1>
            <p className="m-0 mt-2">{dayjs(note.date).format("DD/MM/YYYY")}</p>
          </div>
        </section>
        <article id="content" className="text-lg">
          <MDXContent />
        </article>
      </>
    </div>
  );
}
