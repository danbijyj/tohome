import React from 'react';
import { DetailArtSubStyle } from './style';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const DetailArtSub = ({ obj }) => {
    const {
        name,
        details: { barcode, size, manufacturer, expirationPolicy, itemName, storageMethod },
    } = obj;
    return (
        <DetailArtSubStyle>
            <div className="tableWrap">
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
                        <table className="cont">
                            <caption>상품필수정보</caption>
                            <colgroup>
                                <col className="col-k" />
                                <col className="col-v" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>바코드 정보</th>
                                    <td>
                                        {barcode ||
                                            Math.floor(100000000000 + Math.random() * 900000000000)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>크기(cm)</th>
                                    <td>{size || '상세페이지 참고'}</td>
                                </tr>
                                <tr>
                                    <th>포장단위별 내용물의 용량(중량), 수량, 크기</th>
                                    <td>
                                        [H-SWEET] 고당도 수박(한통 8kg) / 식품 특성상 중량은 3%
                                        내외의 차이가 발생할 수 있습니다.
                                    </td>
                                </tr>
                                <tr>
                                    <th>생산자, 수입품의 경우 수입자를 함께 표기</th>
                                    <td>
                                        본 상품은 다수의 포장센터로부터 납품받아 판매하는
                                        상품입니다.
                                        {manufacturer ? (
                                            <>
                                                주 포장센터는 "{manufacturer}"이며 이 밖의 포장
                                                업체의 물건이 혼재되는 이익의 과정에서 상품으로
                                                판매될 수 있습니다. 관련 문의사항은 고객센터로 문의
                                                주시면 안내 드리겠습니다.
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th>농수산물의 원산지 표시 등에 관한 법률에 따른 원산지</th>
                                    <td>
                                        상품 이미지 및 기본정보 내 원산지를 확인해주시기 바랍니다.
                                    </td>
                                </tr>
                                <tr>
                                    <th>제조연월일(포장일 또는 생산연도), 소비기한</th>
                                    <td>
                                        {expirationPolicy ||
                                            '생산일자 또는 포장일: 주문일 기준 6일 전이거나 그 이후 생산  또는 포장된 상품을 제공하고 있습니다.'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>품목 또는 명칭</th>
                                    <td>{itemName || '해당사항없음'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <table className="cont">
                            <caption>상품필수정보</caption>
                            <colgroup>
                                <col className="col-k" />
                                <col className="col-v" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>
                                        농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적
                                        표시
                                    </th>
                                    <td>해당사항없음</td>
                                </tr>
                                <tr>
                                    <th>
                                        수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른
                                        수입신고를 필함”의 문구
                                    </th>
                                    <td>해당사항없음</td>
                                </tr>
                                <tr>
                                    <th>상품 구성</th>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <th>보관방법 또는 취급방법</th>
                                    <td>{storageMethod || '상세페이지 참고'}</td>
                                </tr>
                                <tr>
                                    <th>소비자상담 관련 전화번호</th>
                                    <td>현대식품관 to home 고객센터(1800-9549)</td>
                                </tr>
                                <tr>
                                    <th>
                                        식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한
                                        주의사항
                                    </th>
                                    <td>상품상세 혹은 이미지참조</td>
                                </tr>
                            </tbody>
                        </table>
                    </SwiperSlide>
                </Swiper>
            </div>
        </DetailArtSubStyle>
    );
};

export default DetailArtSub;
