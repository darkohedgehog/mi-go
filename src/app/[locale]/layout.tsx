import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Nav from '@/components/Nav';
import dynamic from 'next/dynamic';
import HeaderTop from '@/components/header/HeaderTop';
import siteMetadata from '../utils/siteMetaData';

const CookiesToast = dynamic(() => import('@/components/cookies/CookiesToast'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata = {
  metadataBase: siteMetadata.siteUrl,
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    locale: siteMetadata.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
    site: '@Zivic_Darko',
  },
};

type Locale = (typeof routing.locales)[number];

// 🔧 ključno: koristimo LayoutProps<'/[locale]'>
export default async function LocaleLayout(
  props: LayoutProps<'/[locale]'>
) {
  const { children, params } = props;

  // ⬇️ params je sada Promise, pa ga normalno await-uješ
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // ako ti next-intl traži locale, možeš i ovako:
  // const messages = await getMessages({ locale });
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* U Next 15 se generalno ne preporučuje ručni <head>, ali ako ti treba verifikacija,
          može ostati – samo znaj da metadata već radi dosta ovoga. */}
      <head>
        <meta
          name="google-site-verification"
          content="rRyNFt8Uy6UwLfBWBSZ4cYVH5nEDjDJ-U5qki6q4JAE"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description"
          content="Osvježavajuć napitak od fermentiranog zelenog čaja s bogatom probiotičkom kulturom i dodatkom sočne maline"
        />
        <title>Mi-Go || Kombucha</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* BackgroundGradientAnimation kao pozadina */}
          <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <BackgroundGradientAnimation />
          </div>

          {/* Sadržaj aplikacije */}
          <div className="relative z-10">
            <HeaderTop />
            <Nav />
            {children}
            <CookiesToast />
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}