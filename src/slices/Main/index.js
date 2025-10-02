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
      className="h-auto static pb-4"
    >
     

    <div className="relative isolate w-full h-[40rem] 2xl:h-[50rem] overflow-hidden">
  {/* Base image */}
 <PrismicNextImage field={slice.primary.image} className="w-full h-full object-cover" />


  {/* 30% white overlay (#fff @ 0.3) */}
{/* your existing overlay — keep as-is */}
<div
  className="absolute inset-0 z-[10] pointer-events-none
             bg-[linear-gradient(to_bottom,rgba(176,158,141,0)_0%,rgba(176,158,141,0)_0%,rgba(176,158,141,0.01)_0%,rgba(176,158,141,0.22)_0%,rgba(176,158,141,0.40)_0%,rgba(176,158,141,0.65)_60%,rgba(176,158,141,0.90)_70%)]"
/>

  <div className="absolute inset-0 z-[20] ml-4 flex justify-start">
    <div className="text-left relative top-[14rem] leading-none px-4">
      <h1 className="leading-none tracking-normal pb-4 font-display md:text-[12rem] text-[6rem] text-bg-beige">
        {slice.primary.title}
      </h1>
      <p className="uppercase font-body text-pansy-white md:text-xl text-xs w-full mx-auto">
        {slice.primary.desc}
      </p>
      <div className="pt-8">
        <PrismicNextLink
          field={slice.primary.button_link}
          className="display-block w-fit border-solid px-8 py-[.8rem] rounded-p-sm text-pansy-white font-body border-dark-deen bg-mossy-green hover:bg-sage-green ease-in-out duration-500"
        >
          {slice.primary.button_text}
        </PrismicNextLink>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Main;
