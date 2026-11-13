import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { roles, site } from "../data/content";

function RotatingRole() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % roles.length), 2200);
    return () => window.clearInterval(t);
  }, [reduce]);

  if (reduce) return <p className="text-lg text-cloud/70">{roles.join(" → ")}</p>;
  return (
    <p className="flex h-8 items-center gap-3 text-lg text-cloud/70" aria-live="off">
      <span className="text-cloud/40" aria-hidden="true">→</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="font-medium text-cloud"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </p>
  );
}

function Monogram() {
  return (
    <div className="relative mx-auto w-56 sm:w-72" aria-hidden="true">
      <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-violet/40 to-ember/25 blur-3xl" />
      <div className="relative rounded-[2.2rem] bg-gradient-to-br from-violet via-violet to-ember p-[3px] shadow-[0_0_80px_-15px_rgba(124,92,255,0.7)]">
        <div className="grid aspect-square place-items-center rounded-[2rem] bg-ink">
          <span className="bg-gradient-to-br from-cloud via-cloud to-[#FFC9A3] bg-clip-text text-7xl font-bold tracking-tighter text-transparent sm:text-8xl">TG</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-cloud/85 transition hover:border-ember/60"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to software developer roles
          </button>
          {open && (
            <p className="mt-3 max-w-md text-sm text-cloud/65">
              Looking for Software Developer, Full Stack Developer and AI Full Stack Developer opportunities at product-based companies and MNCs.
            </p>
          )}
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">Hello, I'm Tejaswini.</h1>
          <p className="mt-3 text-xl font-medium text-violet sm:text-2xl">AI &amp; Full Stack Developer</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cloud/75">
            I build technology that transforms ideas into meaningful experiences.
          </p>
          <div className="mt-6"><RotatingRole /></div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-lg bg-violet px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6B49F5]">View my work</a>
            <a href={site.resume} download className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10">
              <Download className="h-4 w-4" aria-hidden="true" /> Download resume
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 transition hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 transition hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2"><Monogram /></div>
      </div>
    </section>
  );
}
