import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(120).or(z.literal("")),
  interest: z.string().max(80),
  message: z.string().trim().min(5, "Conte um pouco mais").max(800),
});

const interests = [
  "Trator",
  "Implemento agrícola",
  "Peças e acessórios",
  "Assistência técnica",
  "Outro",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) errs[i.path.join(".")] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});

    const lines = [
      `Olá! Sou ${r.data.name}.`,
      `Telefone: ${r.data.phone}`,
      r.data.email ? `E-mail: ${r.data.email}` : null,
      r.data.interest ? `Interesse: ${r.data.interest}` : null,
      "",
      r.data.message,
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener"
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-3 text-xl font-bold text-foreground">Pedido enviado!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Abrimos o WhatsApp para finalizar o envio. Em breve nossa equipe entrará em contato.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-primary hover:underline"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Nome completo *" name="name" error={errors.name}>
        <input
          name="name" type="text" required maxLength={100}
          className="input-base" placeholder="Seu nome"
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telefone / WhatsApp *" name="phone" error={errors.phone}>
          <input
            name="phone" type="tel" required maxLength={20}
            className="input-base" placeholder="(47) 9 9999-9999"
          />
        </Field>
        <Field label="E-mail" name="email" error={errors.email}>
          <input
            name="email" type="email" maxLength={120}
            className="input-base" placeholder="opcional"
          />
        </Field>
      </div>
      <Field label="Interesse" name="interest" error={errors.interest}>
        <select name="interest" className="input-base" defaultValue={interests[0]}>
          {interests.map((i) => <option key={i}>{i}</option>)}
        </select>
      </Field>
      <Field label="Mensagem *" name="message" error={errors.message}>
        <textarea
          name="message" required rows={4} maxLength={800}
          className="input-base resize-none"
          placeholder="Conte qual máquina, modelo ou serviço você procura."
        />
      </Field>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01]"
      >
        <Send className="h-4 w-4" />
        Solicitar orçamento agora
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Sem compromisso · Resposta em horário comercial
      </p>
      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--input);
          background: var(--background);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input-base:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label, name, error, children,
}: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
