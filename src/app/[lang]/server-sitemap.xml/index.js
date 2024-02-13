import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import customdomain from '../../components/custom_domain';
export const getServerSideProps = async (ctx) => {
  const response = await fetch(`${customdomain}/crawl_blog_list/`);
  const data = await response.json();

  const fields = data.map(() => ({
    loc: `https://lepansy.com/`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
