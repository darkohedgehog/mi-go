import React from 'react';
import siteMetadata from '@/app/utils/siteMetaData';

export async function generateMetadata() {
  const pageTitle = "O nama";
  const pageDescription = "Upoznajmo se";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/about`,
      siteName: siteMetadata.title,
      images: [`${siteMetadata.siteUrl}/mi-go-malina.webp`],
      locale: "hr",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${siteMetadata.siteUrl}/mi-go-malina.webp`], 
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/about`,
      languages: {
        'hr': `${siteMetadata.siteUrl}/hr/about`,
        'en': `${siteMetadata.siteUrl}/en/about`,
      },
    },    
  };
}

const AboutPage = () => {
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage;