import React from 'react';
import HrFlag from '@/assets/flags/hr.svg';
import GbFlag from '@/assets/flags/gb.svg';
import Image from 'next/image';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

const LangSwitch = () => {
    const t = useTranslations('LangSwitch');
    const locale = useLocale(); // Trenutni jezik
    const otherLocale = locale === 'hr' ? 'en' : 'hr'; // Promena jezika

    return (
        <div className="flex items-center justify-center gap-6 mx-4 my-2 border-b-2 border-gray-400 pb-2">
            <p className="text-[12px]">
                {t('title')}
            </p>
            <Link href="/" locale="hr">
                <Image
                    src={HrFlag}
                    alt="Hrvatska zastava"
                    width={10}
                    height={10}
                    className="rounded w-5 h-5"
                />
            </Link>
            <Link href="/" locale="en">
                <Image
                    src={GbFlag}
                    alt="Zastava Velike Britanije"
                    width={10}
                    height={10}
                    className="rounded w-5 h-5"
                />
            </Link>
        </div>
    );
};

export default LangSwitch;
