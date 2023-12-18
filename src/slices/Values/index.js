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
      <div className=" flex md:flex-row sm:flex-col md:items-center max-w-full mx-auto">
        <div className="max-w-[20rem] mr-[4rem]">
          <h1 className="text-[2rem] font-body font-semibold">
            {slice.primary.heading}
          </h1>
          <p className="text-[1rem] font-body font-light">
            {slice.primary.subheading}
          </p>
        </div>
        <div className="flex flex-col">
          {slice.items.map((item, index) => (
            <div key={index} className="flex flex-col flex-2 w-[60%] mx-auto">
              {index !== slice.items.length && ( // Add line divider if it's not the last item
                <div className="border-t mt-4 mb-4 border-gray-300" />
              )}
              <div className=" flex flex-col">
                <p className="font-semibold leading-none font-body font-semibold">
                  {item.value}
                </p>
                <p className="font-light text-mossy-green font-body font-light">
                  {item.value_desc}
                </p>
              </div>
            </div>
          ))}
          {slice.items.length - 1 && ( // Add line divider if it's not the last item
            <div className="border-t mt-4 mb-4 border-gray-300 w-[60%] mx-auto" />
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Values;
