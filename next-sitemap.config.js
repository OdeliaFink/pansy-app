/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lepansy.com',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: true,
}