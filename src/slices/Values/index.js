import { Bounded } from '@/components/Bounded';
import Flower from '@/components/Flower';

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
      className="bg-medium-beige mb-4"
    >
      <div className=" flex md:flex-row flex-col md:items-center">
        <div className="max-w-[25rem] md:text-left text-center">
          <div className="flex flex-col justify-center">
            <Flower />
            <h1 className="text-[2rem]  font-body font-regular">
              {slice.primary.heading}
            </h1>
          </div>
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
                <div className="border-t my-6 border-gray-300" />
              )}
              <div className=" flex flex-col gap-3">
                <p className="font-regular md:text-[2.3rem] text-[1.5rem] text-mossy-green pb-2 leading-none font-body">
                  {item.value}
                </p>
                <p className="font-light text-[.8rem] md:text-[1rem] md:w-full w-[70%] mx-auto font-body font-light break-words hyphens-auto ">
                  {item.value_desc}
                </p>
              </div>
            </div>
          ))}
          {slice.items.length - 1 && ( // Add line divider if it's not the last item
            <div className="border-t mt-4 mb-4 border-gray-300 md:w-[60%] w-[80%] ml-auto md:mr-[4rem] mr-auto" />
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Values;
