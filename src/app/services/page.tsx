'use client';

import Reveal from '@/elements/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <Reveal direction="up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-semibold text-sm mb-6 border border-[var(--border)]">
            {s.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{s.title}</h1>
          <p className="text-lg text-[var(--muted)] mb-3">{s.lead}</p>
          <p className="text-base text-[var(--muted)]">{s.leadExtra}</p>
        </Reveal>
      </section>

      <section className="pb-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">{s.processTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.process.map((step, i) => (
            <div
              key={step.title}
              className="p-5 rounded-2xl border border-[var(--border)]"
              style={{ background: 'var(--surface)' }}
            >
              <div className="text-[#1e40af] font-bold text-sm mb-2">0{i + 1}</div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.items.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={60 * (i + 1)}>
              <div
                className="p-7 rounded-2xl border border-[var(--border)] h-full flex gap-4"
                style={{ background: 'var(--surface)' }}
              >
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-white font-bold bg-[#1e40af]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{s.deliverTitle}</h2>
        <ul className="flex flex-col gap-3">
          {s.deliverables.map((d) => (
            <li
              key={d}
              className="flex gap-3 items-start p-4 rounded-xl border border-[var(--border)]"
              style={{ background: 'var(--surface)' }}
            >
              <span className="text-[#1e40af] font-bold">✓</span>
              <span className="text-sm">{d}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
