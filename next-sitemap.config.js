// if (process.env.environment !== 'production') {
//   policy.disallow = '/';
// }

module.exports = {
  siteUrl: 'https://www.lepansy.com/en-us/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalSitemaps: [
    `${siteUrl}/sitemap.xml`,
    `${siteUrl}/server-sitemap.xml`,
  ],
  outDir: './out',
};
