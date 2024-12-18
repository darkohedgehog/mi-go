const siteMetadata = require("./src/app/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  sitemapStylesheet: [
    {
      type: "text/xsl",
      styleFile: "/sitemap.xsl",
    },
  ],
  changefreq: 'daily',
  priority: 0.7,
  alternateRefs: [
    {
      href: `${siteMetadata.siteUrl}/hr`,
      hreflang: 'hr',
    },
    {
      href: `${siteMetadata.siteUrl}/en`,
      hreflang: 'en',
    },
  ],
  additionalPaths: async (config) => {
    return [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternates: [
          {
            hreflang: 'hr',
            href: `${siteMetadata.siteUrl}/hr`,
          },
          {
            hreflang: 'en',
            href: `${siteMetadata.siteUrl}/en`,
          },
        ],
      },
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternates: [
          {
            hreflang: 'hr',
            href: `${siteMetadata.siteUrl}/hr/about`,
          },
          {
            hreflang: 'en',
            href: `${siteMetadata.siteUrl}/en/about`,
          },
        ],
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternates: [
          {
            hreflang: 'hr',
            href: `${siteMetadata.siteUrl}/hr/contact`,
          },
          {
            hreflang: 'en',
            href: `${siteMetadata.siteUrl}/en/contact`,
          },
        ],
      },
      {
        loc: '/privacy',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternates: [
          {
            hreflang: 'hr',
            href: `${siteMetadata.siteUrl}/hr/privacy`,
          },
          {
            hreflang: 'en',
            href: `${siteMetadata.siteUrl}/en/privacy`,
          },
        ],
      },
      {
        loc: '/terms',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternates: [
          {
            hreflang: 'hr',
            href: `${siteMetadata.siteUrl}/hr/terms`,
          },
          {
            hreflang: 'en',
            href: `${siteMetadata.siteUrl}/en/terms`,
          },
        ],
      },
      {
        loc: '/complaint',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternates: [
          {
            hreflang: 'hr',
            href: `${siteMetadata.siteUrl}/hr/complaint`,
          },
          {
            hreflang: 'en',
            href: `${siteMetadata.siteUrl}/en/complaint`,
          },
        ],
      },
    ];
  },
  transform: async (_config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};