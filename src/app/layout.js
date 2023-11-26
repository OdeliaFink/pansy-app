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
      className={clsx('max-w-full', caprasimo.variable, workSans.variable)}
    >
      <body className="overflow-x-hidden antialiased bg-bg-beige">
        {/* TODO: Remove the following element once you have read the documentation. */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-dark-beige p-1 text-center text-[1rem] h-[2rem] text-white font-body font-light relative flex overflow-x-hidden">
            <div className="height-[30px] w-[200%] ">
              <p>
                <strong>
                  Welcome to pansy! Scroll down to see how you can transform
                  your outdoor space
                </strong>
                <div />
              </p>
            </div>
          </div>
          // <>
          //   <div class="relative flex overflow-x-hidden bg-dark-beige">
          //     <div class="py-2 animate-marquee whitespace-nowrap">
          //       <span class="">Welcome to pansy</span>
          //       <span class=" mx-2">
          //         find out how you can transform your space
          //       </span>
          //     </div>
          //   </div>
          // </>
        )}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
