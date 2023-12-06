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
        className="flex flex-row flex-wrap gap-8 justify-between py-5"
      >
        <div className="flex overflow-y-hidden">
          <Marquee pauseOnHover>
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="flex relative left-16 w-100vw  overflow-y-hidden h-auto gap-5"
              >
                <div className="flex gap-5 px-2">
                  <PrismicNextImage
                    field={item.horizontalimage}
                    className="inline-block rounded-[3rem] w-full flex-col h-[20rem] object-contain flex items-center"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="h-[18rem] px-4 flex">
                    <PrismicNextImage
                      field={item.image}
                      className="inline-block rounded-[3rem]  w-full items-center object-contain"
                    />
                  </div>
                  <div className="flex gap-10">
                    <PrismicNextImage
                      field={item.image2}
                      className="inline-block  w-full flex-col h-[17rem] object-contain rounded-[3rem] flex items-center"
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
