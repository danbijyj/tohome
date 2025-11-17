import { Link, useNavigate } from 'react-router-dom';
import { FooterBodyUl } from './style';

const FooterBody = () => {
    const navigate = useNavigate();
    const onAbout = () => {
        navigate('/about');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <FooterBodyUl>
            <li>
                <div>
                    <em>고객센터</em>
                    <p className="pretendard">오전 7시 ~ 오후 9시</p>
                    <strong>
                        <img src="/images/icon/icon_call.png" alt="전화기" />
                        1800.9549
                    </strong>
                </div>
                <div>
                    <em>공지사항</em>
                    <h5 className="pretendard fw300">
                        SKT 이용 고객 대상 피해 예방 수칙안내 휴면계정 해제 안내
                    </h5>
                    <img src="/images/icon/icon_plus.png" alt="플러스" />
                </div>
            </li>
            <li className="links">
                <section>
                    <img src="/images/common/logo_tohome2.png" alt="로고1" className="logo" />
                    <div>
                        <Link to="/">
                            <img src="/images/icon/icon_youtube.png" alt="유튜브" />
                        </Link>
                        <Link to="/">
                            <img src="/images/icon/icon_facebook.png" alt="페이스북" />
                        </Link>
                        <Link to="/">
                            <img src="/images/icon/icon_instagram.png" alt="인스타그램" />
                        </Link>
                    </div>
                </section>
            </li>
            <li className="utill">
                <div className="option">Family Site</div>
                <div className="pretendard">
                    <p onClick={onAbout}>
                        <Link>브랜드소개</Link>
                    </p>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                    <p>영상기기운영방침</p>
                </div>
            </li>
            <li className="utill-mobile-wrap">
                <p onClick={onAbout}>
                    <Link>브랜드소개</Link>
                </p>
                <p>이용약관</p>
                <p>개인정보처리방침</p>
                <p>청소년보호정책</p>
                <p>영상기기운영방침</p>
            </li>
        </FooterBodyUl>
    );
};

export default FooterBody;
