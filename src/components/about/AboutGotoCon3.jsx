import { Link } from 'react-router-dom';
import { AboutLeft } from './style';

const AboutGotoCon3 = (props) => {
    return (
        <>
            <AboutLeft {...props}>
                <li>
                    <div className="con-text">
                        <div className="titleWrap">
                            <div className="title">
                                <h3>브랜드직송</h3>
                                <img
                                    src="/images/about/about_icon_03.png"
                                    alt=""
                                />
                            </div>
                            <p className="green-title">
                                바이어의 탐구, 브랜드의 정성
                            </p>
                        </div>
                        <p>
                            바이어의 안목으로 선별한 브랜드를, 진심 깃든 그대로
                            직송으로 전해드립니다.
                        </p>
                        <p>
                            셰프가 직접 고른 식재료의 생생함부터 주문과 동시에
                            시작되는 정통 숙성 레시피까지.
                        </p>
                        <p>
                            브랜드의 개성과 상품에 대한 자부심이 배송박스 안에
                            오롯이 담깁니다.
                        </p>
                    </div>
                </li>
                <li
                    style={{
                        background:
                            "url('/images/about/about_info_03.jpg') no-repeat 0 0",
                    }}
                >
                    <Link to="/directDelivery" className="goto">
                        브랜드직송 바로가기
                        <img src="/images/about/forward.png" alt="" />
                    </Link>
                </li>
            </AboutLeft>
        </>
    );
};

export default AboutGotoCon3;
