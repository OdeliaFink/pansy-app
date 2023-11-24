import './globals.css';

import { Caprasimo, Work_Sans } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import clsx from 'clsx';

import { repositoryName } from '@/prismicio';

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
    <html
      lang="en"
      className={clsx(
        'max-w-full overflow-x-hidden',
        caprasimo.variable,
        workSans.variable
      )}
    >
      <body className="overflow-x-hidden antialiased">
        {/* TODO: Remove the following element once you have read the documentation. */}
        {process.env.NODE_ENV === 'development' && (
          <div
            style={{
              background: '#5163ba',
              padding: '1rem',
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#fff',
            }}
          >
            <p>
              <strong>Welcome to pansy!</strong>{' '}
            </p>
          </div>
        )}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
