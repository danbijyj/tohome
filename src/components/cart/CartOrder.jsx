import { OrderBoxStyle, FormsStyle } from './style';

const CartOrder = () => {
    return (
        <OrderBoxStyle>
            <FormsStyle>
                <div className="Info order">
                    <div className="title">
                        <p>주문자 정보</p>
                        <span>고객님의 회원 정보가 기본 입력됩니다</span>
                    </div>
                    <div className="forms">
                        <div className="form name">
                            <label htmlFor="name">이름</label>
                            <div className="field-group">
                                <input type="text" name="name" id="name" />
                            </div>
                        </div>
                        <div className="form email">
                            <label htmlFor="email">이메일</label>
                            <div className="field-group">
                                <input type="text" name="email" id="email" />
                                <span>@</span>
                                <select name="" id="">
                                    <option value="">gmail.com</option>
                                    <option value="">naver.com</option>
                                </select>
                            </div>
                        </div>
                        <div className="form tel">
                            <label htmlFor="tel">전화번호</label>
                            <div className="field-group">
                                <select name="tel" id="tel">
                                    <option value="">010</option>
                                </select>
                                <input type="text" name="tel" id="tel" placeholder="0000" />
                                <input type="text" name="tel" id="tel" placeholder="0000" />
                            </div>
                        </div>
                        <div className="form addr">
                            <label htmlFor="addr">주소</label>
                            <div className="field-group">
                                <input type="text" name="" id="" placeholder="서울시 OO구  OO동" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Info destination">
                    <div className="title">
                        <p>배송지 정보</p>
                    </div>
                    <div className="forms">
                        <div className="form receiptor">
                            <label htmlFor="receiptor">수령자</label>
                            <div className="field-group">
                                <input type="text" name="receiptor" id="receiptor" />
                            </div>
                        </div>
                        <div className="form tel">
                            <label htmlFor="tel">전화번호</label>
                            <div className="field-group">
                                <select name="tel" id="tel">
                                    <option value="">010</option>
                                </select>
                                <input type="text" name="tel" id="tel" placeholder="0000" />
                                <input type="text" name="tel" id="tel" placeholder="0000" />
                            </div>
                        </div>
                        <div className="form addr">
                            <label htmlFor="addr">주소</label>
                            <div className="field-group">
                                <input type="text" name="" id="" placeholder="서울시 OO구  OO동" />
                            </div>
                        </div>
                        <div className="form message">
                            <label htmlFor="message">배송메세지</label>
                            <div className="field-group">
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Info payment">
                    <div className="title">
                        <p>결제수단</p>
                        <span>결제하실 수단을 선택해주세요</span>
                    </div>
                    <ul className="options">
                        <li>
                            <input type="radio" name="" id="" />
                            신용/체크카드
                        </li>
                        <li>
                            <input type="radio" name="" id="" />
                            가상계좌/계좌이체
                        </li>
                        <li>
                            <input type="radio" name="" id="" />
                            간편결제
                        </li>
                        <li>
                            <input type="radio" name="" id="" />
                            휴대폰 결제
                        </li>
                    </ul>
                </div>
            </FormsStyle>
        </OrderBoxStyle>
    );
};

export default CartOrder;
