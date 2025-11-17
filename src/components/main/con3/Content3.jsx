import { useSelector } from 'react-redux';
import { ContentStyle } from '../style';
import { Content3Style } from './style';
import { Link, useNavigate } from 'react-router-dom';
import BannerLi from './BannerLi';

import { useEffect } from 'react';
import AOS from 'aos';

const banners = [
    {
        id: 1,
        img1: '/images/main/main_brand1.png',
        img2: '/images/main/main_brand1t.png',
        img3: '/images/main/mobile_brand1t.png',
        p: '우리 음식의 고유한 원형을 식탁에 전하는 명인명촌',
    },
    {
        id: 2,
        img1: '/images/main/main_brand2.png',
        img2: '/images/main/main_brand2t.png',
        img3: '/images/main/mobile_brand2t.png',
        p: '현대백화점 식재료 X 유명 맛집 레시피 집에서 즐기는 프리미엄 가정 간편식',
    },
    {
        id: 3,
        img1: '/images/main/main_brand3.png',
        img2: '/images/main/main_brand3t.png',
        img3: '/images/main/mobile_brand3t.png',
        p: '대를 거듭하며 이어온 헤리티지 현대식품관 본점 브랜드',
    },
    {
        id: 4,
        img1: '/images/main/main_brand4.png',
        img2: '/images/main/main_brand4t.png',
        img3: '/images/main/mobile_brand4t.png',
        p: '오늘의 나와 미래의 아이들이 함께하는 지속가능한 미식 생활',
    },
];

const Content3 = () => {
    const navigate = useNavigate();
    const onClick1 = () => {
        navigate('/about');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onClick2 = () => {
        navigate('/specialBrand');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onClick3 = () => {
        navigate('/dawnDelivery');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <ContentStyle>
            <Content3Style>
                <section onClick={onClick1} className="main-about position-fix" data-aos="fade-up">
                    <h2>현대식품관 BRAND STORY</h2>
                    <div>
                        <p>“정성으로 차린 식탁,</p>
                        <p>일상에 특별함을 더하다”</p>
                    </div>
                    <img src="images/main/main_about.png" alt="" />
                    <button className="main-about-btn hover">브랜드 소개</button>
                </section>
                <section className="brand-about" onClick={onClick2} data-aos="fade-up">
                    <h2 className="main-title">브랜드로 만나는 미식의 깊이</h2>
                    <strong>Connecting Taste & Story</strong>
                    <div className="txts pretendard fw300">
                        <p>
                            전통과 혁신, 지역과 일상, 미식과 기술을 잇는 현대식품관의 특화브랜드를
                            소개합니다. <br /> ‘명인명촌, 원테이블, 동행마켓, 예향’ <br /> 각기 다른
                            철학과 가치를 담은 네 가지 브랜드를 통해 <br />
                            풍요로운 식문화의 깊이를 경험해보세요.
                        </p>
                    </div>
                    <p className="mobileOnly">
                        현대식품관의 특화브랜드를 통해 <br />
                        풍요로운 식문화의 깊이를 경험해보세요.
                    </p>
                    <div className="brand-about-banner">
                        {banners.map((banner) => (
                            <BannerLi key={banner.id} banner={banner} />
                        ))}
                    </div>
                </section>
                <section className="main-dawn-wrap" onClick={onClick3} data-aos="fade-up">
                    <div>
                        <img src="images/main/main_dawn.png" alt="" />
                        <img src="images/main/mobile_dawn.png" alt="" className="mobileDawn" />
                        <div className="txts">
                            <h2>투홈 새벽배송</h2>
                            <p className="pretendard">“월요일부터 일요일까지 하루도 빠짐없이</p>
                            <p className="pretendard">투홈은 새벽을 부지런히 달립니다.”</p>
                        </div>
                    </div>
                </section>
            </Content3Style>
        </ContentStyle>
    );
};

export default Content3;
