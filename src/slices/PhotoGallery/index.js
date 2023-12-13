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
      {/* <Bounded> */}
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex flex-row flex-wrap gap-8 justify-between py-6 px-8"
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
                    className="inline-block rounded-p-lg w-full flex-col h-[25rem] w-[20rem] object-contain flex items-center mx-8"
                  />
                </div>
                {/* <div className="flex md:flex-col flex-row gap-10">
                  <div className="px-4 flex py-2">
                    <PrismicNextImage
                      field={item.image}
                      className="inline-block rounded-p-lg h-[12rem] w-[15rem] w-full items-center object-contain mx-8"
                    />
                  </div>
                  <div className="flex gap-10 py-2">
                    <PrismicNextImage
                      field={item.image2}
                      className="inline-block  w-full flex-col h-[17rem] w-[20rem] object-contain rounded-p-lg flex items-center mx-8"
                    />
                  </div>
                </div> */}
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
