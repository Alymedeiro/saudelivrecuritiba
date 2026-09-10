import mascotImg from "@/assets/mascote-saude-livre.png";
import { whatsappLink } from "@/lib/clinic";

export function MascotFloat() {
  return (
    <aside className="pointer-events-none fixed bottom-2 left-1 z-40 sm:bottom-3 sm:left-3" aria-label="Mascote da Saúde Livre">
      <a
        href={whatsappLink("Olá! O mascote da Saúde Livre me trouxe até aqui e quero saber mais sobre vacinação.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group pointer-events-auto relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Falar com a Saúde Livre pelo WhatsApp"
      >
        <span className="absolute bottom-[78%] left-[72%] hidden w-max max-w-48 rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-brand-deep opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          Olá! Vamos cuidar da sua proteção?
        </span>
        <img
          src={mascotImg}
          alt="Mascote canino da Saúde Livre vestido como super-herói"
          width={768}
          height={960}
          className="h-auto w-20 drop-shadow-md transition-transform duration-200 group-hover:scale-[1.03] sm:w-24 lg:w-28"
        />
      </a>
    </aside>
  );
}