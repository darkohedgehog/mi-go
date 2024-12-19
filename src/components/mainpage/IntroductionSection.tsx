"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { GiBottleVapors, GiHealthPotion } from "react-icons/gi";
import { GrHistory } from "react-icons/gr";
import { useTranslations } from "next-intl";
import DropDots from "../ui/DropDots";

const IntroductionSection = () => {
  const t = useTranslations("IntroductionSection");
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative text-gray-900 overflow-hidden"
    >
      {/* Drop animacija */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <DropDots parentRef={sectionRef} /> {/* Prosleđivanje parentRef */}
      </div>
      <h1 className="flex items-center justify-center text-3xl lg:text-5xl text-accent font-bold">
        {t("header")}
      </h1>
      {/* Glavni sadržaj */}
      <div className="container relative z-20 px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden flex justify-center items-center">
          <Image
            src="/mi-go-malina.webp"
            width={700}
            height={700}
            alt="feature"
            className="object-cover object-center rounded-full aspect-square shadow-lg shadow-accentGreen"
            priority={false}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
              <GiHealthPotion className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="text-accent text-lg font-bold mb-3">
                {t("title1")}
              </h2>
              <p className="leading-relaxed text-base">{t("paragraph1")}</p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
              <GiBottleVapors className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="text-accent text-lg font-bold mb-3">
                {t("title2")}
              </h2>
              <p className="leading-relaxed text-base">{t("paragraph2")}</p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
              <GrHistory className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="text-accent text-lg font-bold mb-3">
                {t("title3")}
              </h2>
              <p className="leading-relaxed text-base">{t("paragraph3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
