import Image from 'next/image'
import React from 'react'
import { GiStomach, GiPlanetConquest } from "react-icons/gi";
import { GrHistory } from "react-icons/gr";
import OrbitingCirclesSection from './OrbitingCirclesSection';

const WrapperHealth = () => {
  return (
    <>
    <h1 className='text-3xl lg:text-4xl flex items-center justify-center text-accent font-bold'>
    Friend of digestion
        </h1>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-row-reverse">
     <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden flex justify-center items-center">
    <OrbitingCirclesSection />
     </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <GiPlanetConquest className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">What is Kombucha?</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur enim, soluta ut earum dolorem et atque est? A, sed.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <GiStomach className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Friend of digestion</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat ullam qui eum aut adipisci harum molestias esse nihil perferendis.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-accent mb-5">
        <GrHistory className='w-8 h-8' />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">History of Kombucha</h2>
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, in. Aut expedita consequatur quidem? Voluptatibus totam sit animi nobis dicta
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