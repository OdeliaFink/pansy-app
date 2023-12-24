import { Bounded } from '@/components/Bounded';
import { PrismicNextImage } from '@prismicio/next';
// import '../../app/globals.css';
import Marquee from 'react-fast-marquee';
/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySlice} PhotoGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySlice>} PhotoGalleryProps
 * @param {PhotoGalleryProps}
 */
{
}
const PhotoGallery = ({ slice }) => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex justify-center flex-row flex-wrap gap-8 py-6 "
      >
        <div className="pt-10 pb-4 flex md:flex-row flex-col items-center px-10 gap-12">
          <h1 className="font-body text-[3rem] md:text-left leading-none text-center text-slate-grey">
            {slice.primary.header}
          </h1>
          <div className="flex flex-col md:text-left text-center">
            <p>{slice.primary.desc}</p>
            <p>{slice.primary.desc2}</p>
          </div>
        </div>
        <div className="flex">
          <Marquee>
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="flex 
               h-auto gap-2"
              >
                <div className="flex justify-center md:flex-row flex-col gap-2 px-2">
                  <PrismicNextImage
                    field={item.horizontalimage}
                    className="inline-block rounded-p-lg w-full flex-col h-[25rem] w-[20rem] object-contain flex items-center"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          {/* {slice.items.map((item, index) => (
            <div
              key={index}
              className="flex 
               h-auto gap-2"
            >
              <div className="flex justify-center md:flex-row flex-col gap-2 px-2">
                <PrismicNextImage
                  field={item.horizontalimage}
                  className="inline-block rounded-p-lg w-full flex-col h-[25rem] w-[20rem] object-contain flex items-center"
                />
              </div>
            </div>
          ))} */}
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
