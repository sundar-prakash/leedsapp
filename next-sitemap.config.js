/** @type {import('next-sitemap').IConfig} */
const config  = {
    siteUrl: "https://leedsapp.com",
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
  

    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    
    },
  }
export default config