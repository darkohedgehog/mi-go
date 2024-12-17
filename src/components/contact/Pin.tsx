import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const Pin = ({ className }: { className?: string }) => {
  const t = useTranslations("Pin");
    return (
      <motion.div
        style={{
          transform: "translateZ(1px)",
        }}
        className={cn(
          "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
          className,
        )}
      >
        <div className="h-full w-full">
          <div className="absolute z-20 rounded-lg bg-accent px-2 py-1 text-xs font-normal text-secondary top-0 left-[20%]"
            >
            {t('title')}
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500"></span>
          </div>
  
          <div
            style={{
              perspective: "800px",
              transform: "rotateX(70deg) translateZ(0px)",
              left:"29%",
              top:"30%",
            }}
            className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
          >
            <>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
  
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 0,
                }}
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
              ></motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
  
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2,
                }}
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
              ></motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
  
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 4,
                }}
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
              ></motion.div>
            </>
          </div>
  
          <>
            <motion.div className="absolute bottom-2/3 right-[276px] h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-green-500 blur-[2px]" />
            <motion.div className="absolute bottom-2/3 right-[276px] h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-green-700" />
            <motion.div className="absolute bottom-2/3 right-[276px] z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-green-700 blur-[3px]" />
            <motion.div className="absolute bottom-2/3 right-[276px] z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-green-300" />
          </>
        </div>
      </motion.div>
    );
  };

  export default Pin;