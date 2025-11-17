import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DawnDeliveryCon from '../../components/dawnDelivery/DawnDeliveryCon';
import { BannerStyle, DawnDeliveryStyle } from './style';

const DawnDelivery = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const initAOS = () => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                disable: () => window.matchMedia('(max-width: 600px)').matches,
            });
        };
        initAOS();
        let resizeTimer;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                initAOS();
                AOS.refreshHard();
            }, 150);
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(resizeTimer);
        };
    }, []);
    return (
        <DawnDeliveryStyle>
            <BannerStyle>
                <img src="/images/dawnDelivery/banner.png" alt="banner" />
                <div className="txt-box">
                    <h2>새벽투홈</h2>
                    <span>배송안내 패키지 가이드</span>
                    <p>
                        매일 아침, 현관 앞에서 만나는 현대식품관의 신선한 상품.
                    </p>
                    <p>환경을 생각한 패키지와 새벽배송 시스템으로</p>
                    <p>풍요로운 식탁을 전합니다.</p>
                </div>
            </BannerStyle>

            <div className="inner">
                <DawnDeliveryCon />
            </div>
        </DawnDeliveryStyle>
    );
};

export default DawnDelivery;
