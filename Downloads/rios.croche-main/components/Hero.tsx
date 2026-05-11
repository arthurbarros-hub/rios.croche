import Link from "next/link";

type HeroProps = {
  whatsappLink: string;
};

export default function Hero({ whatsappLink }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr,0.9fr] lg:px-8 lg:py-24">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-ivory/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Praia brasileira
          </p>
          <h1 className="animate-fade-up font-heading text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Biquinis artesanais feitos para destacar sua beleza natural
          </h1>
          <p className="max-w-xl text-sm leading-7 text-ink/80 sm:text-base lg:text-lg">
            Pecas feitas a mao, com acabamento delicado, cores leves e caimento que valoriza cada corpo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/loja"
              className="w-full rounded-full border border-ink/10 bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-sand sm:w-auto"
            >
              Ver colecao
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral/90 sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm sm:max-w-none">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua/50 blur-3xl" />
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-ivory/80 bg-gradient-to-br from-ivory via-sand to-aqua/60 shadow-soft">
            <div className="flex h-full items-end justify-start p-6">
              <span className="rounded-full bg-ivory/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
                Imagem em destaque
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
