import React from 'react'
import { useTranslations } from 'next-intl';

const CookiesStatement = () => {
  const t = useTranslations('CookiesStatement');
  return (
    <div className='p-4 my-16 text-neutral-900 rounded-lg shadow-xl shadow-accentGreen mx-8'>
     <h2 className='flex items-center justify-center text-accent font-bold uppercase text-2xl my-8'>
        {t('title1')}
    </h2>
    <p className='mt-2'>
    {t('paragraph1')}
    </p>
    <p className='mt-2'>
    {t('paragraph2')}
    </p>
    <p className='mt-2'>
    {t('paragraph3')}
    </p>
    <p className='mt-2'>
    {t('paragraph4')}
    </p>
    <p className='mt-2'>
    {t('paragraph5')}
    </p>
    <p className='mt-2'>
    {t('paragraph6')}
    </p>
    <p className='mt-2 text-accent'>
    {t('paragraph7')}
    </p>
    </div>
  )
}

export default CookiesStatement;