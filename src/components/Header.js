'use client';
import { useState, useEffect } from 'react';
import * as prismic from '@prismicio/client';
import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import Image from 'next/image';

const localeLabels = {
  'en-us': 'EN',
  'fr-ca': 'FR',
};

export function Header({ locales = [], navigation }) {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>
      <div className="bg-medium-beige flex md:text-left text-center justify-center font-light py-2 md:flex-row flex-col">
        <p className="font-body mr-1 md:text-[16px] text-[8px] items-center">
          {navigation?.data.welcome_banner[0].header}
        </p>
        <PrismicNextLink
          field={navigation?.data.welcome_banner[0].button_link}
          className=" decoration-1 font-semibold md:text-[16px] text-[10px]"
        >
          <p className="hover:text-sage-green hover:ease-in-out duration-500">
            {navigation?.data.welcome_banner[0].button_label}
          </p>
        </PrismicNextLink>
      </div>
      <section
        as="header"
        className={`sticky top-0 px-12 py-3 bg-bg-beige z-999 ${
          !top && `bg-white shadow-lg`
        }`}
      >
        <div className="flex flex-wrap flex-row items-center md:justify-between justify-center gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            field={navigation?.data.home_link}
            className="lg:flex-1"
          >
            <Image
              width={80}
              height={82}
              src={'/icons/logo.png'}
              className="w-[5rem]"
              alt=""
            />
          </PrismicNextLink>
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-3 md:gap-x-10 justify-center md:text-[16px] text-[13px]">
            <ul className="flex flex-wrap gap-6 md:gap-10">
              {navigation.data?.links.map((item) => (
                <li
                  key={prismic.asText(item.label)}
                  className="font-semibold tracking-tight text-slate-800"
                >
                  <PrismicNextLink
                    field={item.link}
                    className="font-body font-light hover:text-sage-green"
                  >
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <ul className="flex flex-wrap gap-3">
                {locales.map((locale) => (
                  <li
                    key={locale.lang}
                    className="first:font-bold first:text-mossy-green text-lg font-light"
                  >
                    <PrismicNextLink
                      href={locale.url}
                      locale={locale.lang}
                      aria-label={`Change language to ${locale.lang_name}`}
                    >
                      {localeLabels[locale.lang] || locale.lang}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
