import { useEffect } from 'react';
import SideDishList from '../../components/sideDish/SideDishList';
import { SideDishStyle } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SideDish = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <SideDishStyle>
            <div className="banner">
                <div className="txt-box">
                    <p>매주 맛보는 압구정 20년 손맛</p>
                    <h2>[투홈구독] 압구정 예향 반찬 구독(2025년)</h2>
                </div>
                <img src="images/sidedish/banner_bg.jpg" alt="배너" />
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
                            반찬 고민 덜어주는 예향의 메뉴 추천
                        </strong>
                        <p data-aos="zoom-in" data-aos-delay="120" data-aos-duration="800">
                            일주일에 한 번 반찬 고민없이 예향의 반찬으로 근사한 식탁을 차려보세요.
                            <br />
                            반찬 가게가 많지 않던 20년 전, 현대백화점 압구정 본점에 문을 연 예향은
                            2대째 그 맛을 이어오고 있어요. <br />
                            매일 각지에서 올라온 신선한 재료를 손질하고, 온 가족이 먹는 음식을
                            만든다는 철학을 가진 <br />
                            예향의 반찬 꾸러미로 반찬 고민을 덜고 매 주 다양한 메뉴들로 우리 가족의
                            입맛을 사로잡아보세요.
                        </p>
                    </div>
                </section>
                <SideDishList />
            </div>
        </SideDishStyle>
    );
};

export default SideDish;
