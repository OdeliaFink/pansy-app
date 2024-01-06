'use client';
import { Bounded } from '@/components/Bounded';
import Flower from '@/components/Flower';
import { useState } from 'react';

const Values = ({ slice }) => {
  const [activeItem, setActiveItem] = useState(null); // State to track the active item

  // Function to toggle the active state of an item
  const toggleActive = (index) => {
    setActiveItem(activeItem === index ? null : index); // Toggle active state for clicked item
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-medium-beige mb-4 "
    >
      <div className="flex md:flex-row flex-col md:items-center md:gap-[11rem]">
        <div className="max-w-[28rem] md:text-left text-center md:pl-[4rem]">
          <div className="flex flex-col justify-center">
            {/* <Flower /> */}
            <h1 className="lg:text-[4rem] text-[3rem] font-display font-regular">
              {slice.primary.heading}
            </h1>
          </div>
          <p className="text-[1rem] font-body font-light">
            {slice.primary.subheading}
          </p>
        </div>
        <div className="flex flex-col md:w-full">
          {slice.items.map((item, index) => (
            <div key={index} className="flex flex-col md:text-left ml-auto ">
              <div className="my-6 border-gray-300" />
              <div className="flex flex-col gap-3 hover:pointer">
                <div
                  className="flex flex-row items-center justify-between ease-in-out duration-200 cursor-pointer"
                  onClick={() => toggleActive(index)} // Toggle active state for clicked item
                >
                  <p className="font-regular md:text-[2.3rem] text-[1.5rem] text-mossy-green pb-2 leading-none font-body">
                    {item.value}
                  </p>
                  <div className="font-regular md:text-[2.3rem] text-[1.5rem] text-mossy-green">
                    {activeItem === index ? '-' : '+'}
                  </div>
                </div>
                <div
                  className={`font-light text-[.8rem] md:text-[1rem] w-full mx-auto font-body font-light break-words hyphens-none transition-all ${
                    activeItem === index
                      ? 'h-auto opacity-100'
                      : 'h-0 opacity-0'
                  }`}
                >
                  {item.value_desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Values;
