'use client';

import Reveal from '@/elements/Reveal';
import OpenModalButton from '@/components/OpenModalButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PricePage() {
  const { t } = useLanguage();
  const p = t.price;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <Reveal direction="up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-semibold text-sm mb-6 border border-[var(--border)]">
            {p.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{p.title}</h1>
          <p className="text-lg text-[var(--muted)] mb-3">{p.lead}</p>
          <p className="text-base text-[var(--muted)]">{p.leadExtra}</p>
        </Reveal>
      </section>

      <section className="pb-10 px-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">{p.includedTitle}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {p.included.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm p-3 rounded-lg border border-[var(--border)]"
              style={{ background: 'var(--surface)' }}
            >
              <span className="text-[#1e40af]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {p.plans.map((plan, i) => (
            <Reveal key={plan.name} direction="up" delay={80 * (i + 1)}>
              <div
                className={`h-full p-8 rounded-2xl border flex flex-col ${
                  plan.featured
                    ? 'border-cyan-500/50 shadow-xl shadow-cyan-900/30 scale-[1.02]'
                    : 'border-[var(--border)]'
                }`}
                style={{ background: 'var(--surface)' }}
              >
                {plan.featured && (
                  <span className="self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4 text-white bg-[#1e40af]">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-[var(--muted)] text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm flex gap-2 items-start">
                      <span className="text-[var(--accent)]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <OpenModalButton
                  text={plan.cta}
                  className={`w-full cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all ${
                    plan.featured
                      ? 'text-white bg-[#1e40af] hover:bg-[#1e3a8a] shadow-lg shadow-cyan-700/30'
                      : 'border border-[var(--border)] hover:bg-[var(--accent-soft)]'
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--muted)] mt-10 max-w-2xl mx-auto">{p.note}</p>
      </section>

      <section className="pb-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{p.faqTitle}</h2>
        <div className="flex flex-col gap-3">
          {p.faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--border)] p-5 cursor-pointer"
              style={{ background: 'var(--surface)' }}
            >
              <summary className="font-semibold list-none flex justify-between gap-3">
                {item.q}
                <span className="text-[var(--accent)] group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
