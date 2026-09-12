import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl("Hello, I need help with a government job application.")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:bg-emerald-600"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={26} />
    </a>
  );
}
