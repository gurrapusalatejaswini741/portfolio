import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { highlights, journey, type JourneyKind } from "../data/content";

const filters: { id: "all" | JourneyKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "work", label: "Internship" },
  { id: "learning", label: "Learning" },
  { id: "recognition", label: "Recognition" },
  { id: "leadership", label: "Leadership" },
];

const dot: Record<JourneyKind, string> = {
  work: "bg-ember", learning: "bg-violet", recognition: "bg-[#FFC9A3]", leadership: "bg-emerald-400",
};

export default function Journey() {
  const [filter, setFilter] = useState<"all" | JourneyKind>("all");
  const [openKey, setOpenKey] = useState<string | null>(journey[0].title);
  const items = journey.filter((j) => filter === "all" || j.kind === filter);

  return (
    <section id="journey" aria-labelledby="journey-h" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="journey-h" className="text-4xl font-semibold tracking-tight sm:text-5xl">Experience &amp; achievements</h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.value} className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet/15 to-transparent p-5">
              <p className="text-2xl font-semibold">{h.value}</p>
              <p className="mt-1 text-sm text-cloud/65">{h.label}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap gap-2" role="group" aria-label="Filter timeline">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === f.id ? "border-violet bg-violet/20 text-cloud" : "border-white/15 text-cloud/65 hover:text-cloud"}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ol className="relative mt-10 border-l border-white/15 pl-8">
          {items.map((j) => {
            const key = j.title;
            const isOpen = openKey === key;
            return (
              <li key={key} className="relative pb-8 last:pb-0">
                <span className={`absolute -left-[39px] top-2 h-3 w-3 rounded-full ring-4 ring-ink ${dot[j.kind]}`} aria-hidden="true" />
                <button
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 rounded-xl border border-white/10 bg-panel p-5 text-left transition hover:border-violet/50"
                >
                  <span>
                    <span className="block text-sm text-cloud/55">{j.date}</span>
                    <span className="mt-1 block text-lg font-semibold">{j.title}</span>
                    <span className="block text-cloud/65">{j.org}</span>
                  </span>
                  <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-cloud/50 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden px-5 pt-3 leading-relaxed text-cloud/75"
                    >
                      {j.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
