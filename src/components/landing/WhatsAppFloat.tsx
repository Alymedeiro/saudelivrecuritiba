import { whatsappLink } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/landing/ui";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Saúde Livre no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-brand-gradient px-5 py-4 font-semibold text-brand-foreground shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span
          aria-hidden="true"
          className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-foreground/60"
        />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
