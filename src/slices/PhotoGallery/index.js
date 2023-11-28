import { Bounded } from '@/components/Bounded';
import { PrismicNextImage } from '@prismicio/next';
/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySlice} PhotoGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySlice>} PhotoGalleryProps
 * @param {PhotoGalleryProps}
 */
const PhotoGallery = ({ slice }) => {
  return (
    <>
      <Bounded>
        <div className="pt-10 pb-4">
          <h1 className="font-body text-[3rem] text-left text-slate-grey">
            {slice.primary.header}
          </h1>
        </div>
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="grid grid-cols-3 gap-8"
        >
          {slice.items.map((item, index) => (
            <div key={index} className="">
              <div className="grid-cols-3 grid-rows-1 relative">
                <div className="group ">
                  <div className="gap-4">
                    <PrismicNextImage
                      field={item.image}
                      className="hover:border hover:border-2 opacity-100 hover:opacity-20 ease-in-out duration-300 hover:cursor-pointer max-w-[100%] rounded"
                    />
                  </div>
                  <p className="font-semibold text-dark-green text-[1.5rem] font-body  font-[16px]  opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-[6rem] right-15 left-12">
                    {item.desc}
                  </p>

                  <p className="font-regular text-dark-green text-[1rem] font-body max-w-[14rem]  font-[16px] absolute top-[8rem] right-15 left-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.desc2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Bounded>
    </>
  );
};

export default PhotoGallery;
