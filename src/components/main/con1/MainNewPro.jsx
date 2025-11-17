import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';

import { MdArrowForwardIos } from 'react-icons/md';

const newProductsArr = [
    {
        title: '소바쿠',
        subtitle: '쫄깃한 백메밀소바',
        description: `아차산역 맛집으로 유명한 소바쿠. \n 껍질을 벗긴 속메밀을 그대로 갈아 넣어 \n 발이 매끈하고 쫄깃해요. \n육수는 가쓰오부시와 다시마를 우려 \n 깔끔하고 담백합니다. \n 살얼음을 동동 띄운 육수로 시원하게 \n 즐겨보세요.`,
        highlightText: '여름에 딱 맞는 가볍고 시원한 한 끼',
        img: '/images/product/product06.png',
    },
    {
        title: '경복궁BLACK',
        subtitle: '한우 떡갈비',
        description: `경복궁 블랙의 한우 떡갈비는 짝갈비를 \n 통째로 갈아 넣어 둥글게 빚었습니다. \n 국내산 배를 사용한 경복궁만의 전통 양념으로 \n  달콤하면서 짭조름한 것이 특징입니다. \n  \n 샌드위치, 햄버거 속재료로 활용해도 좋습니다.`,
        highlightText: '한우 짝갈비가 들어간 달콤한 떡갈비',
        img: '/images/product/product07.png',
    },
    {
        title: '상어알분식',
        subtitle: '한입 쌀 떡볶이',
        description: `학교 앞 분식점에서 팔던 쫀득쫀득 \n 쌀떡파들을 만족 시킬 상어알분식의  \n가래떡쌀떡볶이 입니다. \n 알룰로스로 단맛은 채우고 당과 \n 칼로리 부담을 줄였습니다, \n 떡볶이가 당기는 오후, 푸짐하게 즐겨보세요!`,
        highlightText: '두툼한 쌀 가래떡이 쫀득쫀득',
        img: '/images/product/product08.png',
    },
];

const MainNewPro = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
        >
            {newProductsArr.map(({ title, subtitle, description, highlightText, img }, idx) => (
                <SwiperSlide key={idx}>
                    <div className="left">
                        <strong className="pretendard">{highlightText}</strong>
                        <h2>{title}</h2>
                        <h4>
                            {subtitle} <MdArrowForwardIos />
                        </h4>
                        <p className="pretendard fw300">
                            {description.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="right">
                        <img src={img} alt={title} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainNewPro;
