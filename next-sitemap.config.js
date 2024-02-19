/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lepansy.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/slice-simulator", "/icon.svg"],
  changefreq: "monthly",
}