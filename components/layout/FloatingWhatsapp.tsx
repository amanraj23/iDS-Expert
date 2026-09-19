import { whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl("Hello, I need help with a government job application.")}
      className="whatsapp-float fixed bottom-5 left-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full text-white drop-shadow-[0_14px_28px_rgba(6,38,31,0.28)] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-gold/35"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon size={64} />
    </a>
  );
}
