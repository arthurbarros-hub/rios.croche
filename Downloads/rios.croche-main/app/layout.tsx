import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { createWhatsAppLink, defaultWhatsAppMessage } from "@/utils/whatsapp";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Line Rios Croche | Biquinis artesanais",
  description:
    "Biquinis artesanais feitos a mao, com design elegante e possibilidade de personalizacao.",
  openGraph: {
    title: "Line Rios Croche | Biquinis artesanais",
    description:
      "Biquinis artesanais feitos a mao, com design elegante e possibilidade de personalizacao.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink">
        {children}
        <FloatingWhatsApp
          whatsappLink={createWhatsAppLink(defaultWhatsAppMessage)}
        />
      </body>
    </html>
  );
}
