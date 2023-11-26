import { PrismicNextImage } from '@prismicio/next';
/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySlice} PhotoGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySlice>} PhotoGalleryProps
 * @param {PhotoGalleryProps}
 */
const PhotoGallery = ({ slice }) => {
  return (
    <>
      <div className="py-2">
        <h1 className="font-display text-[2rem] text-center text-slate-700">
          {slice.primary.header}
        </h1>
      </div>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="grid grid-cols-3 gap-8 p-8"
      >
        {slice.items.map((item, index) => (
          <div key={index} className="">
            <div className="grid-cols-3 grid-rows-1 relative">
              <div className="group">
                <div className="gap-4">
                  <PrismicNextImage
                    field={item.image}
                    className="opacity-100 hover:opacity-40 ease-in-out duration-300 hover:cursor-pointer max-w-[100%] rounded"
                  />
                </div>
                <p className="font-regular text-dark-green text-lg font-body  font-[16px] absolute bottom-10 right-15 left-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default PhotoGallery;
