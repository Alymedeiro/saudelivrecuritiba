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
        <span className="glass-card absolute bottom-[78%] left-[72%] hidden w-max max-w-48 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-brand-deep opacity-0 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          Olá! Vamos cuidar da sua proteção?
        </span>
        <img
          src={mascotImg}
          alt="Mascote canino da Saúde Livre vestido como super-herói"
          width={768}
          height={960}
          className="animate-mascot-float h-auto w-24 drop-shadow-xl transition-transform duration-300 group-hover:scale-105 sm:w-32 lg:w-40"
        />
      </a>
    </aside>
  );
}