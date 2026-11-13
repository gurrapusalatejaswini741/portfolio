import { leadership, leadershipNumbers } from "../data/content";

export default function Leadership() {
  return (
    <section id="leadership" aria-labelledby="lead-h" className="bg-[#EFEBFA] px-5 py-24 text-[#16132B] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="lead-h" className="font-serif text-5xl leading-tight sm:text-6xl">
          Leading <em className="text-[#5B3FE0]">people</em>, not just projects
        </h2>
        <p className="mt-4 max-w-prose text-lg text-[#16132B]/70">
          Student communities, campus events and open-source learning, as Google Student Ambassador, GSSoC Ambassador and NSS Team Leader.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {leadershipNumbers.map((n) => (
            <li key={n.label} className="rounded-2xl bg-[#16132B] p-6 text-[#EDEAF5]">
              <p className="font-serif text-5xl text-[#FFB07A]">{n.value}</p>
              <p className="mt-2 text-sm text-[#EDEAF5]/75">{n.label}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 space-y-16">
          {leadership.map((r) => (
            <div key={r.title}>
              <h3 className="font-serif text-3xl sm:text-4xl">{r.title}</h3>
              <p className="mt-1 text-[#16132B]/65">{r.org}</p>
              {r.summary && <p className="mt-3 max-w-prose text-[#16132B]/80">{r.summary}</p>}
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {r.events.map((e) => (
                  <li key={e.title} className="rounded-2xl border border-[#16132B]/10 bg-white p-5 shadow-sm">
                    {e.tag && <span className="inline-block rounded-full bg-[#5B3FE0]/10 px-3 py-1 text-xs font-medium text-[#4A30C9]">{e.tag}</span>}
                    <h4 className="mt-3 text-lg font-semibold">{e.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#16132B]/70">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
