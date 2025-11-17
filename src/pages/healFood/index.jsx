import { useEffect } from 'react';
import { HealFoodStyle } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HealFood = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <HealFoodStyle>
            <div className="banner">
                <div className="txt-box">
                    <p>맛과 균형을 생각한 똑똑한 맞춤 영양식단</p>
                    <h2>
                        [메디쏠라 건강식품 구독] <br className="mobileOnly" />
                        건강한 식탁, 메디쏠라의 건강식품 구독 (2025년)
                    </h2>
                </div>
                <img src="images/healfood/banner_bg.jpg" alt="배너" />
            </div>
            <div className="inner">
                <section>
                    <div className="info">
                        <strong
                            data-aos="zoom-in"
                            data-aos-delay="120"
                            data-aos-duration="600"
                            style={{ display: 'inline-block' }}
                        >
                            건강을 생각한 메디쏠라의 맞춤형 식단 추천
                        </strong>
                        <p
                            data-aos="zoom-in"
                            data-aos-delay="150"
                            data-aos-duration="800"
                            className="pretendard fw400"
                        >
                            매주 한 번, 메디쏠라의 건강식품으로 건강한 식탁을 차려보세요.
                            <br />
                            당뇨, 암, 신장, 저당 등 맞춤형 식단으로 각자의 건강을 챙기고,{' '}
                            <br className="mobileOnly" /> 신선한 재료로 정성껏 준비된 식사를
                            제공합니다.
                            <br />
                            매주 다양한 메뉴로 가족 모두의 건강을 지키고,
                            <br className="mobileOnly" /> 맛있고 건강한 식사를 즐겨보세요.
                        </p>
                    </div>
                    <div className="list">
                        <div className="meal item1" data-aos="fade-up" data-aos-duration="500">
                            <div className="imgs">
                                <img src="images/healfood/healfood01.jpg" alt="당뇨케어 식단" />
                            </div>

                            <strong>[투홈구독] 메디쏠라 당뇨케어 식단</strong>
                            <span className="pretendard fw400">
                                당뇨환자용 질환의 영양 관리를 위한 맞춤형 영양식단
                            </span>
                            <button>상품보기</button>
                        </div>
                        <div className="meal item1" data-aos="fade-up" data-aos-duration="700">
                            <div className="imgs">
                                <img src="images/healfood/healfood02.jpg" alt="암케어 식단" />
                            </div>
                            <strong>[투홈구독] 메디쏠라 암케어 식단</strong>
                            <span className="pretendard fw400">
                                암환자의 영양 관리를 위한 맞춤형 영양식단
                            </span>
                            <button>상품보기</button>
                        </div>
                        <div className="meal item1" data-aos="fade-up" data-aos-duration="1200">
                            <div className="imgs">
                                <img src="images/healfood/healfood03.jpg" alt="신장케어 식단" />
                            </div>
                            <strong>[투홈구독] 메디쏠라 신장케어 식단</strong>
                            <span className="pretendard fw400">
                                신장 질환자의 영양 관리를 위한 맞춤형 영양식단
                            </span>
                            <button>상품보기</button>
                        </div>
                        <div className="meal item1" data-aos="fade-up" data-aos-duration="900">
                            <div className="imgs">
                                <img src="images/healfood/healfood04.jpg" alt="저당관리 식단" />
                            </div>
                            <strong>[투홈구독] 메디쏠라 저당관리 식단</strong>
                            <span className="pretendard fw400">
                                탄:단:지 비율을 고려한 당 걱정없는 저당관리식단
                            </span>
                            <button>상품보기</button>
                        </div>
                    </div>
                </section>
            </div>
        </HealFoodStyle>
    );
};

export default HealFood;
