'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { registerUser } from '@/lib/auth/mockUsers';

export default function RegisterPage() {
  const { t } = useLanguage();
  const a = t.auth;
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [exists, setExists] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setExists(false);
    if (!name.trim() || !email.trim() || !password || !confirm) {
      setError(a.errorEmpty);
      return;
    }
    if (password.length < 6) {
      setError(a.errorShort);
      return;
    }
    if (password !== confirm) {
      setError(a.errorMismatch);
      return;
    }
    setLoading(true);
    const result = registerUser({ name, email, password });
    setLoading(false);
    if (!result.ok) {
      setExists(true);
      setError(a.errorExists);
      return;
    }
    setSuccess(true);
    setTimeout(() => router.push('/'), 800);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex bg-[var(--background)] text-[var(--foreground)]">
      <aside className="hidden lg:flex w-[42%] relative flex-col justify-between p-12 overflow-hidden bg-[#0a0f1a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0e7490] opacity-95" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-cyan-600/25 blur-3xl" />
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
            {a.registerSubtitle}
          </h2>
          <p className="text-sky-100/80 text-sm leading-relaxed">
            {t.product.introExtra}
          </p>
        </div>
        <p className="relative z-10 text-xs text-sky-200/50">{a.demoHint}</p>
      </aside>

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

          <h1 className="text-2xl font-bold mb-1">{a.registerTitle}</h1>
          <p className="text-sm text-[var(--muted)] mb-8">{a.registerSubtitle}</p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="reg-name" className="block text-sm font-medium mb-1.5">
                {a.name}
              </label>
              <input
                id="reg-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={a.namePh}
                className="w-full h-11 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[#0284c7]/50 focus:border-[#0284c7]"
              />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium mb-1.5">
                {a.email}
              </label>
              <input
                id="reg-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={a.emailPh}
                className="w-full h-11 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[#0284c7]/50 focus:border-[#0284c7]"
              />
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium mb-1.5">
                {a.password}
              </label>
              <input
                id="reg-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={a.passwordPh}
                className="w-full h-11 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[#0284c7]/50 focus:border-[#0284c7]"
              />
            </div>
            <div>
              <label htmlFor="reg-confirm" className="block text-sm font-medium mb-1.5">
                {a.confirmPassword}
              </label>
              <input
                id="reg-confirm"
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder={a.passwordPh}
                className="w-full h-11 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 focus:ring-[#0284c7]/50 focus:border-[#0284c7]"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                {error}
                {exists && (
                  <div className="mt-2">
                    <Link
                      href="/login"
                      className="font-semibold text-[#1e40af] underline underline-offset-2"
                    >
                      {a.signInLink}
                    </Link>
                  </div>
                )}
              </div>
            )}
            {success && (
              <div className="text-sm text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
                {a.successRegister}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg text-white font-semibold bg-[#1e40af] hover:bg-[#1e3a8a] border-0 cursor-pointer transition-colors disabled:opacity-60"
            >
              {loading ? '…' : a.registerBtn}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-[var(--muted)]">
            {a.hasAccount}{' '}
            <Link
              href="/login"
              className="font-semibold text-[#1e40af] hover:underline underline-offset-2"
            >
              {a.signInLink}
            </Link>
          </p>
          <p className="mt-4 text-[11px] text-center text-[var(--muted)]">{a.demoHint}</p>
        </div>
      </div>
    </div>
  );
}
