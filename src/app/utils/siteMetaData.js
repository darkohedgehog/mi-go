
  const siteMetadata = {
    title: 'Mi-Go || Kombucha',
    author: 'Darko Živić',
    headerTitle: 'Mi-Go Kombucha',
    description: 'Osvježavajuć napitak od fermentiranog zelenog čaja s bogatom probiotičkom kulturom i dodatkom sočne maline',
    language: 'hr',
    theme: 'system', // system, dark or light
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    siteLogo: '/Logo-06.jpg',
    socialBanner: '/mi-go-malina.webp', // add social banner in the public folder
    email: 'migo.kombucha@gmail.com',
    facebook: 'https://web.facebook.com/profile.php?id=61571530899698&_rdc=1&_rdr',
    instagram: 'https://www.instagram.com/kombucha.migo/',
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
      'probava',
      'zdravlje',
      'malina',
      'fermentirano'
    ], // Additional SEO keywords
    robots: 'index, follow', // SEO - for search engine robots
    openGraph: {
      title: 'Mi-Go || Kombucha',
      description:
        'Osvježavajuć napitak od fermentiranog zelenog čaja s bogatom probiotičkom kulturom i dodatkom sočne maline',
      url: process.env.SITE_URL || 'http://localhost:3000',
      type: 'website',
      images: [
        {
          url: '/mi-go-malina.webp', // Social media banner
          alt: 'Mi-Go Kombucha',
        },
      ],
    },
  };
  
  module.exports = siteMetadata;
  