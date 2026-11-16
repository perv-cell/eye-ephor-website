'use client';
import { useState } from 'react';
import Reveal from '@/elements/Reveal';
import Typewriter from '@/elements/Typewriter';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function Banner() {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    const form = e.currentTarget;
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: (formData.get('message') as string) || 'Без сообщения',
    };

    try {
      const response = await fetch('/api/sendon/tg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          form.reset();
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Network error');
    }
  };

  const typewriterTexts =
    locale === 'ru'
      ? [
          'Считаем, сколько тарифа реально тратит каждый пользователь.',
          'Мониторим Isolation Service: сессии обучения, ресурсы, квоты.',
          'Не просто логи — метрики для продукта, инфобеза и диплома.',
        ]
      : [
          'Measure how every user actually spends their tariff.',
          'Monitor Isolation Service: training sessions, resources, quotas.',
          'Not just logs — metrics for product, security, and your thesis.',
        ];

  return (
    <section
      id="banner"
      className="relative bg-cover bg-center bg-fixed pt-10 bg-no-repeat text-[var(--foreground)]"
      style={{ backgroundImage: 'url("/navphoto2.jpg")' }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[var(--background)]/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap justify-center pb-10 gap-10">
          <div className="relative cursor-text select-text flex-1 min-w-[300px] max-w-[600px] mr-3.5">
            <Reveal direction="left" duration={1000} delay={300}>
              <div className="mx-3.5">
                <h1 className="text-4xl font-bold md:text-5xl leading-tight tracking-tight mb-8">
                  {t.home.heroTitle}
                </h1>
                <Typewriter
                  texts={typewriterTexts}
                  className="text-2xl font-bold leading-relaxed mb-8 text-[var(--muted)]"
                  typingSpeed={50}
                  deletingSpeed={20}
                  pauseDuration={3000}
                />
              </div>
            </Reveal>
          </div>

          <Reveal
            duration={1000}
            direction="down"
            delay={300}
            className="flex-1 min-w-[300px] max-w-[600px]"
          >
            <div
              className="flex-1 min-w-[300px] rounded-xl mr-4 ml-4 p-6 md:p-8 relative border border-[var(--border)]"
              style={{ background: 'var(--surface)' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                {t.footer.contact}
              </h2>

              {status === 'success' && (
                <div className="absolute inset-0 z-20 rounded-xl flex flex-col items-center justify-center p-6 text-center bg-[var(--surface)]">
                  <h3 className="text-2xl font-bold mb-2">{t.footer.successTitle}</h3>
                  <p className="text-[var(--muted)]">{t.footer.successText}</p>
                </div>
              )}

              <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
                <div>
                  <label
                    htmlFor="banner-name"
                    className="block text-sm font-medium text-[var(--muted)] mb-1.5"
                  >
                    {t.footer.namePh}
                  </label>
                  <input
                    id="banner-name"
                    type="text"
                    name="name"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="banner-email"
                    className="block text-sm font-medium text-[var(--muted)] mb-1.5"
                  >
                    {t.footer.emailPh}
                  </label>
                  <input
                    id="banner-email"
                    type="email"
                    name="email"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full px-6 mt-2 py-3 cursor-pointer rounded-lg text-white font-semibold shadow-lg transition-all flex justify-center items-center gap-2 ${
                    status === 'loading'
                      ? 'bg-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-br from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] hover:-translate-y-0.5 hover:shadow-xl shadow-cyan-700/30'
                  }`}
                >
                  {status === 'loading' ? t.footer.sending : t.footer.send}
                </button>

                {status === 'error' && (
                  <div className="p-2 bg-red-100 text-red-700 rounded-lg text-sm text-center">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Banner;
