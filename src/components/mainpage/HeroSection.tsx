"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { animate, stagger, useInView, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslations } from 'next-intl';

const RoughNotationGroup = dynamic(() => import("react-rough-notation").then(mod => mod.RoughNotationGroup), { ssr: false });
const RoughNotation = dynamic(() => import("react-rough-notation").then(mod => mod.RoughNotation), {ssr: false});


const SVGDataURI = '/mi-go-hero.webp';
  
export default function HeroSection() {

  const t = useTranslations("HeroSection");
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1] || "hr";

  //Animacije
  const [showNotation, setShowNotation] = React.useState(false);
  const ref = useRef(null);
  const isInView =  useInView(ref);

  // Kada komponenta uđe u viewport, pokreće animaciju
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowNotation(true), 300); // Odloži za 300ms
      return () => clearTimeout(timer);
    }
  }, [isInView]);


  
  return (
    <div ref={ref} className="w-full mb-20">
      <div className="grid max-h-[50rem] md:max-h-[40rem] overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto  pt-10 md:pt-20 items-start">
        <div className="lg:col-span-2 py-10 md:py-10 px-4 md:px-8">
          <RoughNotationGroup show={showNotation}>
            <h2
              className="text-2xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-accent/70 text-center sm:text-left gap-4"
            >
              
              <RoughNotation
               type="highlight"
               animationDuration={2000}
               iterations={3}
               color="#f79cce"
               padding={3}
              >
              <span className="text-currentColor">{t('title1')}</span>
            </RoughNotation>
           <span className="ml-2">{t('title2')}</span>
          <RoughNotation
           type="underline"
           animationDuration={2000}
           iterations={10}
           color="#f79cce"
          >
            <span className="ml-2">{t('title3')}</span>
          </RoughNotation>
            </h2>
            <p className="text-neutral-900 text-sm md:text-lg max-w-2xl mt-4 md:mt-10 text-center sm:text-left">
            {t('paragraph1')}{" "}
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={3}
                color="#f79cce"
              >
                {t('paragraph2')}
              </RoughNotation>{" "}
              {t('paragraph3')}
            </p>
          </RoughNotationGroup>
          <Link 
          href={`/${currentLocale}/contact`}
          className="flex sm:flex-row flex-col gap-4 items-center mt-10 [perspective:800px]">
            <button className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-accent w-full sm:w-auto font-bold text-neutral-900 text-base hover:[transform:rotateX(10deg)] transition duration-200 origin-left hover:shadow-lg">
            {t('button')}
              <LuPhoneCall />
            </button>
          </Link>
        </div>
        <div className="flex justify-end overflow-hidden h-full w-full relative flex-shrink-0">
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export const Skeleton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    const sequence = [
      [".first", { opacity: [0, 1] }, { duration: 1, ease: "easeOut" }],
      [".second", { opacity: [0, 1] }, { duration: 1, ease: "easeOut" }],
      [
        ".images .image",
        {
          opacity: [0, 1],
          rotate: [0, Math.floor(Math.random() * 10), 0],
          scale: [1, 1.1, 1],
        },
        { duration: 1, ease: "easeOut", delay: stagger(0.4) },
      ],
    ];

    //@ts-expect-error: 'animate' function expects a specific sequence format which is dynamically generated
   if (isInView) animate(sequence);
  }, [isInView]);
  return (
    <div ref={ref} className="relative pt-20 w-[360px] h-[600px] m-auto">
      <div
        style={{
          backgroundImage: `url('${SVGDataURI}')`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 mx-auto w-full max-w-[360px] h-full lg:h-[600px] bg-contain lg:bg-cover dark:filter dark:invert"
      />
      <div className="px-16 mt-0 md:mt-10 flex flex-col gap-4 relative z-20">
      <div className="images grid grid-cols-2 gap-2">
          {[1, 2, 3].map((i, index) => (
            <motion.div
              key={`${isInView}-${index}`} // kombinacija isInView i index za resetovanje animacije
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 380, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 3, delay: 0.3 * index, ease: "easeOut" }}
            >
              <Image
                src={`/Maline-0${i}.svg`}
                alt="malina"
                height={20}
                width={20}
                priority
                className="h-20 opacity-0 rounded-lg w-20 object-cover image"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};