import { PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';

import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';

const TextWithFeatures = ({ slice }) => {
  return (
    // <Bounded collapsible={false} as="section" className="bg-slate-100">
    <div className="flex">
      <div className="flex flex-col">
        {prismic.isFilled.image(slice.primary.icon) && (
          <div className="">
            <PrismicNextImage
              field={slice.primary.icon}
              className="w-1/2 h-[30rem] mx-auto object-cover"
            />
          </div>
        )}
        <div className="leading-relaxed">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <Heading as="h2" size="6xl" className=" last:mb-0">
                  {children}
                </Heading>
              ),
              heading2: ({ children }) => (
                <Heading as="h3" size="2xl" className="mb-2 last:mb-0">
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
      </div>
      <ul className="grid gap-10">
        {slice.items.map((item) => (
          <li
            key={prismic.asText(item.featureDescription)}
            className="leading-relaxed"
          >
            <PrismicRichText
              field={item.featureDescription}
              components={{
                heading2: ({ children }) => (
                  <Heading as="h3" size="2xl" className="mb-2 last:mb-0">
                    {children}
                  </Heading>
                ),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
    // </Bounded>
  );
};

export default TextWithFeatures;
