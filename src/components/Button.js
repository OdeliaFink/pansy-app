import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import clsx from 'clsx';

export default function Button({ className, ...restProps }) {
  return (
    <>
      <PrismicNextLink
        className={clsx(
          'display-block w-fit border-solid px-7 py-[.5rem] rounded-sm text-white font-body border-dark-deen bg-dark-green hover:bg-lighter-green transition-color duration-200 ease-in-out  mb-8 md:mb-0 ',
          className
        )}
        {...restProps}
      />
    </>
  );
}
