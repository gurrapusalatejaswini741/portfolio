import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-cloud/55 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a href="#top" className="hover:text-cloud">Back to top</a>
      </div>
    </footer>
  );
}
