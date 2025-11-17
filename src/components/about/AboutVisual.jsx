import { AboutSlideWrap } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import AboutSlide1 from './AboutSlide1';
import AboutSlide2 from './AboutSlide2';
import AboutSlide3 from './AboutSlide3';
import { useNavigate } from 'react-router-dom';

const aboutData = [
    {
        aboutId: 1,
        imgUrl: '/images/about/about_slide_01.jpg',
        title: '책임과 존중',
        titleEng: 'Respect & Pesponsibility',
        des: '현대식품관 투홈은 손익보다 더 큰 가치를 생각합니다.\n생산성이 좋지 않아 외면 당했던 토종 종자를 찾아 소개하고,\n상품 품목수를 늘려 진정성 있는 소수 판매자들을 이끌어간다는 사명감을 잊지 않습니다.\n진실한 노고로 먹거리를 정직하게 가꾸어주는 분들은 우리의 소중한 파트너입니다.\n현대식품관의 브랜드와 상품에는 땅의 기운과 바람의 손길이 듬뿍 깃들어 있습니다.',
        magazine: '매거진',
        bannersubl: '내일의 식탁을 위한',
        bannersubttll: '현대식품관 투홈 가이드',
        bannersubr: '새벽시장 이야기',
        bannersubttlr: '바이어 인터뷰',
    },
    {
        aboutId: 2,
        imgUrl: '/images/about/about_slide_02.jpg',
        title: '노력과 정성',
        titleEng: 'Professional Standards & Mindful Services',
        des: '현대식품관 투홈은 이른 하루의 시작으로 신선하고 안전한 먹거리를 준비하고,\n자체적으로 개발한 전문적 구매 - 선별 - 유통 시스템을 고수합니다.\n한 단계 한 단계마다 꼿꼿한 정성이 깃든 상품은\n배송원의 부지런한 손길을 거쳐\n하루의 첫번째 햇빛이 반짝이는 현관 앞에 신선하고 안전하게 도착합니다.',
        magazine: '매거진',
        bannersubl: '새벽배송',
        bannersubttll: '투홈 패키지 알아보기',
        bannersubr: '산지에서 식탁까지',
        bannersubttlr: '투홈 유통 프로세스',
    },
    {
        aboutId: 3,
        imgUrl: '/images/about/about_slide_03.jpg',
        title: '탐구와 기쁨',
        titleEng: 'Food is Love, Food is Life',
        des: '음식은 우리의 삶을 가장 깊이 변화시킬 수 있습니다.\n매일의 생활을 통해 우리는 스스로의 취향을 발견합니다.\n한그릇의 음식을 통해 우리 전통과 새로운 세계가 열리며, \n그 식탁 앞에 친구와 가족이 함께 마주앉길 꿈꿉니다. \n현대식품관 투홈은 음식의 이야기와 문화를 끊임없이 제안하는 메신저가 되겠습니다.',
        magazine: '매거진',
        bannersubl: '집밥이 즐거운',
        bannersubttll: '투홈 레시피',
        bannersubr: '투홈에서 발견하는',
        bannersubttlr: '나의 미식 취향',
    },
];

const AboutSlideMap = {
    1: AboutSlide1,
    2: AboutSlide2,
    3: AboutSlide3,
};

const AboutVisual = () => {
    const navigate = useNavigate();

    const onMagazine = () => {
        navigate('/magazine');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const swiperRef = useRef(null);
    return (
        <AboutSlideWrap>
            <Swiper
                onClick={onMagazine}
                className="about-swiper"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
            >
                {aboutData.map((about) => {
                    const Component = AboutSlideMap[about.aboutId];
                    return (
                        <SwiperSlide key={about.aboutId}>
                            <Component about={about} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="btn-wrap">
                <button
                    className="prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <p>Prev</p>
                </button>
                <button
                    className="next"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <p>Next</p>
                </button>
            </div>
        </AboutSlideWrap>
    );
};

export default AboutVisual;
