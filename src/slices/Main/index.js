import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';
import clsx from 'clsx';

/**
 * @typedef {import("@prismicio/client").Content.MainSlice} MainSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainSlice>} MainProps
 * @param {MainProps}
 */
const Main = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-auto static pb-9"
    >
      <div className="h-auto pt-2">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx('w-full h-[38rem] mx-auto object-cover')}
        />
      </div>
      <div
        className={clsx(
          'flex  mx-auto text-center lg:left-[27rem] xl:left-[36rem] 2xl:left-[75rem] md:left-[16rem] md:top-[16rem] left-[7rem]  top-[8rem]  absolute'
        )}
      >
        <div className="flex flex-col justify-center">
          <h1 className="tracking-widest font-display md:text-[7rem] text-[3.5rem] text-bg-beige">
            {slice.primary.title}
          </h1>
          <div className="text-center">
            <PrismicNextLink
              field={slice.primary.button_link}
              className="display-block w-fit border-solid px-8 py-[.8rem] rounded-sm text-bg-beige font-body border-dark-deen bg-dark-green hover:bg-lighter-green transition-color duration-200 ease-in-out  mb-8 md:mb-0 "
            >
              {slice.primary.button_text}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
