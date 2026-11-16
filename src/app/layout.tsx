import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footere/Footer';
import Navbar from '@/components/navbar/Navbar';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { ThemeScript } from '@/components/theme/ThemeScript';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    process.env.NEXT_PUBLIC_APP_TITLE ||
    'Око эфора — аналитика тарифов и Isolation Service',
  description:
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    'Платформа аналитики использования тарифов и Isolation Service для обучения моделей. Инфобез, квоты, прогнозы.',

  openGraph: {
    title:
      process.env.NEXT_PUBLIC_APP_TITLE ||
      'Око эфора — аналитика тарифов и Isolation Service',
    description:
      process.env.NEXT_PUBLIC_DESCRIPTION ||
      'Платформа аналитики использования тарифов и Isolation Service для обучения моделей.',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: process.env.NEXT_PUBLIC_AUTHOR_SITE || 'Око эфора',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Око эфора — аналитика тарифов и Isolation Service',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
