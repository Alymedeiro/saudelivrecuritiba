import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-familia.jpg";
import idososImg from "@/assets/fases-idosos.jpg";
import { clinic, whatsappLink } from "@/lib/clinic";
import { Card, Eyebrow, Section, WhatsAppButton } from "@/components/landing/ui";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

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
  },
  {
    title: "Crianças",
    text: "Reforços e doses complementares ao longo do crescimento, revisados junto com a caderneta.",
  },
  {
    title: "Adolescentes",
    text: "Fase com indicações próprias, muitas vezes esquecidas depois da infância.",
  },
  {
    title: "Adultos",
    text: "Rotina, viagens, trabalho e planejamento familiar podem indicar vacinas específicas.",
  },
  {
    title: "Idosos",
    text: "Proteção adicional em uma fase em que a prevenção faz ainda mais diferença.",
  },
];

const seguranca = [
  { title: "Equipe qualificada", text: "Aplicação realizada por profissionais de saúde habilitados." },
  { title: "Estrutura preparada", text: "Ambiente organizado e higienizado para o atendimento." },
  { title: "Armazenamento adequado", text: "Imunizantes conservados sob controle de temperatura." },
  { title: "Segurança dos imunizantes", text: "Conferência de lote, validade e indicação antes de cada dose." },
  { title: "Atendimento humanizado", text: "Tempo para explicar, acolher e responder às suas dúvidas." },
];

const perfis = [
  { title: "Vacinação infantil", text: "Bebês e crianças, com revisão da caderneta e orientação aos pais." },
  { title: "Vacinação para adolescentes", text: "Atualização de doses e indicações próprias da faixa etária." },
  { title: "Vacinação para adultos", text: "Rotina, reforços e situações específicas do dia a dia." },
  { title: "Vacinação para idosos", text: "Atendimento tranquilo, com atenção às necessidades da idade." },
  { title: "Calendário vacinal personalizado", text: "Um plano montado a partir do histórico de cada pessoa." },
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

function Index() {
  return (
    <main className="font-sans">
      {/* 1. HERO */}
      <header className="bg-surface px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>{clinic.name}</Eyebrow>
            <h1 className="font-display text-[2.1rem] font-bold leading-[1.12] tracking-tight text-brand-deep sm:text-5xl">
              Proteção para quem você ama começa com a prevenção certa.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Vacinas para todas as fases da vida, com orientação personalizada, atendimento
              humanizado e segurança em cada etapa.
            </p>
            <div className="mt-8">
              <WhatsAppButton size="lg">Quero falar com a Saúde Livre</WhatsAppButton>
            </div>
            <p className="mt-6 text-sm font-medium text-brand">
              Vacinação • Orientação personalizada • Atendimento humanizado
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={heroImg}
              width={1408}
              height={1200}
              alt="Enfermeira acolhendo mãe e filha durante atendimento de vacinação"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* 2. CONSCIÊNCIA */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Você sabe se sua família está realmente protegida?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A maioria das famílias conhece apenas o calendário básico. Mas a proteção pode ir além
            dele: existem indicações diferentes conforme a idade, o histórico de cada pessoa e as
            necessidades daquele momento da vida.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card title="Bebês e crianças">
            Fase de mais doses e intervalos. Um olhar atento à caderneta evita atrasos.
          </Card>
          <Card title="Adolescentes e adultos">
            Depois da infância, muita gente perde o acompanhamento e deixa doses para trás.
          </Card>
          <Card title="Idosos">
            Algumas proteções são indicadas justamente nessa fase e passam despercebidas.
          </Card>
        </div>
        <div className="mt-10">
          <WhatsAppButton
            variant="outline"
            message="Olá! Quero saber mais sobre as vacinas indicadas para a minha família."
          >
            Quero saber mais
          </WhatsAppButton>
        </div>
      </Section>

      {/* 3. PREVENÇÃO */}
      <Section tone="soft">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Muita gente só lembra da vacina quando a doença aparece.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A prevenção raramente é urgente — e é exatamente por isso que ela costuma ficar para
            depois. Ela não pede pressa, pede atenção. É uma decisão tomada em um dia comum, com
            calma, antes que qualquer coisa aconteça. E é esse cuidado silencioso que protege as
            pessoas que você ama.
          </p>
        </div>
      </Section>

      {/* 4. QUEBRA DE OBJEÇÃO */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
              Talvez você já esteja protegido. Talvez exista uma lacuna que você ainda não conhece.
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Vacinação não é uma lista igual para todo mundo. Idade, histórico, doses já tomadas e
              necessidades individuais mudam o que faz sentido para cada pessoa. Por isso, o
              primeiro passo é conversar: entender onde você está para saber o que realmente falta.
            </p>
            <div className="mt-8">
              <WhatsAppButton message="Olá! Quero orientação sobre quais vacinas são indicadas para o meu caso.">
                Quero orientação
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. SOLUÇÃO */}
      <Section tone="deep">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            É por isso que a Saúde Livre existe.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-mist sm:text-lg">
            Uma clínica de vacinação pensada para receber bem: ambiente acolhedor, atendimento
            tranquilo e orientação clara antes de qualquer dose. Aqui, a conversa vem primeiro —
            entendemos para quem é a vacinação, revisamos o histórico e explicamos cada indicação em
            linguagem simples. Do bebê ao idoso, com segurança em cada etapa.
          </p>
        </div>
      </Section>

      {/* 6. FASES DA VIDA */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Fases da vida</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Uma proteção para cada fase da vida.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fases.map((f) => (
            <Card key={f.title} title={f.title}>
              {f.text}
            </Card>
          ))}
          <div className="overflow-hidden rounded-2xl shadow-soft sm:col-span-2 lg:col-span-1">
            <img
              src={idososImg}
              loading="lazy"
              width={1200}
              height={912}
              alt="Casal de idosos aguardando atendimento em clínica de vacinação"
              className="h-full min-h-56 w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 7. PROVA SOCIAL */}
      <Section tone="soft">
        <div className="mx-auto max-w-2xl text-center">
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
        </div>
      </Section>

      {/* 8. COMO FUNCIONA */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            É simples cuidar da sua proteção.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card index="01" title="Fale com nossa equipe">
            O primeiro contato é pelo WhatsApp, sem burocracia.
          </Card>
          <Card index="02" title="Receba orientação">
            Conte para quem é a vacinação e entenda o que é indicado.
          </Card>
          <Card index="03" title="Escolha o melhor momento">
            Agende o horário que couber na rotina da sua família.
          </Card>
          <Card index="04" title="Seja atendido com cuidado">
            Atendimento seguro, tranquilo e humanizado do início ao fim.
          </Card>
        </div>
      </Section>

      {/* 9. SEGURANÇA */}
      <Section tone="soft">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Segurança não é detalhe. É parte do atendimento.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seguranca.map((s) => (
            <Card key={s.title} title={s.title}>
              {s.text}
            </Card>
          ))}
        </div>
      </Section>

      {/* 10. ATENDIMENTO POR PERFIL */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Atendimento</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Atendimento pensado para cada perfil.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perfis.map((p) => (
            <Card key={p.title} title={p.title}>
              {p.text}
            </Card>
          ))}
        </div>
      </Section>

      {/* 11. CTA FINAL */}
      <Section tone="deep">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Quem ama, protege.
          </h2>
          <p className="mt-5 text-lg text-brand-mist">E a prevenção começa antes da doença.</p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton variant="light" size="lg">
              Quero falar com a Saúde Livre
            </WhatsAppButton>
          </div>
        </div>
      </Section>

      {/* 12. FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-foreground">
                  <h3 className="text-base font-semibold">{item.q}</h3>
                  <span className="shrink-0 text-xl leading-none text-brand-light transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 13. RODAPÉ */}
      <footer className="bg-brand-deep px-5 py-16 text-brand-mist sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-brand-foreground">Saúde Livre Curitiba</p>
            <p className="mt-3 text-sm leading-relaxed">
              Vacinação para todas as fases da vida, com orientação personalizada.
            </p>
          </div>
          <div className="text-sm leading-relaxed">
            <h3 className="mb-3 font-semibold text-brand-foreground">Endereço</h3>
            <p>{clinic.address}</p>
            <a
              href={clinic.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block underline underline-offset-4"
            >
              Ver no Google Maps
            </a>
          </div>
          <div className="text-sm leading-relaxed">
            <h3 className="mb-3 font-semibold text-brand-foreground">Contato</h3>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              WhatsApp {clinic.whatsappDisplay}
            </a>
            <p className="mt-2">{clinic.hours}</p>
          </div>
          <div className="text-sm leading-relaxed">
            <h3 className="mb-3 font-semibold text-brand-foreground">Redes</h3>
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Instagram {clinic.instagramHandle}
            </a>
          </div>
        </div>
        <p className="mx-auto mt-12 w-full max-w-6xl border-t border-white/10 pt-6 text-xs text-brand-mist/70">
          © {new Date().getFullYear()} Saúde Livre Vacinas Curitiba.
        </p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
