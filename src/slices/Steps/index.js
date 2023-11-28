import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.StepsSlice} StepsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepsSlice>} StepsProps
 * @param {StepsProps}
 */
const Steps = ({ slice }) => {
  return (
    <>
      <div className="py-2">
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-medium-beige"
        >
          <div className="flex md:flex-row flex-col mx-auto md:w-[70%] lg:w-[60%] md:gap-0 gap-3 w-auto py-5 bg-medium-beige ">
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="border border-solid border-lighter-green md:p-6 p-1 px-0 max-w-[10rem] mx-auto"
              >
                <div className="text-center mx-auto">
                  <div className="w-full">
                    <p className="font-semibold text-dark-green font-body tracking-wide text-[18px] pb-2">
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
        <div className="flex items-center text-center justify-center pt-10">
          <Button field={slice.primary.button_link}>
            {slice.primary.button_text}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Steps;
