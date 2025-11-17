import React from 'react';
import { DetailArtFaqStyle } from './style';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const DetailArtFaq = () => {
    return (
        <DetailArtFaqStyle>
            <div className="boxWrap">
                <Swiper
                    modules={[FreeMode]}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                    }}
                    slidesPerView="auto"
                    spaceBetween={20}
                    loop={false}
                >
                    <SwiperSlide className="slide">
                        <div className="box">
                            <strong>주문취소 안내</strong>
                            <div className="article">
                                <div className="txt">
                                    <p>
                                        결제완료 이후 주문의 상태가 ‘상품준비중’으로 변경될 경우,
                                        취소가 제한됩니다.
                                    </p>
                                    <p>
                                        비회원은 고객문의 &gt; 비회원주문조회에서 주문을 취소하실 수
                                        있습니다.
                                    </p>
                                    <p>
                                        일부 예약상품, 정기배송, 정기구독 등의 예약상품은 배송 3~4일
                                        전까지는 취소하실 수 있습니다.
                                    </p>
                                    <p>주문완료된 부재시즌 상품은 불가능합니다.</p>
                                    <p>
                                        카드혜택으로 카드사 청구에 따라, 취소 시 사용하신 H.Point,
                                        H.Bonus, 쿠폰 등은 모두 복원됩니다. <br /> 단, 취소시
                                        사용기한이 지난 혜택은 복원되지 않습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <div className="box">
                            <strong>교환/반품 안내</strong>
                            <div className="article">
                                <p>
                                    ※ 상품별로 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
                                    안내사항보다 우선적용됩니다.
                                </p>
                                <div className="txt">
                                    <p>상품에 문제가 있는 경우</p>
                                    <span>: 냉장/냉동상품은 제품수령 후 최대 2일(48시간) 내,</span>
                                    <span>
                                        상품을 촬영한 사진과 함께 1:1문의 게시판에 등록하시면,
                                    </span>
                                    <span>담당자 확인 후 교환/반품이 진행됩니다.</span>
                                    <span>
                                        : 상온상품(유통기한 30일 이상)의 기타상품은 제품수령 후
                                    </span>
                                    <span>
                                        3개월 이내에 사진과 함께 1:1문의 게시판에 등록하시면,
                                    </span>
                                    <span>담당자 확인 후 교환/반품이 진행됩니다.</span>
                                    <span>
                                        이때 발생하는 모든 배송비는 현대식품관 측에서 부담합니다.
                                    </span>
                                    <p>단순변심/주문착오의 경우</p>
                                    <span>: 냉장/냉동상품은 교환/반품이 불가능합니다.</span>
                                    <span>
                                        : 상온상품(유통기한 30일 이상)의 기타상품은 제품수령 후
                                    </span>
                                    <span>
                                        최대 7일 이내에 사진과 함께 1:1문의 게시판에 등록하시면,
                                        담당자 확인 후 교환/반품이 진행됩니다.
                                    </span>
                                    <span>
                                        이때 발생하는 모든배송비 (교환·왕복, 반품·편도)는 고객님께서
                                        부담하셔야 합니다.
                                    </span>
                                    <p>교환/반품이 불가한 경우</p>
                                    <span>: 교환/반품 가능기간을 초과하였을 경우</span>
                                    <span>
                                        : 상품 및 구성품을 사용하였거나 부주의로 인하여 상품이
                                        훼손(파손/고장/오염 등)된 경우
                                    </span>
                                    <span>
                                        : 상품 사용 시 상품설명에 기재된 주의사항을 지키지 않은 경우
                                    </span>
                                    <span>: 상품을 파손했거나 분실했을 경우</span>
                                    <span>: 배송 중 발생한 변심의 경우</span>
                                    <span>
                                        : 기타 ‘전자상거래 등에서의 소비자보호에 관한 법률’이 정한
                                        청약철회 제한사유에 해당되는 경우
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </DetailArtFaqStyle>
    );
};

export default DetailArtFaq;
