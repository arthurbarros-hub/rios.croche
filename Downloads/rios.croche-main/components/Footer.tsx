type FooterProps = {
  whatsappLink: string;
};

export default function Footer({ whatsappLink }: FooterProps) {
  return (
    <footer id="contato" className="border-t border-crochet/10 bg-sand/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg text-ink">Line Rios Croche</p>
          <p className="text-xs text-ink/70">Biquinis artesanais feitos a mao</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-ink/80 sm:justify-start">
          <a
            href="https://instagram.com/linerios.croche"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            Instagram
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-crochet/10 py-4 text-center text-xs text-ink/60">
        © 2026 Line Rios Croche. Direitos reservados.
      </div>
    </footer>
  );
}
