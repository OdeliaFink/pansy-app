// if (process.env.environment !== 'production') {
//   policy.disallow = '/';
// }

let url = 'https://www.lepansy.com/';

module.exports = {
  siteUrl: `${url}`,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalSitemaps: [`${url}/sitemap.xml`, `${url}/server-sitemap.xml`],
  outDir: './out',
};
