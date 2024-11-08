import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LangSwitch from '@/components/header/LangSwitch';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Nav from '@/components/Nav';
import Logo from '@/components/logo/Logo';


export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (await props.params).locale;

  if (!routing.locales.includes(locale as any)) {
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
          <LangSwitch />
          <Logo />
          <Nav  />
          {props.children}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
