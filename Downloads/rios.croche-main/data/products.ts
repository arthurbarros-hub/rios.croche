export type ProductColor = {
  name: string;
  swatchClass: string;
};

export type ProductGalleryImage = {
  label: string;
  gradientClass: string;
};

export type Product = {
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  materials: string[];
  sizes: string[];
  colors: ProductColor[];
  category: string;
  gallery: ProductGalleryImage[];
};

export const productCategories = [
  "Classicos",
  "Cintura alta",
  "Cortininha",
  "Trancas",
];

export const productColors = [
  { name: "Areia", swatchClass: "bg-sand" },
  { name: "Coral", swatchClass: "bg-coral" },
  { name: "Aqua", swatchClass: "bg-aqua" },
  { name: "Croche", swatchClass: "bg-crochet" },
];

export const products: Product[] = [
  {
    slug: "areia-dourada",
    name: "Biquini Areia Dourada",
    price: "R$ 169",
    shortDescription: "Cortininha leve e sofisticada.",
    description:
      "Um biquini feito a mao, com textura delicada e caimento que valoriza o corpo com leveza.",
    benefits: [
      "Realca a silhueta com conforto",
      "Ajuste facil com amarracao",
      "Artesanal e exclusivo",
    ],
    materials: ["Algodao macio", "Forro duplo suave", "Linha resistente"],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Areia", swatchClass: "bg-sand" },
      { name: "Coral", swatchClass: "bg-coral" },
    ],
    category: "Cortininha",
    gallery: [
      { label: "Frente", gradientClass: "from-sand via-ivory to-aqua/60" },
      { label: "Detalhe", gradientClass: "from-ivory via-sand to-coral/50" },
      { label: "Costas", gradientClass: "from-aqua/40 via-sand to-ivory" },
      { label: "Textura", gradientClass: "from-ivory via-crochet/30 to-sand" },
    ],
  },
  {
    slug: "brisa-verde",
    name: "Biquini Brisa Verde",
    price: "R$ 189",
    shortDescription: "Cintura alta com toque fresco.",
    description:
      "Modelagem que envolve com firmeza e leveza, ideal para dias de sol prolongados.",
    benefits: [
      "Cintura alta que alonga",
      "Suporte seguro",
      "Tecido respiravel",
    ],
    materials: ["Algodao premium", "Forro acetinado", "Elastico macio"],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Aqua", swatchClass: "bg-aqua" },
      { name: "Croche", swatchClass: "bg-crochet" },
    ],
    category: "Cintura alta",
    gallery: [
      { label: "Frente", gradientClass: "from-aqua/60 via-sand to-ivory" },
      { label: "Detalhe", gradientClass: "from-ivory via-aqua/40 to-sand" },
      { label: "Costas", gradientClass: "from-sand via-aqua/30 to-ivory" },
      { label: "Textura", gradientClass: "from-ivory via-crochet/30 to-aqua/30" },
    ],
  },
  {
    slug: "coral-suave",
    name: "Biquini Coral Suave",
    price: "R$ 179",
    shortDescription: "Feminino com ajuste perfeito.",
    description:
      "Biquini artesanal com alcas regulaveis e textura que valoriza o bronzeado.",
    benefits: ["Toque macio", "Alcas ajustaveis", "Secagem rapida"],
    materials: ["Algodao leve", "Forro confort", "Linha italiana"],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Coral", swatchClass: "bg-coral" },
      { name: "Areia", swatchClass: "bg-sand" },
    ],
    category: "Classicos",
    gallery: [
      { label: "Frente", gradientClass: "from-coral/60 via-ivory to-sand" },
      { label: "Detalhe", gradientClass: "from-ivory via-coral/40 to-sand" },
      { label: "Costas", gradientClass: "from-sand via-coral/30 to-ivory" },
      { label: "Textura", gradientClass: "from-ivory via-crochet/20 to-coral/40" },
    ],
  },
  {
    slug: "croche-natural",
    name: "Biquini Croche Natural",
    price: "R$ 199",
    shortDescription: "Textura artesanal marcante.",
    description:
      "Para quem ama o autentico. Trama de croche com acabamento sofisticado e exclusivo.",
    benefits: ["Exclusividade garantida", "Feito a mao", "Textura elegante"],
    materials: ["Linha de algodao", "Forro nude", "Acabamento premium"],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Croche", swatchClass: "bg-crochet" },
      { name: "Areia", swatchClass: "bg-sand" },
    ],
    category: "Trancas",
    gallery: [
      { label: "Frente", gradientClass: "from-crochet/60 via-ivory to-sand" },
      { label: "Detalhe", gradientClass: "from-ivory via-crochet/40 to-sand" },
      { label: "Costas", gradientClass: "from-sand via-crochet/30 to-ivory" },
      { label: "Textura", gradientClass: "from-ivory via-crochet/40 to-aqua/20" },
    ],
  },
  {
    slug: "lua-de-verao",
    name: "Biquini Lua de Verao",
    price: "R$ 189",
    shortDescription: "Conforto com brilho natural.",
    description:
      "Mistura de tons suaves com amarracao que se adapta a diferentes corpos.",
    benefits: ["Ajuste personalizado", "Conforto prolongado", "Brilho sutil"],
    materials: ["Algodao macio", "Forro leve", "Linha acetinada"],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Aqua", swatchClass: "bg-aqua" },
      { name: "Coral", swatchClass: "bg-coral" },
    ],
    category: "Classicos",
    gallery: [
      { label: "Frente", gradientClass: "from-aqua/50 via-ivory to-coral/30" },
      { label: "Detalhe", gradientClass: "from-ivory via-aqua/40 to-sand" },
      { label: "Costas", gradientClass: "from-sand via-coral/30 to-ivory" },
      { label: "Textura", gradientClass: "from-ivory via-crochet/20 to-aqua/30" },
    ],
  },
  {
    slug: "mar-azul",
    name: "Biquini Mar Azul",
    price: "R$ 209",
    shortDescription: "Visual fresh com acabamento premium.",
    description:
      "Modelagem moderna com texturas que lembram o movimento das ondas.",
    benefits: ["Acabamento premium", "Textura diferenciada", "Ajuste firme"],
    materials: ["Algodao reforcado", "Forro duplo", "Linha resistente"],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Aqua", swatchClass: "bg-aqua" },
      { name: "Areia", swatchClass: "bg-sand" },
    ],
    category: "Cintura alta",
    gallery: [
      { label: "Frente", gradientClass: "from-aqua/60 via-ivory to-sand" },
      { label: "Detalhe", gradientClass: "from-ivory via-aqua/40 to-coral/20" },
      { label: "Costas", gradientClass: "from-sand via-aqua/30 to-ivory" },
      { label: "Textura", gradientClass: "from-ivory via-aqua/30 to-crochet/20" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
