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
      className="h-auto static pb-10"
    >
      <div className="h-auto pt-2 relative">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            'w-full h-[38rem] 2xl:h-[50rem] mx-auto object-cover z-10 opacity-75'
          )}
        />
      </div>
      {/* <div className="absolute inset-0 z-20"></div> */}
      <div
        className={clsx(
          'flex flex-col items-center justify-center inset-0 relative'
        )}
      >
        <div className="mt-[-50rem] opacity-1 ">
          {' '}
          <div className="text-center leading-none">
            <h1 className="leading-none tracking-widest font-display md:text-[9rem] pb-2 text-[5rem] text-bg-beige">
              {slice.primary.title}
            </h1>
            <p className="font-light font-body text-[#4A5043] text-[1.5rem] w-[50%] mx-auto">
              {slice.primary.desc}
            </p>
          </div>
          <div className="text-center pt-8">
            <PrismicNextLink
              field={slice.primary.button_link}
              className="display-block w-fit border-solid px-8 py-[.8rem] rounded-p-sm text-bg-beige font-body border-dark-deen bg-mossy-green hover:bg-sage-green ease-in-out duration-500  mb-8 md:mb-0 "
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
