// let policy = {
//   userAgent: '*',
// };

// // if (process.env.environment !== 'production') {
// //   policy.disallow = '/';
// // }

// module.exports = {
//   siteUrl: 'https://www.lepansy.com/en-us/',
//   generateRobotsTxt: true,
//   robotsTxtOptions: {
//     policies: [policy],
//   },
//   outDir: './out',
// };

const siteUrl = 'https://www.lepansy.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
