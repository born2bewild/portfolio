import GlobalStyles from '@/styles/GlobalStyles';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Kalam } from 'next/font/google';

const kalam = Kalam({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kalam',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kalam.variable}`}>
      <GlobalStyles />
      <Analytics />
      <Component {...pageProps} />
    </main>
  );
}
