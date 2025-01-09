import React from 'react';
import { useTranslations } from "next-intl";

const AboutUs = () => {
    const t = useTranslations("AboutUs");
  return (
    <div className='my-14 w-full'>
        <h1 className="flex items-center justify-center mt-9 bg-gradient-to-b from-accent to-secondary bg-clip-text text-left font-bold text-transparent text-4xl lg:text-7xl">
            {t('title')}
        </h1>
        <div className='flex items-center justify-center flex-col mx-auto lg:mx-16 px-10 mt-10'>
        <p className="mt-10 text-lg text-neutral-900">
        {t('paragraph1')}
        </p>
        <p className="mt-10 text-lg text-neutral-900">
        {t('paragraph2')}
        </p>
        <p className="mt-10 text-lg text-neutral-900">
        {t('paragraph3')}
        </p>
        <p className="mt-10 text-lg text-neutral-900">
        {t('paragraph4')}
        </p>
        </div>
    </div>
  )
}

export default AboutUs;