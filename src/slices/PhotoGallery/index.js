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
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex flex-row flex-wrap gap-8 justify-between py-6 px-8"
      >
        <div className="pt-10 pb-4 flex flex-row items-center px-10 gap-12">
          <h1 className="font-body text-[3rem] text-left text-slate-grey">
            {slice.primary.header}
          </h1>
          <div className="flex flex-col">
            <p>{slice.primary.desc}</p>
            <p>{slice.primary.desc2}</p>
          </div>
        </div>
        <div className="flex overflow-y-hidden">
          <Marquee>
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="flex relative left-16 w-100vw  overflow-y-hidden h-auto gap-2"
              >
                <div className="flex gap-2 px-2">
                  <PrismicNextImage
                    field={item.horizontalimage}
                    className="inline-block rounded-p-lg w-full flex-col h-[25rem] object-contain flex items-center"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <div className="h-[15rem] px-4 flex">
                    <PrismicNextImage
                      field={item.image}
                      className="inline-block rounded-p-lg  w-full items-center object-contain"
                    />
                  </div>
                  <div className="flex gap-10 h-[20rem]">
                    <PrismicNextImage
                      field={item.image2}
                      className="inline-block  w-full flex-col h-[17rem] object-contain rounded-p-lg flex items-center"
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
