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
  console.log(slice.items, 'photo info');
  return (
    <>
      {/* <Bounded> */}
      <div className="pt-10 pb-4">
        <h1 className="font-body text-[3rem] text-center text-slate-grey">
          {slice.primary.header}
        </h1>
      </div>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex flex-row flex-wrap gap-8 justify-between"
      >
        <div className="flex overflow-y-hidden">
          <Marquee>
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="flex relative left-16 w-100vw  overflow-y-hidden h-auto"
              >
                <div className="h-200 flex">
                  <PrismicNextImage
                    field={item.horizontalimage}
                    className="inline-block rounded-[3rem] w-[65%] flex-col h-[35rem] object-contain flex items-cent"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="h-[13rem] flex">
                    <PrismicNextImage
                      field={item.image}
                      className="inline-block rounded-[3rem]  w-[65%] items-center object-contain"
                    />
                  </div>
                  <div className="h-[30rem] flex">
                    <PrismicNextImage
                      field={item.image2}
                      className="inline-block  w-1/2 flex-col h-[35rem] object-contain rounded-[3rem]flex items-cent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      {/* </Bounded> */}
    </>
  );
};

export default PhotoGallery;
