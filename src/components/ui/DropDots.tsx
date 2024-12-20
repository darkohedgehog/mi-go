"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, animate, stagger, useInView } from "framer-motion";

interface DropDotsProps {
  parentRef: React.RefObject<HTMLDivElement | null>;
}

const DropDots: React.FC<DropDotsProps> = ({ parentRef }) => {
  const localRef = useRef(null); // Lokalni ref za animaciju
  const isInView = useInView(localRef, { once: false }); // Animacija svaki put kada uđe u viewport

  useEffect(() => {
    if (isInView && parentRef?.current) {
      const sectionHeight = parentRef.current.clientHeight; // Dinamička visina roditelja
      const endPosition = window.innerWidth <= 768 ? sectionHeight : 400; // Mobilni ekrani: spusti do kraja sekcije

      const sequence = [
        [
          ".image",
          { opacity: [0, 1], y: [-100, endPosition] },
          { duration: 12, ease: "easeOut", delay: stagger(0.9) },
        ],
      ];

      //@ts-expect-error: 'animate' function expects a specific sequence format which is dynamically generated
      animate(sequence);
    }
  }, [isInView, parentRef]);

  return (
    <div
      ref={localRef} // Ref za detekciju ulaska u viewport
      className="absolute inset-0 grid grid-cols-4 gap-4 pointer-events-none"
    >
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="image flex justify-center items-center"
          style={{ opacity: 0, transform: "translateY(-100px)" }}
        >
          <Image
            src={`/images/Objekti_PinkDots${i}.png`}
            alt={`Pink Dot ${i}`}
            width={100}
            height={100}
            priority
            className="object-cover w-24 h-24"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DropDots;
