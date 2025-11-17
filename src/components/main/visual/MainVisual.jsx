import { VisualStyle } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import VisualItem1 from './VisualItem1';
import VisualItem2 from './VisualItem2';
import VisualItem3 from './VisualItem3';
import VisualItem4 from './VisualItem4';
import VisualItem5 from './VisualItem5';
import { useRef, useState } from 'react';
import MobileNav from './MobileNav';

const visualData = [
    {
        visualId: 1,
        title: '시골의 느긋한 정서와 \n  자연을 담은 ‘약방집손녀딸’',
        des: '할아버지의 약방에서 배운 노하우를 바탕으로 \n 만든 보리차입니다.',
        des2: '브루브루 베리 보리차',
        img: 'images/main/mainVisual1.png',
        position: 'left',
    },
    {
        visualId: 2,
        title: '졸리뉴아쥬\n 납작복숭아 & 제주 귤 잼’',
        title2: '부드러움과 달콤함을 선사하는\n 프리미엄 잼 브랜드 ‘졸리뉴아쥬’',
        des: '복숭아와 귤의 신선하고 풍부한 과육을 그대로!\n 직접 기르고 고른 최상급 과일의 프렌치 스타일 레시피',
        des2: '납작복숭아 & 제주 귤 잼',
        img: 'images/main/mainVisual2.png',
        imgs: [
            { src: 'images/main/mainVisual2-1.png', className: 'pos1' },
            { src: 'images/main/mainVisual2-2.png', className: 'pos2' },
            { src: 'images/main/mainVisual2-3.png', className: 'pos3' },
            { src: 'images/main/mainVisual2-4.png', className: 'pos4' },
        ],
        position: 'right',
    },
    {
        visualId: 3,
        title: '담백하고 깔끔한 \n 리북방의 ‘이북식 백순대국’',
        des: '깔끔하고 깊은 육수에 담백한 맛을 더한 이북식 백순대국. \n 기름지지 않고 쫄깃한 뒷다리살로 감칠맛을 살렸어요.',
        des2: '이북식 백순대국',
        img: 'images/main/mainVisual3.png',
        imgs: [
            { src: 'images/main/mainVisual3-1.png', className: 'pos1' },
            { src: 'images/main/mainVisual3-2.png', className: 'pos2' },
            { src: 'images/main/mainVisual3-3.png', className: 'pos3' },
        ],
        position: 'left',
    },
    {
        visualId: 4,
        title: 'H-Sweet \n 자색무화과',
        title2: '입안 가득 퍼지는 \n 깊은 단맛이 매력적인 ‘영암 무화과’',
        des: '영암에서 자란 자색 무화과는 진한 자색을 띄며  \n 부드러운 식감, 입안 가득 퍼지는 깊은 단맛이 매력 \n 적인 제철 과일입니다.',
        des2: 'H-Sweet 자색무화과',
        img: 'images/main/mainVisual4.png',
        imgs: [
            { src: 'images/main/mainVisual4-1.png', className: 'pos1' },
            { src: 'images/main/mainVisual4-2.png', className: 'pos2' },
            { src: 'images/main/mainVisual4-3.png', className: 'pos3' },
        ],
        position: 'right',
    },
    {
        visualId: 5,
        title: 'Today 08. 01 새벽시장',
        des: '어느덧 30여넌. 현대식품관의 바이어는 새벽시장으로 출근합니다. \n 오늘 가장 주목할만한 식재료 소식을 자신있게 전해드립니다.',
        img: 'images/main/mainVisual5.png',
        imgs: [
            { src: 'images/main/mainVisual5-1.png', className: 'pos1' },
            { src: 'images/main/mainVisual5-2.png', className: 'pos2' },
            { src: 'images/main/mainVisual5-3.png', className: 'pos3' },
            { src: 'images/main/mainVisual5-4.png', className: 'pos4' },
        ],
        position: 'left',
    },
];

const componentMap = {
    1: VisualItem1,
    2: VisualItem2,
    3: VisualItem3,
    4: VisualItem4,
    5: VisualItem5,
};

const MainVisual = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <VisualStyle>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {visualData.map((visual, index) => {
                    const Component = componentMap[visual.visualId];
                    return (
                        <SwiperSlide key={visual.visualId}>
                            <Component visual={visual} isActive={activeIndex === index} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="btn-wrap">
                <button className="prev" onClick={() => swiperRef.current?.slidePrev()}>
                    <p>Prev</p>
                </button>

                <button className="next" onClick={() => swiperRef.current?.slideNext()}>
                    <p>Next</p>
                </button>
            </div>

            <div className="indicator">
                {visualData.map((_, i) => (
                    <span key={i} className={activeIndex === i ? 'active' : ''}></span>
                ))}
            </div>
            <MobileNav />
        </VisualStyle>
    );
};

export default MainVisual;
