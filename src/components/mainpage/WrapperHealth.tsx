import Image from 'next/image'
import React from 'react'
import { GiCircleSparks } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";
import OrbitingCirclesSection from './OrbitingCirclesSection';

const WrapperHealth = () => {
  return (
    <>
    <h1 className='text-3xl lg:text-4xl flex items-center justify-center text-accent font-bold'>
    Friend of digestion
        </h1>
    <section className="text-gray-600 body-font">
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
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Za zdravu probavu</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur enim, soluta ut earum dolorem et atque est? A, sed.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <GiCircleSparks className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Prirodni probiotik</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat ullam qui eum aut adipisci harum molestias esse nihil perferendis.
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
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Vegan</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, in. Aut expedita consequatur quidem? Voluptatibus totam sit animi nobis dicta
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <IoLeafOutline className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Prirodni sastojci</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat ullam qui eum aut adipisci harum molestias esse nihil perferendis.
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