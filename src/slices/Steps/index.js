import { Bounded } from '@/components/Bounded';
import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.StepsSlice} StepsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepsSlice>} StepsProps
 * @param {StepsProps}
 *
 *
 */

export const Leaf = (
  <svg
    width="80"
    height="80"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.9851 46.7142C37.201 46.7142 47 36.9152 47 23.6993C47 10.4835 36.201 0.68457 23.9851 0.68457C11.7692 0.68457 0.970215 10.4835 0.970215 23.6993C0.970215 36.9152 11.7692 46.7142 23.9851 46.7142Z"
      fill="#58B368"
    />
    <path
      d="M28.1806 22.1161C28.4062 22.1628 28.6224 22.0853 28.768 21.9109C28.9137 21.7364 28.969 21.4826 28.906 21.2595C28.8956 21.2116 28.8695 21.1678 28.8304 21.1327C28.7912 21.0975 28.7408 21.0721 28.6843 21.0602C28.6583 21.0551 28.6322 21.0531 28.6059 21.0541C28.5079 21.0585 28.4166 21.1049 28.3472 21.1839C28.2779 21.263 28.2344 21.3668 28.2245 21.4796C28.2146 21.5924 28.2394 21.7071 28.2933 21.8097C28.3472 21.9122 28.4264 21.9971 28.5193 22.0555C28.5871 22.0955 28.6598 22.1163 28.7332 22.1161L28.1806 22.1161Z"
      fill="#4D9557"
    />
    <path
      d="M19.1898 22.1161C19.2632 22.1163 19.3359 22.0955 19.4037 22.0555C19.4966 21.9971 19.5758 21.9122 19.6297 21.8097C19.6836 21.7071 19.7084 21.5924 19.6985 21.4796C19.6886 21.3668 19.6451 21.263 19.5758 21.1839C19.5064 21.1049 19.4151 21.0585 19.3171 21.0541C19.2908 21.0531 19.2647 21.0551 19.2387 21.0602C19.1801 21.0721 19.1297 21.0975 19.0906 21.1327C19.0515 21.1678 19.0248 21.2116 19.0144 21.2595C18.9514 21.4826 19.0068 21.7364 19.1525 21.9109C19.2981 22.0853 19.5143 22.1628 19.7399 22.1161H19.1898Z"
      fill="#4D9557"
    />
    <path
      d="M23.9822 24.4196C27.1521 24.4196 29.748 21.8237 29.748 18.6538C29.748 15.4839 27.1521 12.888 23.9822 12.888C20.8123 12.888 18.2164 15.4839 18.2164 18.6538C18.2164 21.8237 20.8123 24.4196 23.9822 24.4196Z"
      fill="#4D9557"
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
          <div className="flex lg:flex-row flex-col mx-auto  md:gap-2 gap-4 w-auto pt-[3rem] pb-[2rem]">
            {slice.items.map((item, index) => (
              <>
                <div
                  key={index}
                  className="border border-solid rounded-p-md bg-bg-beige border-mossy-green md:p-8 p-3 px-0 max-w-[16rem] mx-auto"
                >
                  <div className="text-center mx-auto md:p-0 p-10">
                    <div className="w-full">
                      <p className="font-regular leading-none  font-body tracking-wide md:text-[40px] text-[25px] pb-2">
                        {item.number}
                        {/* {SquigglyLineSVG} */}
                      </p>
                      <p className="font-semibold  font-body md:text-[25px] text-[25px]">
                        {item.step_name}
                      </p>
                      <p className="font-light  font-body md:text-[16px] text-[15px]">
                        {item.step_desc}
                      </p>
                    </div>
                  </div>
                </div>
                {/* {index !== slice.items.length - 1 && (
                  <div className="flex justify-center w-full items-center">
                    {Leaf}
                  </div>
                )} */}
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
