const WHATSAPP_PHONE = "5511975251038";

export const defaultWhatsAppMessage =
  "Ola! Vim pelo site e quero saber mais sobre os biquinis.";

export const personalizeWhatsAppMessage =
  "Ola! Quero montar um biquini personalizado.";

export function createWhatsAppLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
