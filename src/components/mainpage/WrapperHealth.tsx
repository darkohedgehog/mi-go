import Image from 'next/image'
import React from 'react'
import { GiCircleSparks } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";
import OrbitingCirclesSection from './OrbitingCirclesSection';
import { useTranslations } from 'next-intl';

const WrapperHealth = () => {
  const t = useTranslations("WrapperHealth");
  return (
    <>
    <h1 className='text-3xl lg:text-5xl flex items-center justify-center text-accent font-bold'>
    {t('header')}
        </h1>
    <section className="text-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-row-reverse">
    {/* START OF ORBITING CIRCLES SECTION */}
     <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden flex justify-center items-center">
    <OrbitingCirclesSection />
     </div>
     {/* END OF ORBITING CIRCLES SECTION */}
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <Image
          src="/images/Za_zdravu_probavu.svg"
          alt="Za zdravu probavu"
          height={8}
          width={8}
          priority
          className="w-8 h-8" />
        </div>
        <div className="flex-grow">
          <h2 className="text-accent text-lg font-bold mb-3">{t('title1')}</h2>
          <p className="leading-relaxed text-base">
          {t('paragraph1')}
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <GiCircleSparks className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-accent text-lg font-bold mb-3">{t('title2')}</h2>
          <p className="leading-relaxed text-base">
          {t('paragraph2')}
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <Image
          src="/images/Vegan.svg"
          alt="Vegan"
          height={8}
          width={8}
          priority
          className="w-8 h-8" />
        </div>
        <div className="flex-grow">
          <h2 className="text-accent text-lg font-bold mb-3">{t('title3')}</h2>
          <p className="leading-relaxed text-base">
          {t('paragraph3')}
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <IoLeafOutline className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-accent text-lg font-bold mb-3">{t('title4')}</h2>
          <p className="leading-relaxed text-base">
          {t('paragraph4')}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default WrapperHealth