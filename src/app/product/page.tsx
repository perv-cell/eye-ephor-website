'use client';

import Reveal from '@/elements/Reveal';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ProductPage() {
  const { t } = useLanguage();
  const p = t.product;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <Reveal direction="up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-semibold text-sm mb-6 border border-[var(--border)]">
            {p.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{p.title}</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">{p.lead}</p>
          <p className="text-base text-[var(--muted)] leading-relaxed">{p.introExtra}</p>
        </Reveal>
      </section>

      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.flowTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.flowSteps.map((step, i) => (
            <div
              key={step}
              className="rounded-xl border border-[var(--border)] p-5 text-sm"
              style={{ background: 'var(--surface)' }}
            >
              <div className="text-[#1e40af] font-bold mb-2">{i + 1}</div>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <Reveal direction="up">
          <h2 className="text-2xl font-bold mb-10 text-center">{p.coreTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.products.map((item, i) => (
            <Reveal key={item.name} direction="up" delay={60 * (i + 1)}>
              <article
                className="h-full p-6 rounded-2xl border border-[var(--border)] flex flex-col gap-4"
                style={{ background: 'var(--surface)' }}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1e40af] text-white">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{item.desc}</p>
                <ul className="flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-0.5">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.thesisTitle}</h2>
        <div className="flex flex-col gap-4">
          {p.thesisSteps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-4 p-5 rounded-2xl border border-[var(--border)]"
              style={{ background: 'var(--surface)' }}
            >
              <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white font-bold bg-[#1e40af]">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-[var(--muted)]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6 max-w-6xl mx-auto overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{p.moduleCompareTitle}</h2>
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr>
              {p.moduleCompareHeaders.map((h) => (
                <th
                  key={h}
                  className="text-left p-3 border border-[var(--border)] bg-[var(--surface-muted)] font-semibold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {p.moduleCompareRows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`p-3 border border-[var(--border)] ${i === 0 ? 'font-semibold text-[#1e40af]' : ''}`}
                    style={{ background: 'var(--surface)' }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-12 text-center">
          <Link
            href="/price"
            className="inline-block px-8 py-3 rounded-xl text-white font-semibold bg-[#1e40af] hover:bg-[#1e3a8a] shadow-lg shadow-cyan-700/30 transition-all"
          >
            {t.nav.price}
          </Link>
        </div>
      </section>
    </main>
  );
}
