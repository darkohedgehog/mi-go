"use client"
import Image from 'next/image';
import React from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';


const Logo = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1] || "hr";
  return (
    <div>
      <Link
      href={`/${currentLocale}/`}>
        <Image
            src={'/logo.png'}
            className="h-20 w-20 flex justify-start items-center -rotate-12"
            alt="Logo"
            width={40}
            height={40}
            priority={true}
          />
          </Link>
    </div>
  )
}

export default Logo;