import { PrismicNextLink } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.TextButtonSlice} TextButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextButtonSlice>} TextButtonProps
 * @param {TextButtonProps}
 */
const TextButton = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-row items-center justify-center bg-medium-beige py-4"
    >
      <div className=" border-solid lg:w-[30%] w-1/2 inline-block p-5 ">
        <p className="font-body text-[16px] font-light text-lighter-green">
          {slice.primary.text}
        </p>
        <p className="font-body text-[16px] font-semibold text-lighter-green">
          {slice.primary.text2}
        </p>
      </div>
      <div className="pl-4">
        <PrismicNextLink
          field={slice.primary.link}
          className="border border-lighter-green py-2 px-4 text-sm hover:bg-dark-green hover:text-white ease-in-out duration-300 font-light"
        >
          {slice.primary.label}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default TextButton;
