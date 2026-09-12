import { whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl("Hello, I need help with a government job application.")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-soft transition hover:scale-105"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon size={42} />
    </a>
  );
}
