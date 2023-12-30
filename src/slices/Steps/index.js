import { Bounded } from '@/components/Bounded';
import Button from '@/components/Button';
import wave from '../../assets/wavy.png';

/**
 * @typedef {import("@prismicio/client").Content.StepsSlice} StepsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepsSlice>} StepsProps
 * @param {StepsProps}
 *
 *
 */

export const SquigglyLineSVG = (
  <svg
    width="200"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-50"
  >
    <path
      d="M10 20 
       C 30 5, 50 35, 70 20
       C 90 5, 110 35, 130 20
       C 150 5, 170 35, 190 20"
      stroke="#737F51"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
const Steps = ({ slice }) => {
  return (
    <>
      <div className="py-4">
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-medium-beige"
        >
          <h1 className="leading-tight tracking-tight text-left font-body text-mossy-green md:text-[4rem] text-[3rem]">
            {slice.primary.heading}
          </h1>
          <div className="flex lg:flex-row flex-col mx-auto  md:gap-0 gap-4 w-auto pt-[3rem] pb-[2rem]">
            {slice.items.map((item, index) => (
              <>
                <div
                  key={index}
                  className="border border-solid rounded-p-md bg-bg-beige border-mossy-green md:p-8 p-3 px-0 max-w-[14rem] mx-auto"
                >
                  <div className="text-center mx-auto md:p-0 p-10">
                    <div className="w-full">
                      <p className="font-semibold leading-none  font-body tracking-wide md:text-[33px] text-[25px] pb-2">
                        {item.steps}
                        {/* {SquigglyLineSVG} */}
                      </p>
                      <p className="font-light  font-body md:text-[16px] text-[14px]">
                        {item.step_desc}
                      </p>
                    </div>
                  </div>
                </div>
                {index !== slice.items.length - 1 && (
                  <div className="flex justify-center w-full items-center">
                    {SquigglyLineSVG}
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex items-center text-center justify-center py-2">
            <Button field={slice.primary.button_link}>
              {slice.primary.button_text}
            </Button>
          </div>
        </Bounded>
      </div>
    </>
  );
};

export default Steps;
