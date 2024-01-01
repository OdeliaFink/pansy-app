'use client';
import { useState, useEffect } from 'react';
import * as prismic from '@prismicio/client';
import { PrismicText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

import { Bounded } from './Bounded';

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
      <div className="bg-medium-beige flex items-center justify-center font-light py-2">
        <p className="font-body mr-1">
          {navigation?.data.welcome_banner[0].header}
        </p>
        <PrismicNextLink
          field={navigation?.data.welcome_banner[0].button_link}
          className=" decoration-1 font-semibold"
        >
          <p className="hover:text-sage-green hover:ease-in-out duration-500">
            {navigation?.data.welcome_banner[0].button_label}
          </p>
        </PrismicNextLink>
      </div>
      <Bounded
        as="header"
        yPadding="sm"
        className={`sticky top-0 bg-bg-beige z-999 ${
          !top && `bg-white shadow-lg`
        }`}
      >
        <div className="flex flex-wrap items-center md:justify-between justify-center gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink field={navigation?.data.home_link}>
            <h2 className="font-display text-[3rem]">pansy</h2>
          </PrismicNextLink>
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-3 md:gap-x-10">
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
      </Bounded>
    </>
  );
}
