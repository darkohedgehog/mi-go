
  const siteMetadata = {
    title: 'Mi-Go || Kombucha',
    author: 'Darko Živić',
    headerTitle: 'Mi-Go Kombucha',
    description: 'Proizvodnja osvježavajućeg pića od kombuche',
    language: 'hr',
    theme: 'system', // system, dark or light
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    siteLogo: '/Logo-06.jpg',
    socialBanner: '/Mi-Go_Malina_textured.png', // add social banner in the public folder
    email: 'migo.kombucha@gmail.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
    locale: 'hr',
    keywords: [
      'Mi-Go',
      'kombucha',
      'probiotik',
      'varenje',
      'piće',
      'pice',
      'osvježavajuće',
      'pića',
      'hrvatska',
      'vukovar',
      'vukovarsko-srijemska',
      'regija',
    ], // Additional SEO keywords
    robots: 'index, follow', // SEO - for search engine robots
    openGraph: {
      title: 'Mi-Go || Kombucha',
      description:
        'Proizvodnja osvježavajućeg pića od kombuche',
      url: process.env.SITE_URL || 'http://localhost:3000',
      type: 'website',
      images: [
        {
          url: '/Mi-Go_Malina_textured.png', // Social media banner
          alt: 'Mi-Go Kombucha',
        },
      ],
    },
  };
  
  module.exports = siteMetadata;
  