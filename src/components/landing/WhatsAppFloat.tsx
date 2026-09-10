import { whatsappLink } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/landing/ui";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Saúde Livre no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-xl bg-brand px-4 py-3.5 font-semibold text-brand-foreground shadow-soft transition-colors duration-200 hover:bg-brand-deep"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
