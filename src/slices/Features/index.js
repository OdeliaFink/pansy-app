import { PrismicRichText } from "@/components/PrismicRichText";
import React from "react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */

const icons = {
  house: (
    <Image
      width={192}
      height={148}
      src={'/icons/House.png'}
      className="max-w-[12rem]"
      alt="house-icon"
    />
  ),
  lightbulb: (
    <Image
      width={192}
      height={148}
      src={'/icons/Maze.png'}
      className="max-w-[12rem]"
      alt="maze-icon"
    />
  ),
  globe: (
    <Image
      width={192}
      height={148}
      src={'/icons/Bird.png'}
      className="max-w-[12rem]"
      alt="bird-icon"
    />
  ),
  leaf: (
    <Image
      width={192}
      height={148}
      src={'/icons/Hand.png'}
      className="max-w-[12rem]"
      alt="hand-icon"
    />
  ),
};

const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8">
      <div className="bg-medium-beige py-2">
        <div className="py-[1rem]">
          <div className=" flex md:flex-row flex-col justify-center md:gap-[2rem] md:gap-10 gap-2  mx-auto sm:place-items-start place-items-center px-6 ">
            {slice.items.map((item, index) => (
              <div key={index} className="bg-medium-beige py-2 flex flex-col ">
                <div className="flex flex-col justify-center text-center">
                  {item.icon_selection && (
                    <div className="mb-3 flex justify-center">
                      {icons[item.icon_selection]}
                    </div>
                  )}

                  <PrismicRichText
                    components={{
                      paragraph: ({ children }) => (
                        <p className=" font-body text-[1.2rem] font-semibold last:mb-0">
                          {children}
                        </p>
                      ),
                    }}
                    field={item.icon_title}
                  />
                  <div className="w-[80%] mx-auto">
                    <PrismicRichText
                      components={{
                        paragraph: ({ children }) => (
                          <p className="font-light text-[1rem] last:mb-0">
                            {children}
                          </p>
                        ),
                      }}
                      field={item.icon_desc}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
