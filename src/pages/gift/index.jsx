import TopSection from '../../components/topSection/TopSection';
import GiftPoint from '../../components/gift/GiftPoint';
import GiftTutorial from '../../components/gift/GiftTutorial';
import GiftBest from '../../components/gift/giftBest/GiftBest';
import GiftPremium from '../../components/gift/giftPremium/GiftPremium';
import GiftPopular from '../../components/gift/giftPopular/GiftPopular';
import GiftProduct from '../../components/gift/giftProduct/GiftProduct';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gift = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <>
            <div className="inner">
                <TopSection
                    title="Gift to Home"
                    subtitle="거리는 멀어도 마음은 가까이,
                직접 전달하기 어려운 선물은 현대식품관 투홈 선물하기를 이용해보세요."
                    $borderTop="1px solid #000"
                    $borderBottom="1px solid #000"
                />
                <GiftPoint />
                <GiftTutorial />
            </div>
            <div data-aos="fade-up">
                <GiftBest />
            </div>
            <div className="inner" data-aos="fade-up">
                <GiftPremium />
                <GiftPopular />
            </div>
            <GiftProduct />
        </>
    );
};

export default Gift;
