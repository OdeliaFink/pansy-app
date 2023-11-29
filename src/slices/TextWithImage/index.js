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
        <div className="max-w-[90%] flex flex-col md:flex-row items-center justify-center">
          {!isImageOnRight && (
            <div className="w-full md:w-auto md:flex-shrink-0 md:ml-10">
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
          <div className="w-full max-w-[25rem] leading-relaxed text-left md:pl-[2rem]">
            <PrismicRichText
              field={slice.primary.text}
              components={{
                heading1: ({ children }) => (
                  <Heading
                    as="h2"
                    size="2xl"
                    className="mb-8 last:mb-0 font-body"
                  >
                    {children}
                  </Heading>
                ),
                heading2: ({ children }) => (
                  <Heading
                    as="h3"
                    size="2xl"
                    className="mb-2 last:mb-0 font-body"
                  >
                    {children}
                  </Heading>
                ),
              }}
            />
          </div>
          {isImageOnRight && (
            <div className="w-full md:w-auto md:flex-shrink-0">
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
