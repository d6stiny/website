import Link from "next/link";

export default async function PAP() {
  return (
    <div className="prose prose-invert m-auto mb-8">
      <h1 className="mb-0 text-center">PAP</h1>
      <h2 className="mb-0">Relatório</h2>
      <iframe src="/relatório_pap.pdf" className="aspect-square w-full" />
    </div>
  );
}
