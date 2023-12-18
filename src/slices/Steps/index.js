import { Bounded } from '@/components/Bounded';
import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.StepsSlice} StepsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepsSlice>} StepsProps
 * @param {StepsProps}
 */
const Steps = ({ slice }) => {
  return (
    <>
      <div className="py-4">
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-medium-beige"
        >
          <h1 className="leading-tight tracking-tight text-center font-body text-slate-grey md:text-[4rem] text-[2rem]">
            {slice.primary.heading}
          </h1>
          <div className="flex md:flex-row flex-col mx-auto  md:gap-0 gap-4 w-auto py-[2rem]">
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="border border-solid rounded-p-md bg-dark-beige border-mossy-green md:p-8 p-3 px-0 max-w-[14rem] mx-auto"
              >
                <div className="text-center mx-auto p-2 md:p-0">
                  <div className="w-full">
                    <p className="font-semibold leading-none text-mossy-green font-body tracking-wide md:text-[33px] text-[25px] pb-2">
                      {item.steps}
                    </p>
                    <p className="font-light text-mossy-green font-body md:text-[16px] text-[14px]">
                      {item.step_desc}
                    </p>
                  </div>
                </div>
              </div>
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
