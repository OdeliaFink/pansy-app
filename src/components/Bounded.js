import clsx from 'clsx';

export function Bounded({
  as: Comp = 'div',
  yPadding = 'base',
  collapsible = true,
  className,
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        'px-6',
        yPadding === undefined && 'py-20 md:py-32',
        yPadding === 'sm' && 'py-4 md:py-6',
        yPadding === 'base' && 'py-20 md:py-32',
        className
      )}
    >
      <div className="mx-auto w-full 2xl:max-w-[160rem] max-w-6xl">
        {children}
      </div>
    </Comp>
  );
}
