import OrbitingCircles from "@/components/ui/orbiting-circles";
import Image from "next/image";


export default function OrbitingCirclesSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden z-30">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#01793b] to-[#f79cce] bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-[#01793b] dark:to-[#f79cce]">
        Mi-Go
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent">
        <Image
          src="/images/Prirodni_probiotik.svg"
          alt="Prirodni probiotik"
          height={8}
          width={8}
          priority
          className="w-8 h-8" />
        </div>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[46px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-accentGreen text-accent">
        <Image
          src="/images/Za_zdravu_probavu.svg"
          alt="Za zdravu probavu"
          height={8}
          width={8}
          priority
          className="w-8 h-8" />
          </div>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent">
        <Image
          src="/images/Vegan.svg"
          alt="Vegan"
          height={8}
          width={8}
          priority
          className="w-8 h-8" />
        </div>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
         <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-accentGreen text-accent">
        <Image
          src="/images/Prirodni_sastojci.svg"
          alt="Prirodni sastojci"
          height={8}
          width={8}
          priority
          className="w-8 h-8" />
        </div>
      </OrbitingCircles>
    </div>
  );
}


