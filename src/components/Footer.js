import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import IgIcon from './IgIcon';
import { Bounded } from './Bounded';
import Image from 'next/image';

export function Footer({ settings, navigation }) {
  return (
    <Bounded className="h-auto bg-dark-beige pb-3 py-3">
      <div className="flex w-full px-2 mx-auto lg:flex-row justify-between items-center pt-1">
        <ul className="flex flex-col ">
          <PrismicNextLink href="/" className="pb-3">
            {/* <h2 className="font-display text-[2rem]">pansy</h2> */}
            <Image
              width={48}
              height={49}
              src={'/icons/p-logo.png'}
              className="w-[3rem]"
              alt="logo"
            />
          </PrismicNextLink>
          <p className="font-body font-light md:text-[12px] text-[11px]">
            {settings.data.city}
          </p>
          <p className="font-body font-light md:text-[12px] text-[11px]">
            {settings.data.phone_number}
          </p>
          <p className="font-body font-light md:text-[12px] text-[11px]">
            {settings.data.email}
          </p>
        </ul>
        {/* <ul className="flex flex-wrap flex-col items-center gap-4 pt-[2rem]">
          {navigation.data?.links.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.link}
              className="font-body font-light text-[14px]">
              <PrismicText field={item.label} />
            </PrismicNextLink>
          ))}
        </ul> */}
        <ul className="flex items-center font-body font-light flex-col">
          <div className="w-32 ">
            <a
              href="https://www.instagram.com/pansy.gardens/"
              target="_blank"
              alt="ig-logo"
            >
              <IgIcon />
            </a>
            <div className="">
              <p className="font-body font-light text-right md:text-[12px] text-[10px]">
                {settings.data.serving_city}
              </p>
            </div>
          </div>
        </ul>
      </div>
      <div className="flex items-center text-center flex-col px-4  justify-center pt-7 pb-2 font-body font-light text-[11px]">
        <div className=" flex flex-row gap-2">
          <h2>{settings.data.made_by} </h2>

          <a
            href="https://www.linkedin.com/in/odeliafink/"
            target="_blank"
            className="font-body font-light text-[11px] underline"
          >
            Odelia Finkelstein
          </a>
        </div>
        <div>
          <h6>© 2025 pansy</h6>
        </div>
      </div>
    </Bounded>
  );
}
