import { alsoBuilt } from "../data/content";

export default function AlsoBuilt() {
  return (
    <section aria-labelledby="also-h" className="px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h3 id="also-h" className="text-2xl font-semibold tracking-tight">Also built</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {alsoBuilt.map((p) => (
            <li key={p.title} className="rounded-xl border border-white/10 bg-panel/60 p-5">
              <h4 className="font-medium">{p.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-cloud/65">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
