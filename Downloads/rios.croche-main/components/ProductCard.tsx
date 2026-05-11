import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.gallery[0];

  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ivory/80 bg-ivory/90 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(164,113,72,0.25)]"
      aria-label={`Ver detalhes do ${product.name}`}
    >
      <div
        className={`aspect-[4/5] w-full bg-gradient-to-br ${mainImage.gradientClass}`}
      />
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
          {product.category}
        </p>
        <h3 className="font-heading text-base text-ink sm:text-lg">{product.name}</h3>
        <p className="text-sm text-ink/70">{product.shortDescription}</p>
        <span className="text-sm font-semibold text-ink sm:text-base">{product.price}</span>
      </div>
    </Link>
  );
}
