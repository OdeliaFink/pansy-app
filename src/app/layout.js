'use client';

import './globals.css';
import { createClient } from '@/prismicio';
import { Caprasimo, Work_Sans } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { repositoryName } from '@/prismicio';
import Banner from '@/slices/Banner';

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
export default async function RootLayout({ children }) {
  const client = createClient();
  const homePage = await client.getByUID('page', 'home');
  console.log('🚀 ~ file: layout.js:28 ~ RootLayout ~ homePage:', homePage.uid);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <html
        lang="en"
        className={clsx('max-w-full', caprasimo.variable, workSans.variable)}
      >
        <body className="overflow-x-hidden antialiased bg-bg-beige max-w-full">
          {/* {homePage === 'home' && <Banner />} */}
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </html>
    </AnimatePresence>
  );
}
