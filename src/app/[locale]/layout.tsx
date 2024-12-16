import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Nav from '@/components/Nav';
import dynamic from 'next/dynamic';
import HeaderTop from '@/components/header/HeaderTop';

const Footer = dynamic(() => import('@/components/Footer'));

type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { params } = props;
  const locale = (await params).locale as Locale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
    <body>
      <NextIntlClientProvider messages={messages}>
         {/* BackgroundGradientAnimation kao pozadina */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <BackgroundGradientAnimation /> 
      </div>
      
      {/* Sadržaj aplikacije */}
      <div className="relative z-10">
        <HeaderTop />
        <Nav  />
        {props.children}
        <Footer />
      </div>
      </NextIntlClientProvider>
    </body>
  </html>
  );
}
