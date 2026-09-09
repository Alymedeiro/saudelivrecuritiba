import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/landing/ui";

const links = [
  { href: "#fases", label: "Fases da vida" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <header
        className={`pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass-card border-border shadow-soft"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="bg-brand-gradient inline-flex h-9 w-9 items-center justify-center rounded-xl text-brand-foreground shadow-glow">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold leading-tight text-brand-deep sm:text-base">
            Saúde Livre
            <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-brand-light">
              Vacinas Curitiba
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton size="sm" className="hidden sm:inline-flex">
          Agendar
        </WhatsAppButton>
      </header>
    </div>
  );
}
