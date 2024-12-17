"use client";
import Link from 'next/link'
import { RiMessengerLine, RiFacebookCircleFill, RiNextjsFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { GiHedgehog } from "react-icons/gi";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations("FooterData");
  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1] || "hr";


  return (
    <>
      <div className="w-full bg-secondary rounded-lg">
        <div className="flex items-center justify-around gap-8">
          <Link href={`/${currentLocale}/`} className="flex items-center mt-6 justify-center">
          <Image
            src={'/Logo-06.jpg'}
            className="h-10 w-10 bg-cover rounded-full"
            alt="Logo"
            width={40}
            height={40}
            priority={false}
          />
          </Link>
          <ul className="flex justify-center items-center font-semibold text-[16px] mt-6 text-accent gap-4 min-w-32">
                <li>
                    <Link href={`/${currentLocale}/privacy`} className="hover:underline">
                        {t('privacy')}
                    </Link>
                </li>
                <li>
                    <Link href={`/${currentLocale}/terms`} className="hover:underline">
                    {t('terms')}
                    </Link>
                </li>
            </ul>  
        </div>
        <div className='flex items-center justify-center my-12 flex-col'>
          <h3 className='text-accent text-lg mb-4 font-semibold'>
            {t('title')}
          </h3>
          <span className="inline-flex mx-4 gap-4">
            <a 
              className="text-accentGreen" 
              href='https://instagram.com' 
              target='_blank' 
              rel="noopener noreferrer"
            >
              <SiInstagram className='h-6 w-6' />
            </a>
            <a 
              className="text-accentGreen"
              href='https://www.facebook.com' 
              target='_blank'
              rel="noopener noreferrer"
            >
              <RiFacebookCircleFill className='h-6 w-6' />
            </a>
            <a
              className="text-accentGreen" 
              href='https://www.facebook.com'
              target='_blank'
              rel="noopener noreferrer"
            >
              <RiMessengerLine className='h-6 w-6' />
            </a>
            <a 
              className="text-accentGreen" 
              href='mailto:zivic.darko79@gmail.com' 
              target='_blank'
              rel="noopener noreferrer"
            >
              <MdOutlineAlternateEmail className='h-6 w-6' />
            </a>
           
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 my-3 text-sm text-neutral-500 text-center"> 
          Powered by 
          <a href='https://nextjs.org/' target='_blank' rel="noopener noreferrer">
            <RiNextjsFill className='w-6 h-6 text-accentGreen' />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 my-6 text-sm text-neutral-500 text-center"> 
          Developed by Hedgehog
          <GiHedgehog className='w-6 h-6 text-accentGreen' />
        </div>
        <hr className="my-6 border-neutral-300 mx-auto" />
        <div className="block text-sm text-accentGreen text-center"> 
          © {new Date().getFullYear()} Mi-Go. {t('copyright')}.
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-neutral-500 text-center"> 
            <a href='/sitemap.xml' target='_blank' rel="noopener noreferrer" className='mb-28'>
              sitemap.xml
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;