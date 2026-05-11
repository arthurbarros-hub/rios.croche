"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { createWhatsAppLink, personalizeWhatsAppMessage } from "@/utils/whatsapp";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const maxNoteLength = 160;
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);
  const [note, setNote] = useState("");

  const whatsappPrimary = useMemo(() => {
    const noteMessage = note.trim() ? ` Observacao: ${note.trim()}.` : "";
    const message = `Ola! Tenho interesse no ${product.name}. Tamanho ${selectedSize}, cor ${selectedColor.name}.${noteMessage}`;
    return createWhatsAppLink(message);
  }, [note, product.name, selectedColor.name, selectedSize]);

  const whatsappPersonalize = useMemo(
    () => createWhatsAppLink(personalizeWhatsAppMessage),
    []
  );

  return (
    <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr,1.1fr]">
      <div className="space-y-4">
        <div
          className={`aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ivory/80 bg-gradient-to-br ${selectedImage.gradientClass}`}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {product.gallery.map((image) => {
            const isActive = selectedImage.label === image.label;
            return (
              <button
                key={image.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedImage(image)}
                className={`group relative overflow-hidden rounded-2xl border bg-ivory/90 transition hover:border-crochet/50 ${
                  isActive ? "border-crochet" : "border-ivory/80"
                }`}
              >
                <div
                  className={`aspect-square w-full bg-gradient-to-br ${image.gradientClass}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            {product.category}
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-ink sm:text-2xl">
            {product.price}
          </p>
        </div>

        <div className="space-y-4 text-sm text-ink/80 sm:text-base">
          <p>{product.description}</p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
              Beneficios
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
              Materiais
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {product.materials.map((material) => (
                <li
                  key={material}
                  className="rounded-full border border-ink/10 bg-ivory/70 px-3 py-1 text-xs font-semibold text-ink/70"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
              Tamanho
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => {
                const isActive = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 text-sm font-semibold transition hover:border-crochet/50 hover:text-ink ${
                      isActive
                        ? "border-crochet text-ink shadow-soft"
                        : "border-ink/15 text-ink/80"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
              Cor
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((color) => {
                const isActive = selectedColor.name === color.name;
                return (
                  <button
                    key={color.name}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-3 rounded-full border bg-white/80 px-4 py-2 text-xs font-semibold transition hover:border-crochet/50 hover:text-ink ${
                      isActive
                        ? "border-crochet text-ink shadow-soft"
                        : "border-ink/10 text-ink/80"
                    }`}
                  >
                    <span className={`h-4 w-4 rounded-full ${color.swatchClass}`} />
                    {color.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-ivory/80 bg-ivory/90 p-4 text-sm text-ink/70 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Guia de medidas (mock)
          </p>
          <ul className="mt-3 space-y-1">
            <li>P: busto 78-84 cm | quadril 88-94 cm</li>
            <li>M: busto 85-92 cm | quadril 95-102 cm</li>
            <li>G: busto 93-100 cm | quadril 103-110 cm</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-ivory/80 bg-white/80 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crochet">
            Observacoes
          </p>
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            maxLength={maxNoteLength}
            placeholder="Ex: prefiro alca regulavel, cores mais suaves..."
            className="mt-3 min-h-[120px] w-full rounded-2xl border border-ink/10 bg-ivory/60 p-4 text-sm text-ink/80 outline-none transition focus:border-crochet/50"
          />
          <p className="mt-2 text-xs text-ink/60">
            {note.length}/{maxNoteLength} caracteres
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={whatsappPrimary}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral/90 hover:shadow-[0_30px_70px_rgba(255,127,127,0.35)] sm:w-auto"
          >
            Comprar pelo WhatsApp
          </a>
          <a
            href={whatsappPersonalize}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-ink/10 bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-crochet/40 sm:w-auto"
          >
            Personalizar este biquini
          </a>
        </div>
      </div>
    </div>
  );
}
