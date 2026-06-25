import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Orçamento | Agro Terra Viva - Mafra SC" },
      { name: "description", content: "Solicite seu orçamento de tratores, peças e implementos. Fale com a Agro Terra Viva por telefone, WhatsApp ou formulário." },
      { property: "og:title", content: "Contato - Agro Terra Viva" },
      { property: "og:description", content: "Peça seu orçamento de máquinas e peças agrícolas em Mafra - SC. Resposta rápida." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Fale conosco</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Peça seu orçamento sem compromisso
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Conte o que você procura — máquina, peça ou assistência técnica — e nossa equipe responde rapidamente.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-strong">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Telefone</span>
                <span className="block text-lg font-bold text-foreground">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-strong">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-whatsapp text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</span>
                <span className="block text-lg font-bold text-foreground">Chamar agora</span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="min-w-0 text-sm">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Endereço</span>
                <span className="block font-semibold text-foreground">BR-280, 425 - Campo da Lança</span>
                <span className="block text-muted-foreground">Mafra - SC, 89300-000</span>
              </span>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <span className="min-w-0 text-sm">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Horário</span>
                <span className="block font-semibold text-foreground">Seg-Sex 08h-18h · Sáb 08h-12h</span>
              </span>
            </div>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0 text-sm">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">E-mail</span>
                <span className="block break-all font-semibold text-foreground">{SITE.email}</span>
              </span>
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Formulário de orçamento</h2>
            <p className="mt-1 text-sm text-muted-foreground">Resposta em horário comercial.</p>
            <div className="mt-5">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}
