'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { loginUser } from '@/lib/auth/mockUsers';

export default function LoginPage() {
  const { t } = useLanguage();
  const a = t.auth;
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotFound(false);
    if (!email.trim() || !password) {
      setError(a.errorEmpty);
      return;
    }
    setLoading(true);
    const result = loginUser(email, password);
    setLoading(false);
    if (!result.ok) {
      if (result.reason === 'not_found') {
        setNotFound(true);
        setError(a.errorNotFound);
      } else {
        setError(a.errorBadPassword);
      }
      return;
    }
    setSuccess(true);
    setTimeout(() => router.push('/'), 800);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex bg-[var(--background)] text-[var(--foreground)]">
      {/* Brand panel */}
      <aside className="hidden lg:flex w-[42%] relative flex-col justify-between p-12 overflow-hidden bg-[#0a0f1a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0e7490] opacity-95" />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-cyan-600/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-blue-800/25 blur-3xl" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 no-underline text-white">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1e40af]">
              <Image src="/favicon-32.png" alt="" width={28} height={28} />
            </span>
            <span className="font-semibold text-lg">{t.nav.brand}</span>
          </Link>
        </div>
        <div className="relative z-10 max-w-md">
          <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
            {a.loginSubtitle}
          </h2>
          <p className="text-sky-100/80 text-sm leading-relaxed">
            {t.home.heroText}
          </p>
        </div>
        <p className="relative z-10 text-xs text-sky-200/50">{a.demoHint}</p>
      </aside>

      {/* Form card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div
          className="w-full max-w-[400px] rounded-xl border border-[var(--border)] p-8 shadow-xl shadow-slate-950/10"
          style={{ background: 'var(--surface)' }}
        >
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1e40af]">
              <Image src="/favicon-32.png" alt="" width={26} height={26} />
            </span>
            <span className="font-bold">{t.nav.brand}</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">{a.loginTitle}</h1>
          <p className="text-sm text-[var(--muted)] mb-8">{a.loginSubtitle}</p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium mb-1.5">
                {a.email}
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={a.emailPh}
                className="w-full h-11 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[#0284c7]/50 focus:border-[#0284c7]"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="login-password" className="block text-sm font-medium">
                  {a.password}
                </label>
                <span className="text-xs text-[var(--muted)] cursor-default">{a.forgot}</span>
              </div>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={a.passwordPh}
                className="w-full h-11 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[#0284c7]/50 focus:border-[#0284c7]"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                {error}
                {notFound && (
                  <div className="mt-2">
                    <Link
                      href="/register"
                      className="font-semibold text-[#1e40af] underline underline-offset-2"
                    >
                      {a.goRegister}
                    </Link>
                  </div>
                )}
              </div>
            )}
            {success && (
              <div className="text-sm text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
                {a.successLogin}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg text-white font-semibold bg-[#1e40af] hover:bg-[#1e3a8a] border-0 cursor-pointer transition-colors disabled:opacity-60"
            >
              {loading ? '…' : a.loginBtn}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-[var(--muted)]">
            {a.noAccount}{' '}
            <Link
              href="/register"
              className="font-semibold text-[#1e40af] hover:underline underline-offset-2"
            >
              {a.signUpLink}
            </Link>
          </p>
          <p className="mt-4 text-[11px] text-center text-[var(--muted)]">{a.demoHint}</p>
        </div>
      </div>
    </div>
  );
}
