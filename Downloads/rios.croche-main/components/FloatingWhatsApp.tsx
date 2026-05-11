type FloatingWhatsAppProps = {
  whatsappLink: string;
};

export default function FloatingWhatsApp({ whatsappLink }: FloatingWhatsAppProps) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1 hover:brightness-95"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12.07 0 11.94 11.94 0 0 0 2.3 17.68L0 24l6.48-2.26a11.91 11.91 0 0 0 5.59 1.42h.01a11.93 11.93 0 0 0 8.44-20.68Zm-8.45 18.4h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.2-3.85 1.34 1.29-3.74-.23-.38a9.9 9.9 0 1 1 8.21 4.36Zm5.52-7.36c-.3-.15-1.78-.88-2.05-.99-.27-.1-.47-.15-.66.15-.2.3-.76.99-.93 1.2-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.14 4.53.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
