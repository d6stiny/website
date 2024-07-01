export default function Internship() {
  return (
    <>
      <h1 className="text-center text-4xl">Plano de estágio EPM</h1>
      <iframe src="/plano_estágio.pdf" className="mt-4 aspect-square w-full" />
      <h1 className="mt-6 text-center text-4xl">
        Relatório de estágio (2º ano)
      </h1>
      <iframe
        src="/relatório_estágio.pdf"
        className="mt-4 aspect-square w-full"
      />
      <h1 className="mt-6 text-center text-4xl">
        Relatório de estágio (3º ano)
      </h1>
      <iframe
        src="/2relatório_estágio.pdf"
        className="mt-4 aspect-square w-full"
      />
    </>
  );
}
