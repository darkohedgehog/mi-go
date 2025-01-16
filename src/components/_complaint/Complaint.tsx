import Link from 'next/link';
import React from 'react';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { useTranslations } from 'next-intl';

const Complaint = () => {
    const t = useTranslations('Complaint');
  return (
    <div className='mx-6 my-20 text-accent rounded-lg shadow-xl shadow-accentGreen'>
     <h2 className='flex items-center justify-center text-accent font-bold uppercase text-2xl my-16 p-4'>
        {t('title')}
    </h2>
    <p className='mt-4 text-xl font-semibold flex items-center justify-start mx-4'>
        {t('paragraph1')}
    </p>
    <p className='my-6 text-neutral-900 text-xl mx-4'> 
        {t('paragraph2')}
    </p>
    <ul className='list-disc list-outside text-neutral-900 ml-6'>
      <li>{t('li1')}</li>
      <li>{t('li2')}</li>
      <li>{t('li3')}</li>
      <li>{t('li4')}</li>
      <li>{t('li5')}</li>
    </ul>
    <p className='my-6 flex items-center justify-center text-2xl text-center font-semibold'>
        {t('paragraph3')}
    </p>
    <div className='flex items-center justify-center'>
    <Link
    href={'mailto:migo-kombucha@gmail.com'} target='blank'
    className="flex items-center gap-5">
      <FiMail className="text-accent w-8 h-8" />
      <div>
        <p className='text-xl text-neutral-900'>migo-kombucha@gmail.com</p>
      </div>
    </Link>
    </div>
    <p className='my-10 flex items-center justify-center text-2xl text-center font-semibold'>
       {t('paragraph4')}
    </p>
    <div className='flex items-center justify-center pb-6'>
    <div className="flex items-center gap-5">
      <FiPhoneCall className="text-accent w-8 h-8" />
      <div>
        <p className='text-xl text-neutral-900'>+385 98 942-9095</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Complaint;