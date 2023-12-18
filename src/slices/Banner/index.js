import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.BannerSlice} BannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerSlice>} BannerProps
 * @param {BannerProps}
 */
const Banner = ({ slice, onClose }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center">
        <div>
          <p className="text-sm">{slice.primary.text}</p>
        </div>
        {/* <Button field={slice.primary.link} onClose={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button> */}
      </div>
    </section>
  );
};

export default Banner;
