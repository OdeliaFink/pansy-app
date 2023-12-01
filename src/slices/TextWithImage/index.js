import { PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';
import clsx from 'clsx';
import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';

const TextWithImage = ({ slice }) => {
  const isImageOnRight = slice.variation === 'textWithImageRight';

  return (
    <Bounded as="section" className="bg-white">
      <div className="bg-white flex justify-center items-center py-5">
        <div className="max-w-[90%] flex lg:flex-row flex-col items-center justify-center">
          {!isImageOnRight && (
            <div className="w-full md:w-auto md:flex-shrink-0 md:ml-10 md:mr-[4rem]">
              {prismic.isFilled.image(slice.primary.image) && (
                <PrismicNextImage
                  field={slice.primary.image}
                  sizes="450px"
                  className={clsx(
                    'rounded-lg object-cover h-[350px] w-[450px]'
                  )}
                />
              )}
            </div>
          )}
          <div className="w-full max-w-[25rem]  text-left lg:pl-[2rem] md:pl-0">
            <PrismicRichText
              field={slice.primary.text}
              components={{
                heading1: ({ children }) => (
                  <h1 className="mb-4 last:mb-0 font-body font-bold text-[1.7rem]">
                    {children}
                  </h1>
                  //   as="h4"
                  //   size="2xl"
                  //   className="mb-8 last:mb-0 font-body"
                  // >
                  // </Heading>
                ),
                heading2: ({ children }) => (
                  // <Heading
                  //   as="h2"
                  //   size="2xl"
                  //   className="mb-2 last:mb-0 font-body"
                  // >
                  <h2 className="mb-3 last:mb-0 font-body font-semibold text-[1.4rem]">
                    {children}
                  </h2>
                  // </Heading>
                ),
              }}
            />
          </div>
          {isImageOnRight && (
            <div className="w-full md:w-auto md:flex-shrink-0 md:ml-[4rem]">
              {prismic.isFilled.image(slice.primary.image) && (
                <PrismicNextImage
                  field={slice.primary.image}
                  sizes="450px"
                  className={clsx(
                    'rounded-lg object-cover h-[350px] w-[450px]'
                  )}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
