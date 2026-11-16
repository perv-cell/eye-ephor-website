'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import ModalForm from '@/components/modelform/modelForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { searchData } from '@/lib/searchData';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { applyTheme, getStoredTheme, type Theme } from '@/lib/theme';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof searchData>([]);
  const [theme, setTheme] = useState<Theme>('dark');
  const [themeReady, setThemeReady] = useState(false);
  const { t, locale, toggleLocale } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
    setThemeReady(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearchQuery('');
    setSuggestions([]);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 1) {
      const lowerValue = value.toLowerCase();
      const filtered = searchData
        .filter(
          (item) =>
            item.title.toLowerCase().includes(lowerValue) ||
            item.keywords.some((k) => k.toLowerCase().includes(lowerValue))
        )
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const links = [
    { href: '/product', label: t.nav.product },
    { href: '/advantage', label: t.nav.advantage },
    { href: '/services', label: t.nav.services },
    { href: '/documentation', label: t.nav.documentation },
    { href: '/price', label: t.nav.price },
  ];

  const toolBtn =
    'inline-flex items-center justify-center h-9 w-9 rounded-lg shrink-0 border-0 cursor-pointer transition-colors text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent-soft)]';

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b border-[var(--border)] backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-slate-950/25' : ''
        }`}
        style={{ background: 'var(--nav-bg)' }}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-16 flex items-center gap-3">
          <Link
            href="/"
            aria-label={t.nav.brand}
            className="flex items-center gap-2.5 shrink-0 rounded-lg px-2 py-1.5 hover:bg-[var(--accent-soft)] transition-colors"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1e3a8a] shadow-md shadow-blue-800/40">
              <Image src="/favicon-32.png" alt="" width={28} height={28} />
            </span>
            <span className="font-bold text-base tracking-tight text-[var(--foreground)] whitespace-nowrap">
              {t.nav.brand}
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-0.5 list-none m-0 p-0 flex-1 min-w-0 justify-center">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-block px-3 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors whitespace-nowrap no-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-2 shrink-0 ml-auto">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Language"
              className="h-9 px-2.5 rounded-lg text-xs font-bold tracking-wide border border-[var(--border)] text-[var(--foreground)] bg-transparent cursor-pointer hover:bg-[var(--accent-soft)] transition-colors"
            >
              {locale === 'ru' ? 'EN' : 'RU'}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.theme}
              className={toolBtn}
              suppressHydrationWarning
            >
              {themeReady && theme === 'dark' ? (
                <FaSun size={15} />
              ) : (
                <FaMoon size={15} />
              )}
            </button>
            <button
              type="button"
              onClick={toggleSearch}
              aria-label="Search"
              className={`${toolBtn} ${searchOpen ? 'text-[#38bdf8] bg-[var(--accent-soft)]' : ''}`}
            >
              <FaSearch size={14} />
            </button>

            <div className="flex items-center gap-2 pl-1">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="h-9 px-4 rounded-lg text-sm font-semibold whitespace-nowrap cursor-pointer border-0 text-white bg-[#1e40af] hover:bg-[#1e3a8a] shadow-md shadow-blue-800/35 transition-colors"
              >
                {t.nav.request}
              </button>
              <Link
                href="/login"
                className="inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-semibold whitespace-nowrap border border-[var(--border)] text-[var(--foreground)] bg-transparent hover:bg-[var(--accent-soft)] transition-colors no-underline"
              >
                {t.nav.login}
              </Link>
            </div>
          </div>

          <div className="flex xl:hidden items-center gap-1.5 ml-auto">
            <button
              type="button"
              onClick={toggleLocale}
              className="h-9 px-2.5 rounded-lg text-xs font-bold border border-[var(--border)] text-[var(--foreground)] bg-transparent cursor-pointer"
            >
              {locale === 'ru' ? 'EN' : 'RU'}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.theme}
              className={toolBtn}
            >
              {themeReady && theme === 'dark' ? (
                <FaSun size={15} />
              ) : (
                <FaMoon size={15} />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={t.nav.menu}
              aria-expanded={isOpen}
              className="flex flex-col justify-center gap-[5px] h-9 w-9 p-2 rounded-lg cursor-pointer bg-transparent border-0"
            >
              <span
                className={`block w-5 h-0.5 rounded bg-[var(--foreground)] transition-all ${
                  isOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 rounded bg-[var(--foreground)] transition-all ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 rounded bg-[var(--foreground)] transition-all ${
                  isOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="xl:hidden fixed inset-0 top-16 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          className={`xl:hidden fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-[min(100%,320px)] border-l border-[var(--border)] p-5 flex flex-col gap-4 transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
          }`}
          style={{ background: 'var(--surface)' }}
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 rounded-xl text-base font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft)] no-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              toggleSearch();
            }}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-[var(--muted)] hover:bg-[var(--accent-soft)] border-0 bg-transparent cursor-pointer text-left"
          >
            <FaSearch /> {t.nav.searchBtn}
          </button>

          <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-[var(--border)]">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full h-11 rounded-xl text-sm font-semibold text-white bg-[#1e40af] hover:bg-[#1e3a8a] border-0 cursor-pointer shadow-md shadow-blue-800/30"
            >
              {t.nav.request}
            </button>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full h-11 rounded-xl text-sm font-semibold border border-[var(--border)] text-[var(--foreground)] bg-transparent hover:bg-[var(--accent-soft)] no-underline"
            >
              {t.nav.login}
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="absolute top-[calc(100%+8px)] right-4 left-4 sm:left-auto sm:w-full sm:max-w-[480px] z-50">
            <div
              className="rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden"
              style={{ background: 'var(--surface)' }}
            >
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2 p-2 pl-4 border-b border-[var(--border)]"
              >
                <FaSearch className="text-[var(--muted)] shrink-0" size={16} />
                <input
                  type="text"
                  placeholder={t.nav.search}
                  autoFocus
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-[var(--foreground)] placeholder:text-[var(--muted)] py-2 text-sm"
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 py-2 bg-[#1e40af] text-white font-medium text-sm rounded-xl border-0 cursor-pointer hover:bg-[#1e3a8a]"
                >
                  {t.nav.searchBtn}
                </button>
              </form>

              {suggestions.length > 0 && (
                <div className="max-h-[280px] overflow-y-auto">
                  {suggestions.map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex flex-col px-4 py-3 hover:bg-[var(--accent-soft)] transition-colors border-b border-[var(--border)] last:border-0 no-underline"
                    >
                      <span className="font-semibold text-[var(--foreground)] text-sm">
                        {item.title}
                      </span>
                      <span className="text-xs text-[var(--muted)] truncate">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery.length > 1 && suggestions.length === 0 && (
                <div className="px-4 py-6 text-sm text-[var(--muted)] text-center">
                  {t.nav.searchEmpty.replace('{q}', searchQuery)}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navbar;
