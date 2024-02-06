// import { PrismicRichText } from '@prismicio/react';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import Maze from '../../icons/Maze.png';
import Bird from '../../icons/Bird.png';
import Hand from '../../icons/Hand.png';
import House from '../../icons/House.png';
/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */

const icons = {
  house: <img src={House.src} className="max-w-[12rem]" />,
  lightbulb: <img src={Maze.src} className="max-w-[12rem]" />,
  globe: <img src={Bird.src} className="max-w-[12rem]" />,
  leaf: <img src={Hand.src} className="max-w-[12rem]" />,
};

// {icons.map((item) => (
//   <>
//     <>{item.globe}</>
//     <>{item.house}</>
//     <>{item.lightbulb}</>
//     <>{item.leaf}</>
//   </>
// ))}

const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8"
    >
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

import React from 'react';
