import React from 'react';
import { IconMailFilled } from "@tabler/icons-react";
import Image from "next/image";
import Pin from "./Pin";
import { useTranslations } from "next-intl";

const ContactInfo = () => {

  const t = useTranslations("ContactInfo");

  return (
    <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
    <div className="flex items-start justify-start">
      <div className="flex items-center justify-center overflow-hidden">
        <IconMailFilled className="h-8 w-8 text-accent" />
      </div>
    </div>
    <h2 className="mt-9 bg-gradient-to-b from-accent to-secondary bg-clip-text text-left font-bold text-transparent text-4xl lg:text-7xl">
      {t('contactus')}
    </h2>
    <p className="mt-8 max-w-lg text-center text-lg text-accent md:text-left">
     {t('paragraph')}
    </p>

    <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
      <p className="text-[12px] text-neutral-900">
      migo-kombucha@gmail.com
      </p>

      <div className="h-1 w-1 rounded-full bg-accent" />
      <p className="text-[12px] text-neutral-900">
      +385 98 942 9095
      </p>
      <div className="h-1 w-1 rounded-full bg-accent" />

      <p className="text-[12px] text-neutral-900">
        Gospodarska zona Vukovar 15, Vukovar
      </p>
    </div>
    <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
      <Pin className="right-1 top-0" />

      <Image
        src="/world.svg"
        width={500}
        height={500}
        alt="world map"
        priority
        className="[transform:rotateX(45deg)_translateZ(0px)] w-[400px] h-full"
      />
    </div>
  </div>
  )
}

export default ContactInfo;