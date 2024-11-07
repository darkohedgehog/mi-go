import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { HeroSection } from '@/components/mainpage/HeroSection';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <>
            <HeroSection />
        </>
    );
}