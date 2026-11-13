import type { MouseEvent } from "react";
import { Brain, Code2, Layout, Server, Wrench } from "lucide-react";
import { stack } from "../data/content";

const icons = { code: Code2, layout: Layout, server: Server, brain: Brain, wrench: Wrench };

function Card({ icon, title, items }: { icon: keyof typeof icons; title: string; items: readonly string[] }) {
  const Icon = icons[icon];
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel p-6"
      style={{ ["--x" as string]: "50%", ["--y" as string]: "0px" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(260px circle at var(--x) var(--y), rgba(124,92,255,0.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-violet/30 to-ember/20 text-violet">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {items.map((t) => (
            <li key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-cloud/85">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-h" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="stack-h" className="text-4xl font-semibold tracking-tight sm:text-5xl">Tech stack</h2>
        <p className="mt-4 max-w-prose text-cloud/65">Tools I have used in the projects and programs on this page.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => <Card key={s.title} icon={s.icon} title={s.title} items={s.items} />)}
        </div>
      </div>
    </section>
  );
}
