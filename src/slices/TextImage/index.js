// import { Bounded } from '@/components/Bounded';
import Button from '@/components/Button';
import { Bounded } from '@/components/Bounded';
import Heading from '@/components/Heading';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@/components/PrismicRichText';
import clsx from 'clsx';

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
      className="py-1"
    >
      <div className="grid gap-10 md:grid-cols-2 place-items-center md:py-8 py-3 first:pt-10">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            'rounded-lg object-cover h-[350px] w-[450px]',
            slice.variation === 'imageRight' && 'md:order-2'
          )}
        />
        <div className="grid gap-4">
          <h2 className="leading-tight tracking-tight font-body text-slate-grey text-[4rem]">
            {slice.primary.heading}
          </h2>
          <p className='className="max-w-md text-md md:text-[15px] max-w-[30rem] font-body text-slate-600"'>
            {slice.primary.body}
          </p>
          <h2 className="font-semibold font-body">{slice.primary.body_2}</h2>

          {slice?.primary?.label && (
            <PrismicNextLink
              field={slice.primary.link}
              className="border-1 rounded-sm border text-[13px] border-black hover:bg-lighter-green max-w-fit px-10 py-1 ease-in-out duration-300 text-left"
            >
              {slice.primary.label}
            </PrismicNextLink>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextImage;
