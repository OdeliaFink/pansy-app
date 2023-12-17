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
      <div className="grid gap-15 md:grid-cols-2 place-items-center md:py-8 py-6 first:pt-0">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            'rounded-p-md object-cover  w-[450px]',
            slice.variation === 'longImage' ? 'h-[500px]' : 'h-[350px]',
            slice.variation === 'imageRight' && 'md:order-2',
            slice.variation === 'default' && 'md:mr-[5rem]',
            slice.variation === 'imageRight' && 'md:ml-[2rem] ml-[5rem]'
          )}
        />
        <div
          className={clsx(
            'grid gap-1',
            slice.variation === 'imageRight' ? 'text-left' : 'text-right'
          )}
        >
          <h2 className="leading-tight tracking-tight font-body text-mossy-green md:text-[4rem] text-[3rem] pt-6">
            {slice.primary.heading}
          </h2>
          <p className='className="text-md md:text-[15px] font-body text-slate-600"'>
            {slice.primary.body}
          </p>
          <h2 className="font-semibold font-body">{slice.primary.body_2}</h2>

          {slice?.primary?.label && (
            <div className="pt-4">
              <PrismicNextLink
                field={slice.primary.link}
                className="border-1 rounded-sm border text-[13px] border-black rounded-p-md hover:bg-mossy-green hover:text-pansy-white max-w-fit px-10 py-2 ease-in-out duration-300 text-left"
              >
                {slice.primary.label}
              </PrismicNextLink>
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextImage;
