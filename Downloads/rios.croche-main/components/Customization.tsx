type CustomizationProps = {
  whatsappLink: string;
};

export default function Customization({ whatsappLink }: CustomizationProps) {
  const steps = [
    "Escolha o modelo",
    "Defina as cores",
    "Ajuste o tamanho",
  ];

  return (
    <section id="personalizacao" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid items-center gap-8 rounded-3xl border border-crochet/15 bg-ivory/90 p-6 shadow-soft sm:p-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Monte seu biquini
          </p>
          <h2 className="font-heading text-2xl text-ink sm:text-3xl lg:text-4xl">
            Personalizacao feita para o seu corpo e estilo
          </h2>
          <p className="text-sm text-ink/70 sm:text-base">
            Escolha cores, modelagem, amarracoes e detalhes especiais. Montamos juntas o biquini
            ideal para cada momento de verao.
          </p>
          <ol className="grid gap-3 text-sm text-ink/80 sm:text-base">
            {steps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-crochet/30 bg-white/80 text-xs font-semibold text-crochet">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex justify-start lg:justify-end">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral/90 sm:w-auto"
          >
            Montar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
