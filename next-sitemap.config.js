let policy = {
  userAgent: '*',
};

// if (process.env.environment !== 'production') {
//   policy.disallow = '/';
// }

module.exports = {
  siteUrl: 'https://www.lepansy.com/en-us/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  outDir: './out',
};
