import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            src={'/logo.png'}
            className="h-15 w-20 flex justify-start items-center"
            alt="Logo"
            width={40}
            height={40}
            priority={true}
          />
    </div>
  )
}

export default Logo;