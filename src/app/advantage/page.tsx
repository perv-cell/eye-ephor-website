'use client';

import Reveal from '@/elements/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AdvantagePage() {
  const { t } = useLanguage();
  const a = t.advantage;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <Reveal direction="up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-semibold text-sm mb-6 border border-[var(--border)]">
            {a.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{a.title}</h1>
          <p className="text-lg text-[var(--muted)] mb-3">{a.lead}</p>
          <p className="text-base text-[var(--muted)]">{a.leadExtra}</p>
        </Reveal>
      </section>

      <section className="pb-16 px-6 max-w-5xl mx-auto overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{a.compareTitle}</h2>
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr>
              {a.compareHeaders.map((h) => (
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
            {a.compareRows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`p-3 border border-[var(--border)] ${i === 2 ? 'text-[var(--accent)] font-medium' : ''}`}
                    style={{ background: 'var(--surface)' }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {a.items.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={60 * (i + 1)}>
              <div
                className="p-7 rounded-2xl border border-[var(--border)] h-full"
                style={{ background: 'var(--surface)' }}
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-bold bg-[#1e40af]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{a.casesTitle}</h2>
          <p className="text-[var(--muted)]">{a.casesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {a.cases.map((c, i) => (
            <Reveal key={c.title} direction="up" delay={70 * (i + 1)}>
              <article
                className="h-full p-6 rounded-2xl border border-[var(--border)] flex flex-col gap-3"
                style={{ background: 'var(--surface)' }}
              >
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{c.text}</p>
                <p className="text-sm font-semibold text-[#0e7490]">{c.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
