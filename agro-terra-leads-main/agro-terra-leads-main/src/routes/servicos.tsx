import { createFileRoute, Link } from "@tanstack/react-router";
import { Tractor, Wrench, ShieldCheck, Truck, Cog, Settings, ArrowRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Tratores, Peças e Assistência - Agro Terra Viva" },
      { name: "description", content: "Tratores, implementos agrícolas, peças de reposição e assistência técnica em Mafra - SC. Conheça todos os serviços da Agro Terra Viva." },
      { property: "og:title", content: "Serviços da Agro Terra Viva" },
      { property: "og:description", content: "Linha completa de máquinas agrícolas, peças e assistência técnica para o produtor rural." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicesPage,
});

const items = [
  { icon: Tractor, title: "Tratores", desc: "Modelos para diversas potências, ideais para preparo de solo, plantio e operações no campo." },
  { icon: Cog, title: "Implementos Agrícolas", desc: "Arados, grades, plantadeiras, pulverizadores e mais — o que sua lavoura precisa." },
  { icon: Wrench, title: "Peças de Reposição", desc: "Peças originais e paralelas para tratores e implementos das principais marcas." },
  { icon: Settings, title: "Assistência Técnica", desc: "Manutenção preventiva, revisões e reparos com mecânicos experientes." },
  { icon: ShieldCheck, title: "Consultoria de Compra", desc: "Ajudamos você a escolher a máquina certa para o tamanho e tipo da sua propriedade." },
  { icon: Truck, title: "Entrega na Região", desc: "Logística rápida em Mafra, Rio Negro, Itaiópolis, Papanduva, Três Barras e arredores." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nossos serviços</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Tudo para a sua produção em um só lugar
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Da máquina nova à peça de reposição, da revisão à entrega na fazenda — atendemos o ciclo completo do produtor rural.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-strong">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary-dark py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Não encontrou o que procura? Fale com a gente.</h2>
          <div className="flex gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
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
