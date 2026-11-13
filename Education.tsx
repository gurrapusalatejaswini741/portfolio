import { Award, GraduationCap } from "lucide-react";
import { education, programs } from "../data/content";

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-h" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="edu-h" className="text-4xl font-semibold tracking-tight sm:text-5xl">Education &amp; programs</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ol className="space-y-5">
            {education.map((e) => (
              <li key={e.title} className="rounded-2xl border border-white/10 bg-panel p-6">
                <div className="flex items-center gap-3 text-cloud/55">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">{e.years}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
                <p className="text-cloud/65">{e.place}</p>
                <p className="mt-3 font-medium text-[#FFB07A]">{e.score}</p>
                {"note" in e && e.note && <p className="mt-1 text-sm text-cloud/55">{e.note}</p>}
              </li>
            ))}
          </ol>
          <div>
            <h3 className="text-xl font-semibold">Programs and selections</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {programs.map((p) => (
                <li key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet/10 to-transparent p-5">
                  <Award className="h-5 w-5 text-violet" aria-hidden="true" />
                  <h4 className="mt-3 font-medium">{p.title}</h4>
                  <p className="mt-1 text-sm text-cloud/65">{p.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
