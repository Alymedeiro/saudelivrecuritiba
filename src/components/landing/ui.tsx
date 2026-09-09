import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/clinic";

export function Section({
  id,
  children,
  tone = "light",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "soft" | "deep";
  className?: string;
}) {
  const tones = {
    light: "bg-background text-foreground",
    soft: "bg-surface text-foreground",
    deep: "bg-brand text-brand-foreground",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">
      {children}
    </p>
  );
}

export function WhatsAppButton({
  children,
  message,
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "outline" | "light";
  size?: "md" | "lg";
  className?: string;
}) {
  const variants = {
    primary: "bg-brand text-brand-foreground hover:bg-brand-deep",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-brand-foreground",
    light: "bg-background text-brand hover:bg-brand-mist",
  } as const;
  const sizes = {
    md: "px-7 py-4 text-sm",
    lg: "px-9 py-5 text-base",
  } as const;
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl text-center font-semibold uppercase tracking-wide transition-colors sm:w-auto ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

export function Card({
  title,
  children,
  index,
}: {
  title: string;
  children: ReactNode;
  index?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
      {index ? (
        <span className="mb-4 block text-sm font-bold tracking-widest text-brand-light">
          {index}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
