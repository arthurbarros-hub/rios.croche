export default function About() {
  const highlights = [
    "Feito a mao, ponto a ponto",
    "Ajuste pensado para cada corpo",
    "Edicoes limitadas e exclusivas",
  ];

  return (
    <section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-ivory/80 bg-ivory/80 p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
              Sobre a marca
            </p>
            <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">
              Cada ponto carrega uma historia
            </h2>
            <p className="mt-4 text-sm text-ink/70 sm:text-base">
              Biquinis feitos para quem ama praia, leveza e um toque artesanal que deixa cada
              peca unica.
            </p>
          </div>
          <div className="grid gap-3 rounded-3xl border border-ivory/80 bg-white/70 p-6 text-sm text-ink/80 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-coral" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 text-sm text-ink/80 sm:text-base">
          <p>
            A Line Rios Croche nasceu do desejo de criar biquinis que abracem o corpo com leveza
            e autenticidade. Cada peca e produzida a mao, com cuidado nos detalhes e acabamento
            que valoriza a exclusividade.
          </p>
          <p>
            Aqui, o artesanal e sinônimo de qualidade e identidade. Voce escolhe a combinacao de
            cores, modelagem e detalhes para sentir que seu biquini foi feito so para voce.
          </p>
          <div className="rounded-3xl border border-ivory/80 bg-ivory/80 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
              Nosso cuidado
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Produzimos poucas pecas por colecao para manter qualidade e acabamento premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
