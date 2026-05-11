import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  products,
} from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto | Line Rios Croche",
    };
  }

  return {
    title: `${product.name} | Line Rios Croche`,
    description: product.shortDescription,
  };
}

export default async function ProdutoPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <ProductDetail product={product} />
    </div>
  );
}
