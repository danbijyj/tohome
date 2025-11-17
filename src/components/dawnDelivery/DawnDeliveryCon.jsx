import { Con1Style, Con2Style, Con3Style, Con4Style, DawnDeliveryConStyle } from './style';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const DawnDeliveryCon = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
            offset: 20,
        });
    }, []);
    return (
        <DawnDeliveryConStyle>
            <Con1Style>
                <h2>지역 맞춤 배송 안내</h2>
                <div className="box">
                    <div className="top">
                        <div className="left">
                            <img src="/images/dawnDelivery/con1/img1.png" alt="img1" />
                        </div>
                        <div className="right" data-aos="flip-left" data-aos-delay="200">
                            <div className="txt">
                                <p>새벽배송</p>
                                <img src="/images/dawnDelivery/con1/img2.png" alt="img2" />
                                <span>
                                    오늘 밤 11시 전 주문하시면 내일 아침 현관 앞에 도착합니다.
                                    <br />
                                    월요일부터 일요일까지 하루도 빠짐없이 투홈은 새벽을 부지런히
                                    달립니다.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left" data-aos="flip-left" data-aos-delay="350">
                            <div className="txt">
                                <p>택배배송</p>
                                <img src="/images/dawnDelivery/con1/img3.png" alt="img3" />
                                <span>
                                    오늘 저녁 6시 전 주문하시면 내일 오후 현관 앞에 도착합니다.{' '}
                                    <br />
                                    금요일 저녁 6시 ~ 일요일 저녁 6시 사이에 주문하신 상품은
                                    월요일에 도착합니다.
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="/images/dawnDelivery/con1/img4.png" alt="img4" />
                        </div>
                    </div>
                </div>
            </Con1Style>
            <Con2Style>
                <div className="box">
                    <img className="icon" src="./images/dawnDelivery/con2/icon1.png" alt="icon1" />
                    <div className="box2">
                        <p>Notice</p>
                    </div>
                    <div className="txt-box pretendard">
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                택배배송 지역인 경우 일반 택배를 통해 다음 날 오후까지 상품이
                                발송됩니다.
                            </span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                새벽배송은 공단, 학교, 학교 기숙사, 병원, 관공서에 배송할 수
                                없습니다.
                            </span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>택배배송은 일부 도서·산간 지역에 배송할 수 없습니다.</span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                주문 물량의 증가로 배송 출발 시간이 다소 지연될 수 있습니다.
                            </span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>명절, 공휴일은 택배사 사정에 따라 지연될 수 있습니다.</span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                상품에 따라 배송 일정이 다를 수 있으니 상품 상세페이지를 확인하시기
                                바랍니다.
                            </span>
                        </div>
                    </div>
                </div>
            </Con2Style>
            <Con3Style>
                <h2>투홈 패키지 안내</h2>
                <div className="wholeBox">
                    <div className="box top" data-aos="fade-up" data-aos-delay="0">
                        <img src="./images/dawnDelivery/con3/img1.png" alt="img1" />
                        <div className="txtBox">
                            <p>투홈백</p>
                            <span className="title pretendard ">
                                보냉백은 한 번 구매하면 계속 사용할 수 있으며,
                                <br />
                                새벽배송 시 현관 앞에 두면 신선식품을 담아드립니다.
                            </span>
                            <div className="text pretendard ">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>안감까지 보냉처리해 신선해요</span>
                            </div>
                            <div className="text pretendard ">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>폐 페트병을 재활용한 친환경 소재로 제작했어요</span>
                            </div>
                            <div className="text pretendard ">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>접어서 보관이 가능해요</span>
                            </div>
                            <div className="text pretendard ">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>종이박스 등 불필요한 포장재를 분리수거 할 필요가 없어요</span>
                            </div>
                        </div>
                    </div>
                    <div className="box middle" data-aos="fade-up" data-aos-delay="100">
                        <div className="box">
                            <div className="txtBox">
                                <p>회수용 보냉백</p>
                                <span className="pretendard">
                                    투홈백을 깜빡했나요? <br /> 회수용 보냉백이 대신합니다
                                </span>
                                <div className="text pretendard">
                                    <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                    <span>
                                        투홈백 없이도, 냉기를 오래 유지하는 회수용 보냉백으로
                                        신선하게 받아보세요.
                                    </span>
                                </div>
                                <div className="text pretendard">
                                    <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                    <span>
                                        다음 주문 때 문 앞에 꺼내두면 현대식품관이 직접 회수해요.
                                    </span>
                                </div>
                                <div className="text pretendard">
                                    <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                    <span>일회용 포장 없이 더 친환경적으로 사용할 수 있어요.</span>
                                </div>
                            </div>
                        </div>
                        <img src="./images/dawnDelivery/con3/img2.png" alt="img2" />
                    </div>
                    <div className="box bottom" data-aos="fade-up" data-aos-delay="200">
                        <img src="./images/dawnDelivery/con3/img3.png" alt="img3" />
                        <div className="txtBox">
                            <p>투홈 박스</p>
                            <span className="pretendard">
                                투홈백 없이도 모든 상품을 신선하게 종이 박스로 배송하며, <br />
                                분리 포장보다 불필요한 부자재가 확연히 줄어요.
                            </span>
                            <div className="text pretendard">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>비교적 쓰레기가 적게 나와요</span>
                            </div>
                            <div className="text pretendard">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>재활용이 쉬운 부자재를 함께 담았어요</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Con3Style>
            <Con4Style>
                <h2>투홈백 사용법</h2>
                <p>Q & A</p>
                <div className="box">
                    <div className="txt fw600">
                        <div className="left" data-aos="fade-right">
                            <span className="qNum">Q1</span>
                            <div className="bubbleQ">투홈백은 어떻게 구입할 수 있나요?</div>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-delay="50">
                            <div className="bubbleA">
                                투홈백 상세 페이지에서 주문하신 후, 새벽배송 상품과 함께 구매해야{' '}
                                <br /> 결제하실 수 있습니다. 구매하신 투홈백은 종이박스에 담겨
                                배송됩니다.
                            </div>
                            <span className="aNum">A1</span>
                        </div>
                    </div>

                    <div className="txt fw600">
                        <div className="left" data-aos="fade-right" data-aos-delay="150">
                            <span className="qNum">Q2</span>
                            <div className="bubbleQ">투홈백은 반납하지 않아도 되나요?</div>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-delay="200">
                            <div className="bubbleA">
                                투홈백은 구매하신 고객님의 소유로 반납하지 않으셔도 됩니다.
                            </div>
                            <span className="aNum">A2</span>
                        </div>
                    </div>

                    <div className="txt fw600">
                        <div className="left" data-aos="fade-right" data-aos-delay="300">
                            <span className="qNum">Q3</span>
                            <div className="bubbleQ">투홈백은 어떻게 사용하나요?</div>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-delay="350">
                            <div className="bubbleA">
                                새벽 배송 상품을 주문하시며, 주문서에서 투홈백을 선택하세요.
                                <br />
                                현관 앞에 투홈백을 내놓으시면 가방 안에 상품을 담아드립니다.
                            </div>
                            <span className="aNum">A3</span>
                        </div>
                    </div>

                    <div className="txt fw600">
                        <div className="left" data-aos="fade-right" data-aos-delay="450">
                            <span className="qNum">Q4</span>
                            <div className="bubbleQ">회수용 보냉백을 반납해야 하나요?</div>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-delay="500">
                            <div className="bubbleA">
                                상품을 신선하게 보관하는 역할을 하는 회수용 보냉백은 <br />
                                기사님의 운반 편의를 위해 고안한 가방이기도 합니다.
                            </div>
                            <span className="aNum">A4</span>
                        </div>
                    </div>
                </div>
            </Con4Style>
        </DawnDeliveryConStyle>
    );
};

export default DawnDeliveryCon;
