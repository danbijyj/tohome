import { useSelector } from 'react-redux';
import { MyPageItemStyle } from './style';
import { FaAngleRight } from 'react-icons/fa6';

const MyPageItem = () => {
    const { authed, user } = useSelector((state) => state.auth);
    return (
        <MyPageItemStyle>
            <div className="inner">
                <div className="name">
                    <h2 className="pretendard">
                        {user?.name || user?.userid || user?.profile?.nickname || '회원'}
                    </h2>
                    <span>님은 일반회원 입니다.</span>
                </div>
                <div className="items">
                    <div className="item item1">
                        <span>적립금</span>
                        <strong>1,000</strong>
                        <p>p</p>
                    </div>
                    <div className="item item2">
                        <span>쿠폰</span>
                        <strong>3</strong>
                        <p>개</p>
                    </div>
                    <div className="item item3">
                        <span>예치금</span>
                        <strong>10,000</strong>
                        <p>원</p>
                    </div>
                </div>
                <div className="list">
                    <div className="menu menu1">
                        <img src="/images/mypage/mypage_icon3.jpg" alt="주문내역 조회" />

                        <span>ORDER</span>
                        <p>주문내역 조회</p>
                    </div>
                    <div className="menu menu2">
                        <img src="/images/mypage/mypage_icon1.jpg" alt="회원정보" />

                        <span>PROFILE</span>
                        <p>회원정보</p>
                    </div>
                    <div className="menu menu3">
                        <img src="/images/mypage/mypage_icon1.jpg" alt="게시물관리" />

                        <span>BOARD</span>
                        <p>게시물 관리</p>
                    </div>
                    <div className="menu menu4">
                        <img src="/images/mypage/mypage_icon4.jpg" alt="배송 주소록 관리" />
                        <span>ADDRESS</span>
                        <p>배송 주소록 관리</p>
                    </div>
                </div>

                <div className="order">
                    <div className="text ">
                        <h2>주문/배송 조회</h2>
                        <span>최근 6개월</span>
                    </div>
                    <div className="stepbystep">
                        <div className="inner">
                            <div className="step step1 ">
                                <strong>0</strong>
                                <span className="pretendard">주문접수</span>
                            </div>
                            <i>
                                <FaAngleRight />
                            </i>
                            <div className="step step2">
                                <strong>0</strong>
                                <span className="pretendard">결제완료</span>
                            </div>
                            <i>
                                <FaAngleRight />
                            </i>
                            <div className="step step3">
                                <strong>0</strong>
                                <span className="pretendard">배송준비중</span>
                            </div>
                            <i>
                                <FaAngleRight />
                            </i>
                            <div className="step step4">
                                <strong>1</strong>
                                <span className="pretendard">배송중</span>
                            </div>
                            <i>
                                <FaAngleRight />
                            </i>
                            <div className="step step5">
                                <strong>5</strong>
                                <span className="pretendard">배송완료</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyPageItemStyle>
    );
};

export default MyPageItem;
