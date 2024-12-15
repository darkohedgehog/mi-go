"use client";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { animate, stagger, useInView, motion } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SVGDataURI = '/mi-go-textured.png';
  
export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="w-full mb-20">
      <div className="grid max-h-[50rem] md:max-h-[40rem] overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto  pt-10 md:pt-20  items-start">
        <div className="lg:col-span-2 py-10 md:py-10 px-4 md:px-8">
          <RoughNotationGroup show={isInView}>
            <h2
              className={cn(
                "text-2xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 text-center sm:text-left",
                manrope.className
              )}
            >
              Your favourite{" "}
              <RoughNotation
                type="highlight"
                animationDuration={2000}
                iterations={3}
                color="#f79cce"
                multiline
              >
                <span className="text-currentColor">refreshing drink</span>
              </RoughNotation>{" "}
              is now available for{" "}
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={10}
                color="#f79cce"
              >
                you
              </RoughNotation>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg max-w-2xl mt-4 md:mt-10 text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad similique aperiam dolores veritatis a quam eveniet asperiores reiciendis! Molestias eum, consequuntur nesciunt laboriosam ut dolores{" "}
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={3}
                color="#f79cce"
              >
                20% discount
              </RoughNotation>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </RoughNotationGroup>
          <div className="flex sm:flex-row flex-col gap-4 items-center mt-10 [perspective:800px]">
            <button className="px-4 py-2 rounded-lg bg-accent w-full sm:w-auto font-bold text-black text-base hover:[transform:rotateX(10deg)] transition duration-200 origin-left hover:shadow-lg">
              Contact
            </button>
            <button className="text-black dark:text-white hover:border-secondary border border-transparent px-4 py-2 rounded-lg text-base transition duration-200">
              Visit Shop
            </button>
          </div>
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
              viewport={{ once: false }}
              transition={{ duration: 3, delay: 0.3 * index, ease: "easeOut" }}
            >
              <Image
                src={`images/Maline-0${i}.svg`}
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

export const MobileMockup = ({ className }: { className?: string }) => {
  return (
    <svg
      width="421"
      height="852"
      viewBox="0 0 421 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "text-neutral-900 dark:text-neutral-50 h-full w-full  mx-auto flex-shrink-0 absolute inset-0 object-cover object-top",
        className
      )}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73 0H348C386.66 0 418 31.3401 418 70V782C418 820.66 386.66 852 348 852H73C34.3401 852 3 820.66 3 782V70C3 31.3401 34.3401 0 73 0ZM348 6H73C37.6538 6 9 34.6538 9 70V782C9 817.346 37.6538 846 73 846H348C383.346 846 412 817.346 412 782V70C412 34.6538 383.346 6 348 6Z"
        fill="currentColor"
      />
      <rect
        x="318"
        width="10"
        height="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="93"
        y="846"
        width="10"
        height="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="3"
        y="90"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="412"
        y="90"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="3"
        y="752"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="412"
        y="752"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M417.971 266H418.981C420.096 266 421 266.895 421 268V364C421 365.105 420.096 366 418.981 366H417.971V266Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 302C0 300.895 0.90402 300 2.01918 300H3.02878V363H2.01918C0.90402 363 0 362.105 0 361V302Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 223C0 221.895 0.90402 221 2.01918 221H3.02878V284H2.01918C0.90402 284 0 283.105 0 282V223Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 162C0 160.895 0.90402 160 2.01918 160H3.02878V193H2.01918C0.90402 193 0 192.105 0 191V162Z"
        fill="currentColor"
      />
      <rect
        x="150"
        y="30"
        width="120"
        height="35"
        rx="17.5"
        fill="currentColor"
      />
      <rect
        x="244"
        y="41"
        width="13"
        height="13"
        rx="6.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
};
