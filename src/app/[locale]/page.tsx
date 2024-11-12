import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/mainpage/HeroSection'));
const IntroductionSection = dynamic(() => import('@/components/mainpage/IntroductionSection'));
const WrapperHealth = dynamic(() => import('@/components/mainpage/WrapperHealth'));

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <IntroductionSection />
            <WrapperHealth />
        </>
    );
}
