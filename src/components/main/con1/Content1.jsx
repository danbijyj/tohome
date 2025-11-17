import { useSelector } from 'react-redux';
import { ContentStyle } from '../style';
import BestMenuLi from './BestMenuLi';
import { MainCon1Style } from './style';
import MainNewPro from './MainNewPro';
import { useState } from 'react';
import ProductList from '../../product/ProductList';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const Content1 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const { AllDataList } = useSelector((state) => state.cart);
    const bestTop5 = AllDataList.filter(
        (product) =>
            product.id && product.tags?.some((tag) => tag.name === '베스트' && tag.rank <= 10)
    );
    const bestTop6 = AllDataList.filter(
        (product) =>
            product.id && product.tags?.some((tag) => tag.name === '베스트' && tag.rank <= 6)
    );
    const newRecom = AllDataList.filter(
        (product) =>
            product.id && product.tags?.some((tag) => tag.name === '신상품' && tag.rank <= 3)
    );

    return (
        <ContentStyle>
            <div className="inner">
                <MainCon1Style>
                    <section className="main-best-wrap" data-aos="fade-up">
                        <h2 className="main-title">베스트 메뉴</h2>
                        <h3 className="pretendard sub-title">
                            지금 가장 사랑받는 메뉴, 한눈에 담아보세요
                        </h3>
                        {isMobile ? (
                            <div className="productWrap">
                                <ProductList products={bestTop6} showCheckbox={false} />
                            </div>
                        ) : (
                            <Swiper
                                className="ul"
                                modules={[FreeMode, Autoplay]}
                                slidesPerView={5}
                                spaceBetween={24}
                                freeMode={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed={1000}
                                loop={true}
                            >
                                {bestTop5.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <BestMenuLi product={product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                        <div className="btn">
                            <button>베스트 상품 더보기</button>
                        </div>
                    </section>
                    <section className="main-newPro-wrap" data-aos="fade-up">
                        <h2 className="main-title">신상품</h2>
                        <h3 className="sub-title pretendard">
                            현대식품관에서 처음 선보이는 오늘 막 도착한 신상품
                        </h3>

                        <MainNewPro newRecom={newRecom} />
                    </section>
                </MainCon1Style>
            </div>
        </ContentStyle>
    );
};

export default Content1;
