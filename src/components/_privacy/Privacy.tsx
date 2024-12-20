import React from 'react';
import { useTranslations } from 'next-intl';

const Privacy = () => {
    const t = useTranslations('Privacy');
  return (
    <div className='p-4 my-16 text-secondary bg-neutral-200 rounded-lg shadow-xl shadow-accentGreen mx-8'>
    <h2 className='flex items-center justify-center text-accent font-bold uppercase text-2xl my-8'>
       {t('title1')}
    </h2>
     <p className='mt-4'>
     {t('paragraph1')}
     </p>
     <p className='mt-2'>
     {t('paragraph2')}
     </p>
     <h3 className='text-accent mt-4 font-semibold uppercase text-center'>
     {t('title2')}
     </h3>
     <h3 className='text-accent my-4 font-semibold uppercase text-center'>
     {t('title3')}
     </h3>
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
     <p className='mt-2'>
     {t('paragraph7')}
     </p>
     <p className='mt-2'>
     {t('paragraph8')}
     </p>
     <p className='mt-2'>
     {t('paragraph9')}
     </p>
     <p className='mt-2'>
     {t('paragraph10')}
     </p>
     <p className='mt-2'>
     {t('paragraph11')}
     </p>
     <p className='mt-2'>
     {t('paragraph12')}
     </p>
     <p className='mt-2'>
     {t('paragraph13')}
     </p>
     <p className='mt-2'>
     {t('paragraph14')}
     </p>
     <p className='mt-2'>
     {t('paragraph15')}
     </p>
     <p className='mt-2'>
     {t('paragraph16')}
     </p>
     <p className='mt-2'>
     {t('paragraph17')}
     </p>
     <p className='mt-2'>
     {t('paragraph18')}
     </p>
    </div>
  )
}

export default Privacy;