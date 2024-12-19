import ContactForm from '@/components/contact/ContactForm'
import React from 'react'
import siteMetadata from '@/app/utils/siteMetaData';

export async function generateMetadata() {
  const pageTitle = "Kontakt";
  const pageDescription = "Ostanimo u kontaktu";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/contact`,
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
      canonical: `${siteMetadata.siteUrl}/contact`,
      languages: {
        'hr': `${siteMetadata.siteUrl}/hr/contact`,
        'en': `${siteMetadata.siteUrl}/en/contact`,
      },
    },    
  };
}

const ContactPage = () => {
  return (
    <>
      <ContactForm />
    </>
  )
}

export default ContactPage