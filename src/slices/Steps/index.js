import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.StepsSlice} StepsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepsSlice>} StepsProps
 * @param {StepsProps}
 */
const Steps = ({ slice }) => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="bg-medium-beige"
      >
        <div className="flex md:gap-10 gap-1 mx-auto md:w-[70%] w-auto py-4 bg-medium-beige ">
          {slice.items.map((item, index) => (
            <div
              key={index}
              className="border border-solid border-lighter-green md:p-6 p-1 px-0"
            >
              <div className="text-center md:w-[70%] w-[80%]  mx-auto">
                <div className="w-full">
                  <p className="font-semibold text-dark-green font-body tracking-wide text-[14px] pb-2">
                    {item.steps}
                  </p>
                  <p className="font-light text-dark-green font-body text-[12px]">
                    {item.step_desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex items-center text-center justify-center pt-4 pb-2">
        <Button field={slice.primary.button_link}>
          {slice.primary.button_text}
        </Button>
      </div>
      <div className="w-[80%] mx-auto py-3">
        <div className="border border-solid border-black" />
      </div>
    </>
  );
};

export default Steps;
