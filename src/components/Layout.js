'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import CookieBanner from './CookieBanner';
import { motion } from 'framer-motion';

export function Layout({ locales, navigation, settings, children, cookie }) {
  return (
    <div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'intertia',
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="text-slate-800">
          <Header
            locales={locales}
            navigation={navigation}
            settings={settings}
          />
          <main>{children}</main>
          {/* <CookieBanner cookie={cookie} /> */}
          <Footer settings={settings} navigation={navigation} />
        </div>
      </motion.div>
    </div>
  );
}
