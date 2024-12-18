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
            src={'/Logo-06.jpg'}
            className="h-14 w-14 bg-cover rounded-full"
            alt="Logo"
            width={40}
            height={40}
            priority={false}
          />
          </Link>
    </div>
  )
}

export default Logo;