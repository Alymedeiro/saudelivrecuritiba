import type { ComponentType, ReactNode } from "react";
import { whatsappLink } from "@/lib/clinic";

export function Section({
  id,
  children,
  tone = "light",
  className = "",
  decorated = false,
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "soft" | "deep";
  className?: string;
  decorated?: boolean;
}) {
  const tones = {
    light: "bg-background text-foreground",
    soft: "bg-surface text-foreground",
    deep: "bg-brand-gradient text-brand-foreground",
  } as const;
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-5 py-20 sm:px-8 md:py-28 ${tones[tone]} ${className}`}
    >
      {decorated ? (
        <>
          <span
            aria-hidden="true"
            className="blob -left-24 top-10 h-72 w-72 bg-brand-light/20"
          />
          <span
            aria-hidden="true"
            className="blob -right-20 bottom-0 h-80 w-80 bg-mint/20"
          />
        </>
      ) : null}
      {tone === "deep" ? (
        <span aria-hidden="true" className="bg-dots absolute inset-0 opacity-[0.18]" />
      ) : null}
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "deep";
}) {
  return (
    <p
      className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${
        tone === "deep"
          ? "border-white/25 bg-white/10 text-brand-mist"
          : "border-brand/15 bg-brand-mist/70 text-brand"
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-mint" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
      </span>
      {children}
    </p>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-current ${className}`}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.92C21.96 6.45 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.07-1.82-.11-.42-.11-.96-.29-1.65-.59-2.9-1.25-4.8-4.17-4.95-4.37-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36s.39 0 .56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.16-.3.37-.43.49-.14.14-.29.29-.13.57.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.09 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.37Z" />
    </svg>
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
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const variants = {
    primary:
      "bg-brand-gradient text-brand-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-110",
    outline:
      "border border-brand/25 bg-background/60 text-brand hover:-translate-y-0.5 hover:border-brand hover:bg-brand-mist",
    light:
      "bg-background text-brand shadow-lift hover:-translate-y-0.5 hover:bg-brand-mist",
  } as const;
  const sizes = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-7 py-4 text-sm",
    lg: "px-8 py-5 text-[0.95rem]",
  } as const;
  const widths = size === "sm" ? "" : "w-full sm:w-auto";
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full text-center font-semibold tracking-wide transition-all duration-300 ${widths} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
      {children}
    </a>
  );
}

export function Card({
  title,
  children,
  index,
  icon: Icon,
}: {
  title: string;
  children: ReactNode;
  index?: string;
  icon?: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {Icon ? (
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
          <Icon className="h-6 w-6" />
        </span>
      ) : null}
      {index ? (
        <span className="font-display mb-4 block text-2xl font-bold text-brand-light/60">
          {index}
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-brand-deep">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
