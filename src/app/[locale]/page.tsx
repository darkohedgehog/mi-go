import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/mainpage/HeroSection'));
const IntroductionSection = dynamic(() => import('@/components/mainpage/IntroductionSection'));

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <IntroductionSection />
        </>
    );
}
