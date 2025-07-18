import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ContactMap = () => {
    const t = useTranslations('ContactMap');

  return (
    <section className="container mb-16 mx-auto lg:mx-8">
      <div className="w-full mx-auto lg:mx-8">
        <div className="mx-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-accentGreen">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.9339799030445!2d18.960259076251887!3d45.37032727107246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8e1642fe1ed3%3A0xee6bee311b34e351!2sGospodarska%20zona%20Vukovar%2015%2C%2032000%2C%20Vukovar!5e0!3m2!1shr!2shr!4v1734708520097!5m2!1shr!2shr" 
            width="650" 
            height="500" 
            allowFullScreen={true}
            loading="lazy"
            className='object-contain w-full'
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-2xl font-semibold text-accent">
                    {t('paragraph')}:
                   </h3>
                  <p className="mt-1 text-xl text-neutral-900">
                   {t('company')}
                  </p>
                  <p className="mt-1 text-neutral-900">
                   {t('address1')}
                  </p>
                  <p className="mt-1 text-neutral-900">
                  {t('address2')}
                  </p>
                  <p className="mt-1 text-neutral-900">
                  OIB: <span className='text-neutral-900'>69627697764</span>
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-2xl font-semibold text-accent">
                  {t('worktime')}:
                  </h3>
                  <p className="mt-1 text-neutral-900">
                  {t('time')}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-2xl font-semibold text-accent">
                  {t('contact')}:
                    </h3>
                  <a 
                   href={'mailto:migo-kombucha@gmail.com'} target='blank'
                  className="mt-1 text-neutral-900">
                    {t('email')}: migo.kombucha@gmail.com
                  </a>
                  <p className="mt-1 text-neutral-900">
                  {t('phone')}: +385 98 942 9095
                    </p>
                    <p className="mt-1 text-neutral-900">
                  {t('phone')}: +385 99 696 0906
                    </p>
                </div>
                <span className="mt-6 inline-flex items-center mx-4">
                  <a 
                  className="mx-0" 
                  href={'https://web.facebook.com/profile.php?id=61571530899698&_rdc=1&_rdr'} target='blank'>
                  <Image
                   src='/facebook.svg' 
                   alt='facebook social'
                   width={8}
                   height={8}
                   priority
                   className='h-8 w-8' />
                  </a>
                  <a 
                  className="mx-2" 
                  href={'https://web.facebook.com/messages/t/465544033318979?locale=hr_HR'} target='blank'>
                  <Image
                   src='/messenger.svg'
                   alt='messenger logo' 
                   width={8}
                   height={8}
                   priority
                   className='h-8 w-8' />
                  </a>
                  <a 
                  className="mx-2" 
                  href={'https://www.instagram.com/kombucha.migo/'} target='blank'>
                  <Image
                   src='/instagram.svg' 
                   alt='instagram social'
                   width={8}
                   height={8}
                   priority
                   className='h-8 w-8' />
                  </a>
                  <a
                  className="mx-2" 
                  href={'mailto:migo.kombucha@gmail.com'} rel="noopener noreferrer" target='blank'>
                  <Image
                   src='/email.svg'
                   alt='email'
                   width={8}
                   height={8}
                   priority
                   className='h-8 w-8' />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap;