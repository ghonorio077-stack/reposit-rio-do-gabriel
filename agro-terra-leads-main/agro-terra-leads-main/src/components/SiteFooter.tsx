import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Tractor } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logoagroterraviva.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span>
            <img
  src={logo}
  alt="Agro Terra Viva"
  className="h-12 w-auto"
/>
            </span>
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Tradição no campo. Atendimento sério, entrega rápida e mercadoria de qualidade
            para o produtor rural da região de Mafra e do Planalto Norte Catarinense.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-accent">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-accent">Solicitar orçamento</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-accent">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {SITE.address.street} - {SITE.address.district}<br />
                {SITE.address.city} - {SITE.address.state}, {SITE.address.zip}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Horário
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SITE.hours.map((h) => (
              <li key={h.d} className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <span className="block font-medium">{h.d}</span>
                  <span className="text-primary-foreground/75">{h.h}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} {SITE.legalName}. Todos os direitos reservados.</span>
          <span>Mafra - SC · Atendemos o Planalto Norte Catarinense e Sul do Paraná</span>
        </div>
      </div>
    </footer>
  );
}
