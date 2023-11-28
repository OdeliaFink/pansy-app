import { Header } from './Header';
import { Footer } from './Footer';
import CookieBanner from './CookieBanner';

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
      <CookieBanner />
      <Footer settings={settings} navigation={navigation} />
    </div>
  );
}
