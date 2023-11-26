import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import clsx from 'clsx';

export default function Button({ className, ...restProps }) {
  return (
    <>
      <PrismicNextLink
        className={clsx(
          'display-block w-fit border-solid px-7 py-[.5rem] rounded-sm border border-1 font-body border-dark-deen bg-transparent hover:bg-lighter-green transition-color duration-300 ease-in-out mb-8 md:mb-0 ',
          className
        )}
        {...restProps}
      />
    </>
  );
}
