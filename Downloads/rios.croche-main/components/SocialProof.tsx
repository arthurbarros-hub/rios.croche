const testimonials = [
  "Qualidade incrivel!",
  "Vestiu perfeito!",
  "Muito confortavel",
];

export default function SocialProof() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-6 rounded-3xl border border-ivory/90 bg-ivory/80 p-6 shadow-soft sm:p-8 lg:grid-cols-[0.8fr,1.2fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Prova social
          </p>
          <h2 className="font-heading text-2xl text-ink sm:text-3xl lg:text-4xl">
            Clientes reais, experiencias leves
          </h2>
          <p className="text-sm text-ink/70 sm:text-base">
            Fotos e depoimentos que mostram o cuidado em cada detalhe artesanal.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Cliente 1", "Cliente 2", "Cliente 3"].map((label, index) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-2xl border border-ivory/70 bg-white/70 p-4 sm:p-5"
            >
              <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-ivory via-sand to-aqua/40" />
              <p className="text-sm font-semibold text-ink">{testimonials[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
