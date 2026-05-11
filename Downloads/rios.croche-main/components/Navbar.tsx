import Link from "next/link";

type NavbarProps = {
  whatsappLink: string;
};

export default function Navbar({ whatsappLink }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-crochet/10 bg-sand/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-lg tracking-wide text-ink sm:text-xl">
          Line Rios
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 md:flex">
          <Link href="/" className="transition hover:text-ink">
            Inicio
          </Link>
          <Link href="/loja" className="transition hover:text-ink">
            Loja
          </Link>
          <Link href="/#sobre" className="transition hover:text-ink">
            Sobre
          </Link>
          <Link href="/#contato" className="transition hover:text-ink">
            Contato
          </Link>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-coral px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral/90 sm:px-4 sm:text-sm"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
