import { aboutParagraphs, quickFacts } from "../data/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 id="about-h" className="text-4xl font-semibold tracking-tight sm:text-5xl">About me</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-cloud/75">
            {aboutParagraphs.map((p) => <p key={p} className="max-w-prose">{p}</p>)}
          </div>
        </div>
        <dl className="h-fit rounded-2xl border border-white/10 bg-panel p-6 lg:col-span-2">
          {quickFacts.map((f) => (
            <div key={f.label} className="border-b border-white/10 py-4 first:pt-0 last:border-0 last:pb-0">
              <dt className="text-sm text-cloud/50">{f.label}</dt>
              <dd className="mt-1 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
