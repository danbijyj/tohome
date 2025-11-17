import { Link } from 'react-router-dom';
import { AboutRight } from './style';

const AboutGotoCon2 = (props) => {
    return (
        <>
            <AboutRight {...props}>
                <li
                    style={{
                        background:
                            "url('/images/about/about_info_02.jpg') no-repeat 0 0",
                    }}
                >
                    <Link to="/dawnDelivery" className="goto">
                        새벽투홈 바로가기
                        <img src="/images/about/forward.png" alt="" />
                    </Link>
                </li>
                <li>
                    <div className="con-text">
                        <div className="titleWrap">
                            <div className="title">
                                <h3>새벽투홈</h3>
                                <img
                                    src="/images/about/about_icon_02.png"
                                    alt=""
                                />
                            </div>
                            <p className="green-title">
                                신선함을 지키는 새벽 배송 시스템
                            </p>
                        </div>
                        <p>
                            하루의 시작, 현대식품관에서 고르고 고른 정갈한
                            식재료를 아침 현관 앞에서 편하게 받아보세요.
                        </p>
                        <p>
                            40년 유통 노하우로 배송 시간은 단축하고 상품 손상은
                            최소화해, 최적의 신선도를 유지합니다.
                        </p>
                        <p>
                            포장 하나에도 환경을 생각한 마음을 담아, 내일을 위한
                            배려를 실었습니다.
                        </p>
                    </div>
                </li>
            </AboutRight>
        </>
    );
};

export default AboutGotoCon2;
