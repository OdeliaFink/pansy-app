// import { Bounded } from '@/components/Bounded';
import Button from '@/components/Button';
import { Bounded } from '@/components/Bounded';
import Heading from '@/components/Heading';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@/components/PrismicRichText';
import clsx from 'clsx';

const components = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-md md:text-[12px] font-body text-slate-600">
      {children}
    </p>
  ),
};
/**
 * @typedef {import("@prismicio/client").Content.TextImageSlice} TextImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSlice>} TextImageProps
 * @param {TextImageProps}
 */
const TextImage = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-10 md:grid-cols-2 place-items-center">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            'rounded-lg object-cover h-[350px] w-[450px]',
            slice.variation === 'imageRight' && 'md:order-2'
          )}
        />
        <div className="grid gap-4">
          <h2 className="leading-tight tracking-tight font-body text-slate-500 text-[4rem]">
            {slice.primary.heading}
          </h2>
          <p className='className="max-w-md text-md md:text-[12px] font-body text-slate-600"'>
            {slice.primary.body}
          </p>
          <h2>{slice.primary.body_2}</h2>

          {slice?.primary?.label && (
            <Button field={slice.primary.link}>{slice.primary.label}</Button>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextImage;
