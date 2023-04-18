import GlobalStyles from '@/styles/GlobalStyles';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Kalam } from 'next/font/google';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const kalam = Kalam({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kalam',
});

export default function App({ Component, pageProps }: AppProps) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
  return (
    <main className={`${kalam.variable}`}>
      <GlobalStyles />
      <Analytics />
      <ToastContainer hideProgressBar />
      <GoogleReCaptchaProvider
        reCaptchaKey={reCaptchaKey}
        scriptProps={{
          async: true,
          defer: true,
        }}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </main>
  );
}
