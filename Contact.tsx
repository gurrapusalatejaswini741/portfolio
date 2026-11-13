import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { site } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error" | "nokey";
const field = "mt-2 w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-cloud placeholder:text-cloud/35 focus:border-violet";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const key = import.meta.env.VITE_WEB3FORMS_KEY;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // honeypot
    if (!key) { setStatus("nokey"); return; }
    data.append("access_key", key);
    data.append("subject", "New message from your portfolio");
    data.append("from_name", "Portfolio contact form");
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: data });
      const json = await res.json();
      if (json.success) { setStatus("sent"); form.reset(); } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-h" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <h2 id="contact-h" className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Have an interesting problem? Let's build something meaningful.
          </h2>
          <p className="mt-5 max-w-md text-lg text-cloud/70">Send a note about a role, a project or an idea. I read every message.</p>
          <ul className="mt-8 space-y-3">
            <li><a className="inline-flex items-center gap-3 text-cloud/85 hover:text-cloud" href={`mailto:${site.email}`}><Mail className="h-5 w-5 text-violet" aria-hidden="true" />{site.email}</a></li>
            <li><a className="inline-flex items-center gap-3 text-cloud/85 hover:text-cloud" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-violet" aria-hidden="true" />LinkedIn</a></li>
            <li><a className="inline-flex items-center gap-3 text-cloud/85 hover:text-cloud" href={site.github} target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5 text-violet" aria-hidden="true" />GitHub</a></li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-panel p-6 sm:p-8" aria-describedby="form-status">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label className="block text-sm text-cloud/75">Name
            <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
          </label>
          <label className="mt-5 block text-sm text-cloud/75">Email
            <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
          </label>
          <label className="mt-5 block text-sm text-cloud/75">Message
            <textarea name="message" required rows={5} className={field} placeholder="What would you like to build?" />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6B49F5] disabled:opacity-60"
          >
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
            {status === "sending" ? "Sending" : "Send message"}
          </button>
          <p id="form-status" role="status" className="mt-4 min-h-6 text-sm">
            {status === "sent" && <span className="inline-flex items-center gap-2 text-emerald-400"><CheckCircle2 className="h-4 w-4" aria-hidden="true" />Message sent. Thank you, I'll reply soon.</span>}
            {status === "error" && <span className="inline-flex items-center gap-2 text-ember"><AlertCircle className="h-4 w-4" aria-hidden="true" />Could not send. Please email me directly at {site.email}.</span>}
            {status === "nokey" && <span className="inline-flex items-center gap-2 text-ember"><AlertCircle className="h-4 w-4" aria-hidden="true" />The form is not connected yet. Please email me at {site.email}.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
