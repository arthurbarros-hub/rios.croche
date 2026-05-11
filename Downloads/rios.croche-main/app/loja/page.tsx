import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { productCategories, productColors, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Loja | Line Rios Croche",
  description: "Descubra biquinis artesanais com cores leves e acabamento premium.",
};

export default function LojaPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
          Loja
        </p>
        <h1 className="font-heading text-3xl text-ink sm:text-4xl lg:text-5xl">
          Biquinis artesanais feitos para voce
        </h1>
        <p className="max-w-2xl text-sm text-ink/70 sm:text-base">
          Explore nossa colecao e encontre o modelo ideal para seu verao.
        </p>
      </header>

      <section className="mt-8 grid gap-6 rounded-3xl border border-ivory/80 bg-ivory/80 p-4 sm:mt-10 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Filtros (mock)
          </p>
          <div className="flex flex-wrap gap-2">
            {productCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="rounded-full border border-ink/10 bg-white/80 px-3 py-2 text-xs font-semibold text-ink/80 transition hover:border-crochet/40 hover:text-ink sm:px-4"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Cor
          </p>
          <div className="flex flex-wrap gap-2">
            {productColors.map((color) => (
              <button
                key={color.name}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-2 text-xs font-semibold text-ink/80 transition hover:border-crochet/40 hover:text-ink sm:px-4"
              >
                <span className={`h-3 w-3 rounded-full ${color.swatchClass}`} />
                {color.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </div>
  );
}
