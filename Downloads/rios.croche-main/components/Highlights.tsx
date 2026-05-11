import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Highlights() {
  return (
    <section id="colecao" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
          Destaques
        </p>
        <h2 className="font-heading text-2xl text-ink sm:text-3xl lg:text-4xl">
          Colecao pensada para o verao
        </h2>
        <p className="max-w-2xl text-sm text-ink/70 sm:text-base">
          Modelos artesanais com cores que combinam com pele dourada e dias leves.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="mt-6 sm:mt-8">
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 text-sm font-semibold text-crochet transition hover:text-ink"
        >
          Ver toda a colecao
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
