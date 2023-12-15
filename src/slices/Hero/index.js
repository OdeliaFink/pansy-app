import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';

import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import clsx from 'clsx';

const Hero = ({ slice }) => {
  return (
    // <Bounded as="section" collapsible={false} className="bg-white pb-0 md:pb-0">
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-auto relative"
    >
      <div className="grid grid-cols-1 justify-items-center gap-10">
        <div className="max-w-2xl text-center leading-wider">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <Heading className="mb-6 last:mb-0 font-display text-slate-grey tracking-widest pt-4">
                  {children}
                </Heading>
              ),
              paragraph: ({ children }) => (
                <p className="mb-6 last:mb-10 px-4">{children}</p>
              ),
            }}
          />
        </div>

        {prismic.isFilled.image(slice.primary.image) && (
          <div className="h-auto pt-10">
            <PrismicNextImage
              field={slice.primary.image}
              className={clsx('w-full h-[10rem] mx-auto object-cover')}
            />
          </div>
        )}
      </div>
    </section>
    // </Bounded>
  );
};

export default Hero;
