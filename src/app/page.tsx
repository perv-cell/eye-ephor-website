'use client';

import Reveal from '../elements/Reveal';
import './page.css';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonModelForm } from '@/components/buttons/buttons';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="font-display">
      <div
        id="about"
        className="bg-[var(--background)] text-[var(--foreground)] transition-colors"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 py-14">
          <Reveal
            direction="left"
            delay={200}
            duration={800}
            className="max-w-full min-w-[300px] max-w-[600px]"
          >
            <Image
              src="/home1.jpg"
              alt="Eye of Ephor analytics"
              width={600}
              height={400}
              className="min-w-[300px] max-w-[600px] rounded-2xl h-auto object-cover border border-[var(--border)] shadow-lg shadow-slate-900/20"
            />
          </Reveal>
          <Reveal direction="right" delay={200} duration={800}>
            <div className="flex flex-col gap-6 text-center items-center min-w-[300px] max-w-[600px]">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight px-4">
                {h.heroTitle}
              </h1>
              <p className="text-xl px-4 text-[var(--muted)] leading-relaxed">
                {h.heroText}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/product"
                  className="inline-block text-center text-white font-bold rounded-xl cursor-pointer px-8 py-3.5 text-[16px] bg-[#1e40af] hover:bg-[#1e3a8a] shadow-lg shadow-cyan-700/30 transition-all"
                >
                  {h.heroCta}
                </Link>
                <Link
                  href="/documentation"
                  className="inline-block text-center font-semibold rounded-xl cursor-pointer px-8 py-3.5 text-[16px] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-all"
                >
                  {h.heroCtaSecondary}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: '50+', label: h.statsUsers },
            { value: '24', label: h.statsMetrics },
            { value: '7', label: h.statsModules },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--border)] p-6 text-center"
              style={{ background: 'var(--surface)' }}
            >
              <div className="text-3xl font-black text-[#1e40af] mb-1">{s.value}</div>
              <div className="text-sm text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>

        <div id="advantage" className="flex flex-col py-16 transition-colors">
          <div className="flex flex-col gap-6 justify-center items-center pb-16 text-center px-4">
            <Reveal direction="left" duration={800} delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold">{h.featuresTitle}</h2>
            </Reveal>
            <Reveal direction="right" duration={800} delay={100}>
              <p className="text-xl text-[var(--muted)]">{h.featuresSubtitle}</p>
            </Reveal>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 max-w-7xl mx-auto px-4">
            <Reveal direction="left" duration={800}>
              <div className="p-4 md:p-0">
                <Image
                  src="/home2.jpg"
                  alt="features"
                  width={450}
                  height={300}
                  className="rounded-2xl w-full max-w-[450px] h-auto object-cover shadow-lg border border-[var(--border)]"
                />
              </div>
            </Reveal>

            <div className="flex-1 min-w-[300px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {[
                { title: h.f1Title, text: h.f1Text, icon: '📊' },
                { title: h.f2Title, text: h.f2Text, icon: '🧪' },
                { title: h.f3Title, text: h.f3Text, icon: '🛡️' },
                { title: h.f4Title, text: h.f4Text, icon: '📈' },
              ].map((item, i) => (
                <Reveal key={item.title} direction="up" delay={100 * (i + 1)}>
                  <div className="flex flex-row gap-4">
                    <div className="text-3xl shrink-0 opacity-80">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-[var(--muted)] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{h.howTitle}</h2>
            <p className="text-[var(--muted)] text-lg">{h.howSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {h.howSteps.map((step, i) => (
              <Reveal key={step.title} direction="up" delay={80 * (i + 1)}>
                <div
                  className="h-full p-6 rounded-2xl border border-[var(--border)]"
                  style={{ background: 'var(--surface)' }}
                >
                  <div className="w-9 h-9 rounded-lg mb-4 flex items-center justify-center text-white text-sm font-bold bg-[#1e40af]">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-[var(--surface-muted)]/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">{h.audienceTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {h.audience.map((item, i) => (
                <Reveal key={item.title} direction="up" delay={80 * (i + 1)}>
                  <div
                    className="p-7 rounded-2xl border border-[var(--border)] h-full"
                    style={{ background: 'var(--surface)' }}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{h.scenariosTitle}</h2>
            <p className="text-[var(--muted)] text-lg">{h.scenariosSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {h.scenarios.map((item, i) => (
              <Reveal key={item.title} direction="up" delay={70 * (i + 1)}>
                <div
                  className="h-full p-6 rounded-2xl border border-[var(--border)]"
                  style={{ background: 'var(--surface)' }}
                >
                  <h3 className="font-bold text-lg mb-2 text-[#1e40af]">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 bg-[var(--surface-muted)]/30">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {h.metricsStrip.map((m) => (
              <div
                key={m.label}
                className="text-center p-5 rounded-2xl border border-[var(--border)]"
                style={{ background: 'var(--surface)' }}
              >
                <div className="text-2xl font-black text-[#0e7490] mb-1">{m.value}</div>
                <div className="text-xs text-[var(--muted)]">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{h.faqTitle}</h2>
          <div className="flex flex-col gap-3">
            {h.faq.map((item) => (
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

        <div className="mt-20 mb-20 flex flex-wrap justify-center items-start gap-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-start gap-8 min-w-[300px] max-w-[600px]">
            <Reveal direction="left">
              <h2 className="text-4xl md:text-5xl font-bold">{h.qualityTitle}</h2>
            </Reveal>
            <Reveal direction="right">
              <p className="text-[var(--muted)] text-xl">{h.qualityP1}</p>
            </Reveal>
            <Reveal direction="left">
              <p className="text-[var(--muted)] text-xl">{h.qualityP2}</p>
            </Reveal>
            <Reveal direction="down">
              <Link href="/product" className="animated-button mt-6">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">{h.qualityCta}</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </Link>
            </Reveal>
          </div>
          <div className="p-4 md:p-0">
            <Reveal direction="right">
              <Image
                src="/home3.png"
                alt="platform"
                width={550}
                height={400}
                className="border border-[var(--border)] rounded-2xl object-cover h-auto w-full max-w-[550px]"
              />
            </Reveal>
          </div>
        </div>

        <section
          className="relative bg-cover bg-center bg-fixed pt-10 bg-no-repeat"
          style={{ backgroundImage: 'url("/navphoto2.jpg")' }}
        >
          <div className="absolute inset-0 bg-[var(--background)]/90" />
          <div className="relative flex flex-col items-center gap-10 my-10 px-4 text-center">
            <Reveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold">{h.ctaTitle}</h2>
            </Reveal>
            <Reveal direction="left">
              <p className="text-xl text-[var(--muted)] max-w-2xl">{h.ctaText}</p>
            </Reveal>
            <Reveal direction="up">
              <ButtonModelForm />
            </Reveal>
          </div>
        </section>

        <div id="services" className="relative py-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
                {h.productsTitle}
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#0e7490] mx-auto mt-6 rounded-full" />
              <p className="mt-6 text-lg text-[var(--muted)] max-w-2xl mx-auto">
                {h.productsSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap cursor-pointer justify-center items-stretch gap-8">
              {[
                { badge: h.p1Badge, title: h.p1Title, desc: h.p1Desc, price: h.p1Price, icon: '📊', featured: false },
                { badge: null, title: h.p2Title, desc: h.p2Desc, price: h.p2Price, icon: '🧪', featured: false },
                { badge: h.p3Badge, title: h.p3Title, desc: h.p3Desc, price: h.p3Price, icon: '🛡️', featured: true },
                { badge: null, title: h.p4Title, desc: h.p4Desc, price: h.p4Price, icon: '🔮', featured: false },
              ].map((card, i) => (
                <Reveal key={card.title} direction="up" delay={80 * (i + 1)} duration={600}>
                  <Link href="/product" className="block group relative">
                    {card.featured && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1e3a8a] to-[#0e7490] rounded-[24px] blur opacity-40 pointer-events-none" />
                    )}
                    <div className={`card-premium relative ${card.featured ? 'border-2 border-cyan-500/40' : ''}`}>
                      <div className="card-premium__shine pointer-events-none" />
                      <div className="card-premium__glow pointer-events-none" />
                      <div className="card-premium__content">
                        {card.badge && <div className="card-premium__badge">{card.badge}</div>}
                        <div className="card-premium__image">{card.icon}</div>
                        <div className="card-premium__text">
                          <p className="card-premium__title">{card.title}</p>
                          <p className="card-premium__description">{card.desc}</p>
                        </div>
                        <div className="card-premium__footer">
                          <div className="card-premium__price">{card.price}</div>
                          <div className="card-premium__button">
                            <svg height="16" width="16" viewBox="0 0 24 24">
                              <path strokeWidth="2" stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
