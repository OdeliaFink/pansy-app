'use client';

import './globals.css';
import { Caprasimo, Work_Sans } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { repositoryName } from '@/prismicio';
import Script from 'next/script';

export const caprasimo = Caprasimo({
  subsets: ['latin'],
  variable: '--font-caprasimo',
  display: 'swap',
  weight: '400',
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {

  return (
    <AnimatePresence mode="wait" initial={false}>
      <html
        lang="en"
        className={clsx("max-w-full", caprasimo.variable, workSans.variable)}
      >
        <body className="overflow-x-hidden antialiased bg-bg-beige max-w-full">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-11482903768"
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11482903768');
            `}
          </Script>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </html>
    </AnimatePresence>
  );
}
