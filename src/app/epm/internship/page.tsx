export default function Internship() {
  return (
    <>
      <h1 className="text-4xl text-center">Plano de estágio EPM</h1>
      <iframe src="/plano_estágio.pdf" className="w-full aspect-square mt-4" />
      <h1 className="text-4xl text-center mt-6">
        Relatório de estágio (2º ano)
      </h1>
      <iframe
        src="/relatório_estágio.pdf"
        className="w-full aspect-square mt-4"
      />
    </>
  );
}
