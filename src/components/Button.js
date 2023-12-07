import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import clsx from 'clsx';

export default function Button({ className, ...restProps }) {
  return (
    <>
      <PrismicNextLink
        className={clsx(
          'display-block w-fit border-solid px-8 py-[.5rem] rounded-p-sm text-bg-beige font-body border-dark-deen bg-mossy-green hover:bg-sage-green transition-color duration-200 ease-in-out  md:mb-0 ',
          className
        )}
        {...restProps}
      />
    </>
  );
}
