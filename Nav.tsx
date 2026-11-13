import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#leadership", label: "Leadership" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "bg-ink/85 backdrop-blur border-b border-white/10" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold" aria-label="Tejaswini Gurrapusala, back to top">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet to-ember text-xs font-bold text-white">TG</span>
          <span className="hidden sm:inline">Tejaswini</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm text-cloud/70 transition hover:bg-white/5 hover:text-cloud">{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 bg-ink px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-lg text-cloud/85 hover:bg-white/5">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
