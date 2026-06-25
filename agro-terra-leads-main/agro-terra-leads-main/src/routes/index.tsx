import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Star, MapPin, Truck, Wrench, ShieldCheck, Clock, ArrowRight, Tractor } from "lucide-react";
import heroImg from "@/assets/hero-tractors.jpg";
import handshakeImg from "@/assets/handshake.jpg";
import serviceImg from "@/assets/service.jpg";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
        { title: "Agro Terra Viva | Máquinas e Implementos Agrícolas" },
      { name: "description", content: "Tratores, implementos, peças e assistência técnica em Mafra - SC. Atendimento sério, entrega rápida e mercadoria de qualidade. Solicite seu orçamento." },
      { property: "og:title", content: "Agro Terra Viva | Máquinas Agrícolas em Mafra - SC" },
      { property: "og:description", content: "Tratores, implementos e peças com atendimento sério e entrega rápida. Solicite seu orçamento sem compromisso." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTASection />
      <Contact />
      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Tratores e máquinas agrícolas no pátio da Agro Terra Viva"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-dark/90 via-primary-dark/70 to-primary-dark/40" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:px-8 lg:py-28">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <MapPin className="h-3.5 w-3.5" /> Mafra - SC · BR-280
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Máquinas agrícolas com a confiança de quem entende do campo.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Tratores, implementos, peças e assistência técnica para o produtor rural do Planalto Norte Catarinense. Atendimento sério, entrega rápida e mercadoria de qualidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-strong transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              Ligar: {SITE.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold">5,0</span>
              <span className="text-primary-foreground/70">no Google</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-primary-foreground/40" />
            <span className="text-primary-foreground/80">Entrega rápida na região</span>
          </div>
        </div>

        <div id="orcamento" className="rounded-3xl border border-border bg-card p-6 shadow-strong sm:p-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Peça seu orçamento
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Responda em minutos. Sem compromisso.
          </p>
          <div className="mt-5">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Atendimento sério" },
    { icon: Truck, label: "Entrega rápida" },
    { icon: Wrench, label: "Assistência técnica" },
    { icon: Clock, label: "Anos de experiência" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Tractor, title: "Tratores & Implementos", desc: "Linha completa para preparo de solo, plantio, colheita e transporte na propriedade rural." },
    { icon: Wrench, title: "Peças e Acessórios", desc: "Peças originais e de reposição para tratores e implementos das principais marcas." },
    { icon: ShieldCheck, title: "Assistência Técnica", desc: "Manutenção preventiva e corretiva por profissionais experientes, com agilidade." },
    { icon: Truck, title: "Entrega na Região", desc: "Entregamos em Mafra, Rio Negro, Itaiópolis, Papanduva e demais cidades da região." },
  ];
  return (
    <section id="servicos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">O que oferecemos</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Soluções completas para a sua produção
          </h2>
          <p className="mt-3 text-muted-foreground">
            Da máquina à peça de reposição, passando por assistência técnica especializada — você encontra tudo em um só lugar.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-strong">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:rotate-[-6deg]">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-strong">
          <img src={handshakeImg} alt="Aperto de mão entre cliente e equipe Agro Terra Viva" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Por que a Agro Terra Viva</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mais do que vender, ajudamos o produtor a produzir melhor.
          </h2>
          <ul className="mt-6 space-y-4 text-sm">
            {[
              "Atendimento direto, sem intermediários e com quem entende do que está vendendo.",
              "Mercadoria conferida, com procedência e garantia.",
              "Logística ágil para que sua produção não pare.",
              "Suporte pós-venda e assistência técnica quando você precisar.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/sobre" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="mt-2 text-sm font-semibold text-foreground">5,0 · Avaliação no Google</p>
        <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          “Super indico a Agro Terra Viva. São bastante acolhedores, muito sérios, com entrega rápida e mercadoria de qualidade.”
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">— Antonio Dranka, cliente verificado</p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-primary-foreground">
      <div aria-hidden className="absolute inset-0 -z-0 opacity-30" style={{ backgroundImage: `url(${serviceImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Precisa de uma máquina ou peça? Fale com a gente agora.
          </h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">
            Ligue ou chame no WhatsApp. Atendimento humano e rápido — sem robôs, sem enrolação.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground shadow-strong">
            <Phone className="h-5 w-5" /> {SITE.phoneDisplay}
          </a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-semibold text-primary-foreground">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Visite nossa loja</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Onde estamos</h2>
          <p className="mt-3 text-muted-foreground">
            Estamos às margens da BR-280 em Campo da Lança, Mafra - SC. Fácil acesso para você e seu transporte.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <dt className="font-semibold text-foreground">Endereço</dt>
                <dd className="text-muted-foreground">BR-280, 425 - Campo da Lança<br />Mafra - SC, 89300-000</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <dt className="font-semibold text-foreground">Telefone</dt>
                <dd><a href={`tel:${SITE.phoneTel}`} className="text-primary hover:underline">{SITE.phoneDisplay}</a></dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <dt className="font-semibold text-foreground">Horário</dt>
                <dd className="text-muted-foreground">Seg a Sex: 08h - 18h · Sáb: 08h - 12h</dd>
              </div>
            </div>
          </dl>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            <MapPin className="h-4 w-4" /> Como chegar
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Mapa da Agro Terra Viva"
            src="https://www.google.com/maps?q=BR-280,425,Campo+da+Lan%C3%A7a,+Mafra+-+SC&output=embed"
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-full border-0 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
