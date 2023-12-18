import { Bounded } from '@/components/Bounded';

/**
 * @typedef {import("@prismicio/client").Content.ValuesSlice} ValuesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ValuesSlice>} ValuesProps
 * @param {ValuesProps}
 */
const Values = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-medium-beige"
    >
      <div className=" flex md:flex-row flex-col md:items-center">
        <div className="max-w-[25rem] md:text-left text-center">
          <h1 className="text-[2rem]  font-body font-semibold">
            {slice.primary.heading}
          </h1>
          <p className="text-[1rem] font-body font-light">
            {slice.primary.subheading}
          </p>
        </div>
        <div className="flex flex-col">
          {slice.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-2 md:w-[60%] md:text-left text-center ml-auto md:mr-[4rem] mr-[0rem]"
            >
              {index !== slice.items.length && ( // Add line divider if it's not the last item
                <div className="border-t mt-4 mb-4 border-gray-300" />
              )}
              <div className=" flex flex-col">
                <p className="font-semibold text-[2rem] text-mossy-green pb-2 leading-none font-body font-semibold">
                  {item.value}
                </p>
                <p className="font-light font-body font-light break-words hyphens-auto ">
                  {item.value_desc}
                </p>
              </div>
            </div>
          ))}
          {slice.items.length - 1 && ( // Add line divider if it's not the last item
            <div className="border-t mt-4 mb-4 border-gray-300 w-[60%] ml-auto mr-[4rem]" />
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Values;
