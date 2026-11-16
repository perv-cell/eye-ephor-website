'use client';

import Reveal from '@/elements/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DocumentationPage() {
  const { t } = useLanguage();
  const d = t.docs;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <Reveal direction="up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-semibold text-sm mb-6 border border-[var(--border)]">
            {d.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{d.title}</h1>
          <p className="text-lg text-[var(--muted)] mb-3">{d.lead}</p>
          <p className="text-base text-[var(--muted)]">{d.leadExtra}</p>
        </Reveal>
      </section>

      <section className="pb-24 px-6 max-w-4xl mx-auto flex flex-col gap-4">
        {d.sections.map((section, i) => (
          <Reveal key={section.title} direction="up" delay={40 * (i + 1)}>
            <details
              className="group rounded-2xl border border-[var(--border)] p-6 cursor-pointer"
              style={{ background: 'var(--surface)' }}
              open={i === 0}
            >
              <summary className="text-lg font-semibold list-none flex justify-between items-center gap-4">
                {section.title}
                <span className="text-[var(--accent)] transition-transform group-open:rotate-180">
                  <svg fill="none" className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--muted)] leading-relaxed text-sm md:text-base">
                {section.text}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {section.bullets.map((b) => (
                  <li key={b} className="text-sm flex gap-2 items-start">
                    <span className="text-[#1e40af] mt-0.5">▸</span>
                    <span className="text-[var(--muted)]">{b}</span>
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
