import { ContentStyle } from '../style';
import { Content4Style } from './style';
import { MdArrowForwardIos } from 'react-icons/md';
import SubscribeUl from './SubscribeUl';
import { useNavigate } from 'react-router-dom';
import HealthList from './HealthList';

import { useEffect } from 'react';
import AOS from 'aos';

const Content4 = () => {
    const navigate = useNavigate();

    const onClick1 = () => {
        navigate('/sideDish');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const onClick2 = () => {
        navigate('/healFood');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <ContentStyle>
            <Content4Style>
                <section
                    className="side-dish-wrap position-fix"
                    data-aos="fade-up"
                    data-aos-delay="0"
                >
                    <div className="txts">
                        <h2 className="main-title">투홈 반찬구독</h2>
                        <p>압구정 예향 반찬 구독 (8월 첫째주)</p>
                        <div className="icons-wrap">
                            <div className="icons-box">
                                <img
                                    src="images/icon/icon_sidedish1.png"
                                    alt="images/icon/icon_sidedish1.png"
                                />
                                <p className="pretendard fw400">신선한 식재료</p>
                            </div>
                            <div className="icons-box">
                                <img
                                    src="images/icon/icon_sidedish2.png"
                                    alt="images/icon/icon_sidedish2.png"
                                />
                                <p className="pretendard fw400">정성 가득한 맛</p>
                            </div>
                            <div className="icons-box">
                                <img
                                    src="images/icon/icon_sidedish3.png"
                                    alt="images/icon/icon_sidedish3.png"
                                />
                                <p className="pretendard fw400">합리적인 가격</p>
                            </div>
                        </div>
                        <button className="more1" onClick={onClick1}>
                            반찬 더보기
                            <MdArrowForwardIos />
                        </button>
                    </div>
                    <div className="side-dish-right-wrap">
                        <SubscribeUl />
                    </div>
                </section>

                <section className="health-sub-wrap" onClick={onClick2} data-aos="fade-up">
                    <HealthList />
                </section>
            </Content4Style>
        </ContentStyle>
    );
};

export default Content4;
