import { createFileRoute, Link } from "@tanstack/react-router";
import handshakeImg from "@/assets/handshake.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Agro Terra Viva | Máquinas Agrícolas em Mafra - SC" },
      { name: "description", content: "Conheça a Agro Terra Viva: loja de máquinas agrícolas em Mafra - SC com tradição, atendimento sério e compromisso com o produtor rural." },
      { property: "og:title", content: "Sobre a Agro Terra Viva" },
      { property: "og:description", content: "Tradição no campo e compromisso com o produtor rural do Planalto Norte Catarinense." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Sobre nós</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Tradição no campo, compromisso com o produtor.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A Agro Terra Viva nasceu para servir o produtor rural do Planalto Norte Catarinense com o que ele mais precisa: máquinas, peças e atendimento de verdade.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src={handshakeImg} alt="Equipe Agro Terra Viva" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-strong" />
          <div className="space-y-5 text-foreground/85">
            <p>Localizada às margens da BR-280, em Campo da Lança - Mafra - SC, a nossa loja oferece linha completa de tratores, implementos agrícolas e peças de reposição para as principais marcas do mercado.</p>
            <p>Atendemos pequenos, médios e grandes produtores com a mesma seriedade. Nosso compromisso é entregar produtos de qualidade, com agilidade e suporte técnico no pós-venda.</p>
            <p>Nossa avaliação <strong>5,0 estrelas no Google</strong> reflete o que mais valorizamos: a satisfação de quem confia na nossa entrega.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pronto para falar com a nossa equipe?</h2>
          <div className="flex gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              <Phone className="h-4 w-4" /> Ligar
            </a>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold">
              Orçamento <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}
