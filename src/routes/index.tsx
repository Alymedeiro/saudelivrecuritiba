import { createFileRoute } from "@tanstack/react-router";
import {
  Baby,
  CalendarCheck,
  ClipboardList,
  Clock,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Package,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Thermometer,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-familia.jpg";
import idososImg from "@/assets/fases-idosos.jpg";
import { clinic, whatsappLink } from "@/lib/clinic";
import { Card, Eyebrow, Section, WhatsAppButton } from "@/components/landing/ui";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Reveal } from "@/components/landing/Reveal";
import { MascotFloat } from "@/components/landing/MascotFloat";

const TITLE = "Saúde Livre Vacinas Curitiba | Vacinação para Toda a Família";
const DESCRIPTION =
  "Vacinação em Curitiba para bebês, crianças, adolescentes, adultos e idosos. Atendimento humanizado, orientação personalizada e segurança em cada dose.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinic.name,
          description: DESCRIPTION,
          areaServed: "Curitiba, PR",
          address: { "@type": "PostalAddress", addressLocality: "Curitiba", addressRegion: "PR" },
        }),
      },
    ],
  }),
});

const fases = [
  {
    title: "Bebês",
    text: "As primeiras doses acompanham o calendário infantil e pedem atenção a datas e intervalos.",
    icon: Baby,
  },
  {
    title: "Crianças",
    text: "Reforços e doses complementares ao longo do crescimento, revisados junto com a caderneta.",
    icon: Sparkles,
  },
  {
    title: "Adolescentes",
    text: "Fase com indicações próprias, muitas vezes esquecidas depois da infância.",
    icon: Users,
  },
  {
    title: "Adultos",
    text: "Rotina, viagens, trabalho e planejamento familiar podem indicar vacinas específicas.",
    icon: Syringe,
  },
  {
    title: "Idosos",
    text: "Proteção adicional em uma fase em que a prevenção faz ainda mais diferença.",
    icon: HeartHandshake,
  },
];

const seguranca = [
  {
    title: "Imunizantes regularizados pela Anvisa",
    text: "Trabalhamos com vacinas registradas no órgão regulador e conferidas antes da aplicação.",
    icon: ShieldCheck,
  },
  {
    title: "Estrutura moderna e preparada",
    text: "Ambiente organizado, higienizado e pensado para um atendimento confortável.",
    icon: Shield,
  },
  {
    title: "Equipe qualificada",
    text: "Aplicação realizada por profissionais de saúde habilitados e preparados para orientar.",
    icon: Stethoscope,
  },
  {
    title: "Controle de temperatura",
    text: "Armazenamento adequado para preservar a qualidade dos imunizantes.",
    icon: Thermometer,
  },
  {
    title: "Controle e rastreabilidade",
    text: "Conferência de lote, validade, indicação e registro antes de cada dose.",
    icon: Package,
  },
];

const pilaresConfianca = [
  { label: "Experiência", icon: ShieldCheck },
  { label: "Tecnologia", icon: Sparkles },
  { label: "Acolhimento", icon: HeartHandshake },
  { label: "Excelência em imunização", icon: Syringe },
];

const numerosDaRede = [
  { value: "+10", label: "anos de história" },
  { value: "+100", label: "unidades no Brasil" },
  { value: "+10 mil", label: "famílias protegidas" },
];

const perfis = [
  {
    title: "Vacinação infantil",
    text: "Bebês e crianças, com revisão da caderneta e orientação aos pais.",
    icon: Baby,
  },
  {
    title: "Vacinação para adolescentes",
    text: "Atualização de doses e indicações próprias da faixa etária.",
    icon: Users,
  },
  {
    title: "Vacinação para adultos",
    text: "Rotina, reforços e situações específicas do dia a dia.",
    icon: Syringe,
  },
  {
    title: "Vacinação para idosos",
    text: "Atendimento tranquilo, com atenção às necessidades da idade.",
    icon: HeartHandshake,
  },
  {
    title: "Calendário vacinal personalizado",
    text: "Um plano montado a partir do histórico de cada pessoa.",
    icon: ClipboardList,
  },
];

const faq = [
  {
    q: "Quais vacinas vocês oferecem?",
    a: "Trabalhamos com vacinas para bebês, crianças, adolescentes, adultos e idosos. A disponibilidade pode variar, por isso confirmamos a vacina desejada pelo WhatsApp.",
  },
  {
    q: "Preciso agendar?",
    a: "O agendamento é recomendado para garantir a dose e um horário confortável. Fale com a equipe pelo WhatsApp para combinar o melhor momento.",
  },
  {
    q: "Vocês atendem bebês e crianças?",
    a: "Sim. O atendimento infantil é uma parte importante do nosso dia a dia, com acolhimento para a criança e orientação para os pais.",
  },
  {
    q: "Vocês orientam quais vacinas são indicadas?",
    a: "Sim. Analisamos idade, histórico e caderneta para orientar quais doses fazem sentido no seu caso.",
  },
  {
    q: "Vocês atendem adultos e idosos?",
    a: "Sim. A vacinação acompanha todas as fases da vida, inclusive na fase adulta e na terceira idade.",
  },
  {
    q: "Posso parcelar?",
    a: "As formas de pagamento e eventuais condições de parcelamento são informadas pela equipe no WhatsApp.",
  },
];

const heroChips = [
  { label: "Vacinação", icon: Syringe },
  { label: "Orientação personalizada", icon: ClipboardList },
  { label: "Atendimento humanizado", icon: HeartHandshake },
];

const comoFunciona = [
  {
    index: "01",
    title: "Fale com nossa equipe",
    text: "O primeiro contato é pelo WhatsApp, sem burocracia.",
    icon: MessageCircle,
  },
  {
    index: "02",
    title: "Receba orientação",
    text: "Conte para quem é a vacinação e entenda o que é indicado.",
    icon: ClipboardList,
  },
  {
    index: "03",
    title: "Escolha o melhor momento",
    text: "Agende o horário que couber na rotina da sua família.",
    icon: CalendarCheck,
  },
  {
    index: "04",
    title: "Seja atendido com cuidado",
    text: "Atendimento seguro, tranquilo e humanizado do início ao fim.",
    icon: HeartHandshake,
  },
];

function Index() {
  return (
    <main className="font-sans">
      <SiteHeader />

      {/* 1. HERO */}
      <header
        id="topo"
        className="relative overflow-hidden bg-surface px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36"
      >
        <span aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <span
          aria-hidden="true"
          className="blob -left-32 -top-24 h-[26rem] w-[26rem] bg-brand-light/25"
        />
        <span
          aria-hidden="true"
          className="blob -right-24 top-40 h-[22rem] w-[22rem] bg-mint/25"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
          <Reveal>
            <Eyebrow>{clinic.name}</Eyebrow>
            <h1 className="font-display text-[2.15rem] font-bold leading-[1.08] tracking-tight text-brand-deep sm:text-[3.4rem]">
              Proteção para quem você ama{" "}
              <span className="text-gradient-brand">começa com a prevenção certa.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Vacinas para todas as fases da vida, com orientação personalizada, atendimento
              humanizado e segurança em cada etapa.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg">Quero falar com a Saúde Livre</WhatsAppButton>
            </div>
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {heroChips.map((chip) => (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/12 bg-card/80 px-4 py-2 text-sm font-medium text-brand shadow-soft"
                >
                  <chip.icon className="h-4 w-4 text-mint" aria-hidden="true" />
                  {chip.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative">
              <span
                aria-hidden="true"
                className="bg-brand-gradient absolute -inset-3 rounded-[2.5rem] opacity-15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/40 shadow-lift">
                <img
                  src={heroImg}
                  width={1408}
                  height={1200}
                  alt="Enfermeira acolhendo mãe e filha durante atendimento de vacinação"
                  className="h-full w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-deep/35 via-transparent to-transparent"
                />
              </div>
              <div className="glass-card animate-float-slow absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-border p-4 shadow-lift sm:left-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft text-brand">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-tight text-brand-deep">
                  Do bebê ao idoso
                  <span className="block text-xs font-medium text-muted-foreground">
                    Segurança em cada dose
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* 2. CONSCIÊNCIA */}
      <Section decorated>
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Você sabe se sua família está realmente protegida?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A maioria das famílias conhece apenas o calendário básico. Mas a proteção pode ir além
            dele: existem indicações diferentes conforme a idade, o histórico de cada pessoa e as
            necessidades daquele momento da vida.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card title="Bebês e crianças" icon={Baby}>
              Fase de mais doses e intervalos. Um olhar atento à caderneta evita atrasos.
            </Card>
          </Reveal>
          <Reveal delay={90}>
            <Card title="Adolescentes e adultos" icon={Users}>
              Depois da infância, muita gente perde o acompanhamento e deixa doses para trás.
            </Card>
          </Reveal>
          <Reveal delay={180}>
            <Card title="Idosos" icon={HeartHandshake}>
              Algumas proteções são indicadas justamente nessa fase e passam despercebidas.
            </Card>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <WhatsAppButton
            variant="outline"
            message="Olá! Quero saber mais sobre as vacinas indicadas para a minha família."
          >
            Quero saber mais
          </WhatsAppButton>
        </Reveal>
      </Section>

      {/* 3. PREVENÇÃO */}
      <Section tone="soft">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mist text-brand">
            <Clock className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Muita gente só lembra da vacina quando a doença aparece.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A prevenção raramente é urgente — e é exatamente por isso que ela costuma ficar para
            depois. Ela não pede pressa, pede atenção. É uma decisão tomada em um dia comum, com
            calma, antes que qualquer coisa aconteça. E é esse cuidado silencioso que protege as
            pessoas que você ama.
          </p>
        </Reveal>
      </Section>

      {/* 4. QUEBRA DE OBJEÇÃO */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
              Talvez você já esteja protegido.{" "}
              <span className="text-gradient-brand">
                Talvez exista uma lacuna que você ainda não conhece.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <p className="text-base leading-relaxed text-muted-foreground">
                Vacinação não é uma lista igual para todo mundo. Idade, histórico, doses já tomadas
                e necessidades individuais mudam o que faz sentido para cada pessoa. Por isso, o
                primeiro passo é conversar: entender onde você está para saber o que realmente
                falta.
              </p>
              <div className="mt-8">
                <WhatsAppButton message="Olá! Quero orientação sobre quais vacinas são indicadas para o meu caso.">
                  Quero orientação
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 5. SOLUÇÃO */}
      <Section tone="deep">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="deep">A Saúde Livre</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            É por isso que a Saúde Livre existe.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-mist sm:text-lg">
            Uma clínica de vacinação pensada para receber bem: ambiente acolhedor, atendimento
            tranquilo e orientação clara antes de qualquer dose. Aqui, a conversa vem primeiro —
            entendemos para quem é a vacinação, revisamos o histórico e explicamos cada indicação em
            linguagem simples. Do bebê ao idoso, com segurança em cada etapa.
          </p>
        </Reveal>
      </Section>

      {/* 6. SOBRE A REDE */}
      <section className="relative overflow-hidden bg-brand-deep px-5 py-16 text-brand-foreground sm:px-8 md:py-20">
        <span aria-hidden="true" className="bg-dots absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">
              Sobre a Saúde Livre
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A confiança de uma rede que cresce cuidando de pessoas.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-mist">
              A unidade Curitiba faz parte da rede Saúde Livre, que leva vacinação, orientação e
              cuidado humanizado a famílias em diferentes regiões do Brasil.
            </p>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
            {numerosDaRede.map((numero, i) => (
              <Reveal key={numero.label} delay={i * 90}>
                <div className="border-brand-light/30 text-center sm:border-l sm:px-6 first:sm:border-l-0">
                  <strong className="font-display block text-5xl font-bold leading-none text-brand-foreground md:text-6xl">
                    {numero.value}
                  </strong>
                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.12em] text-brand-mist sm:text-sm">
                    {numero.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FASES DA VIDA */}
      <Section id="fases" decorated>
        <Reveal className="max-w-2xl">
          <Eyebrow>Fases da vida</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Uma proteção para cada fase da vida.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fases.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <Card title={f.title} icon={f.icon}>
                {f.text}
              </Card>
            </Reveal>
          ))}
          <Reveal delay={350} className="sm:col-span-2 lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-3xl shadow-lift">
              <img
                src={idososImg}
                loading="lazy"
                width={1200}
                height={912}
                alt="Casal de idosos aguardando atendimento em clínica de vacinação"
                className="h-full min-h-56 w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-deep/45 to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 7. PROVA SOCIAL */}
      <Section tone="soft">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Famílias que escolheram cuidar antes do problema aparecer.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Todos os dias, pais, filhos e avós escolhem a prevenção como parte da rotina de cuidado.
            Se você já foi atendido pela Saúde Livre, seu relato pode ajudar outra família a tomar
            essa decisão.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              variant="outline"
              message="Olá! Quero deixar meu depoimento sobre o atendimento da Saúde Livre."
            >
              Compartilhar minha experiência
            </WhatsAppButton>
          </div>
        </Reveal>
      </Section>

      {/* 8. COMO FUNCIONA */}
      <Section id="como-funciona">
        <Reveal className="max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            É simples cuidar da sua proteção.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comoFunciona.map((step, i) => (
            <Reveal key={step.index} delay={i * 80}>
              <Card index={step.index} title={step.title} icon={step.icon}>
                {step.text}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9. SEGURANÇA */}
      <Section id="seguranca" tone="soft">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Confiança e segurança</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
              Cuidado responsável em cada etapa da vacinação.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Na Saúde Livre Curitiba, unimos boas práticas, estrutura preparada e atendimento
              acolhedor para oferecer uma experiência segura e tranquila para toda a família.
            </p>

            <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7">
              {pilaresConfianca.map((pilar) => (
                <li key={pilar.label} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-deep text-brand-foreground shadow-soft">
                    <pilar.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-brand-deep">
                    {pilar.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-mint pl-4 text-sm leading-relaxed text-muted-foreground">
              A Anvisa é responsável pelo registro dos imunizantes. O licenciamento sanitário da
              clínica é realizado pelo órgão de vigilância sanitária local.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-brand-deep p-4 shadow-lift sm:p-5">
              <div className="space-y-3">
                {seguranca.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-brand-light/35 bg-brand-deep p-4 sm:items-center sm:p-5"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint text-brand-deep">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-brand-foreground sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-mist/80">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 10. ATENDIMENTO POR PERFIL */}
      <Section decorated>
        <Reveal className="max-w-2xl">
          <Eyebrow>Atendimento</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Atendimento pensado para cada perfil.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perfis.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <Card title={p.title} icon={p.icon}>
                {p.text}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 11. CTA FINAL */}
      <Section tone="deep">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Quem ama, protege.
          </h2>
          <p className="mt-5 text-lg text-brand-mist">E a prevenção começa antes da doença.</p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton variant="light" size="lg">
              Quero falar com a Saúde Livre
            </WhatsAppButton>
          </div>
        </Reveal>
      </Section>

      {/* 12. FAQ */}
      <Section id="duvidas">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>Dúvidas</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
              Perguntas frequentes
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group rounded-2xl border border-border bg-card px-6 py-5 shadow-soft transition-colors duration-300 open:border-brand/25 hover:border-brand/25">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-brand-deep">
                    <h3 className="font-display text-base font-semibold">{item.q}</h3>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-mist text-lg leading-none text-brand transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 13. RODAPÉ */}
      <footer className="relative overflow-hidden bg-brand-deep px-5 py-16 text-brand-mist sm:px-8">
        <span aria-hidden="true" className="bg-dots absolute inset-0 opacity-[0.15]" />
        <span aria-hidden="true" className="blob -left-20 -top-16 h-72 w-72 bg-brand-light/25" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-brand-foreground">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="font-display text-lg font-bold text-brand-foreground">
              Saúde Livre Curitiba
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Vacinação para todas as fases da vida, com orientação personalizada.
            </p>
          </div>
          <div className="text-sm leading-relaxed">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Endereço
            </h3>
            <p>{clinic.address}</p>
            <a
              href={clinic.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block underline underline-offset-4 transition-colors hover:text-brand-foreground"
            >
              Ver no Google Maps
            </a>
          </div>
          <div className="text-sm leading-relaxed">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand-foreground">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contato
            </h3>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-brand-foreground"
            >
              WhatsApp {clinic.whatsappDisplay}
            </a>
            <p className="mt-2">{clinic.hours}</p>
          </div>
          <div className="text-sm leading-relaxed">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand-foreground">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Redes
            </h3>
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-brand-foreground"
            >
              Instagram {clinic.instagramHandle}
            </a>
          </div>
        </div>
        <p className="relative mx-auto mt-12 w-full max-w-6xl border-t border-white/10 pt-6 text-xs text-brand-mist/70">
          © {new Date().getFullYear()} Saúde Livre Vacinas Curitiba.
        </p>
      </footer>

      <WhatsAppFloat />
      <MascotFloat />
    </main>
  );
}
