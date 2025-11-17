import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import TopSection from '../../components/topSection/TopSection';
import { DirectDeliveryWrap } from './style';
import { useSelector } from 'react-redux';
import ProductList from '../../components/product/ProductList';
import ProductTop from '../../components/product/ProducTools/ProductTop';

const DirectDelivery = () => {
    const [sortType, setSortType] = useState('판매량순');
    const [selectedSub, setSelectedSub] = useState('전체보기');

    const { AllDataList } = useSelector((state) => state.cart);

    const dataByNum = useMemo(() => {
        if (!AllDataList) return [];
        return AllDataList.filter(
            (product) => product.details?.deliveryType === '브랜드직송'
        ).slice(0, 40);
    }, [AllDataList]);

    const subCategories = useMemo(() => {
        return dataByNum.length > 0 ? [...new Set(dataByNum.map((f) => f.category.main))] : [];
    }, [dataByNum]);

    const sortedData = useMemo(() => {
        const arr = [...dataByNum];

        const getRank = (x) => Number(x?.rank ?? 0);
        const getPrice = (x) => Number(x?.discountedPrice ?? x?.price ?? 0);

        switch (sortType) {
            case '판매량순':
                return arr.sort((a, b) => {
                    const r = getRank(b) - getRank(a);
                    return r !== 0 ? r : dataByNum.indexOf(a) - dataByNum.indexOf(b);
                });
            case '신상품순':
                return arr
                    .filter((p) => p.tags?.some((t) => t.name === '신상품'))
                    .sort((a, b) => {
                        const r = getRank(b) - getRank(a);
                        return r !== 0 ? r : dataByNum.indexOf(a) - dataByNum.indexOf(b);
                    });
            case '높은가격순':
                return arr.sort((a, b) => getPrice(b) - getPrice(a));
            case '낮은가격순':
                return arr.sort((a, b) => getPrice(a) - getPrice(b));
            default:
                return arr;
        }
    }, [dataByNum, sortType]);

    const filteredData = useMemo(() => {
        if (selectedSub === '전체보기') return sortedData;
        return sortedData.filter((p) => p.category?.main === selectedSub);
    }, [sortedData, selectedSub]);

    return (
        <DirectDeliveryWrap>
            <div className="inner">
                <TopSection
                    title="브랜드직송관"
                    subtitle="누군가의 손끝에서 시작된 정성이, 당신의 식탁 위에 도착합니다."
                    $borderTop="1px solid #000"
                    $borderBottom="1px solid #000"
                />

                <div className="banner">
                    <div className="left">
                        <div className="points">
                            <div className="point">
                                <div className="title">
                                    <span>Point 1</span> 브랜드가 직접 선택한 신뢰 배송
                                </div>
                                <div className="desc pretendard">
                                    상품 준비 상황에 따라 브랜드가 직접 가장 최적의 배송 방법을
                                    선택해, 신선함과 품질을 그대로 전합니다.
                                </div>
                            </div>
                            <div className="row">
                                <div className="point">
                                    <div className="title">
                                        <span>Point 2</span> MD의 안목으로 고른 검증된 브랜드
                                    </div>
                                    <div className="desc pretendard">
                                        현대식품관 투홈 MD가 지금 가장 주목받는, 믿고 추천할 수 있는
                                        브랜드만을 엄선했습니다.
                                    </div>
                                </div>
                                <div className="point">
                                    <div className="title">
                                        <span>Point 3</span> 로컬의 맛, 한 번에 만나보는 미식의
                                        즐거움
                                    </div>
                                    <div className="desc pretendard">
                                        전국 맛집을 투홈에 다 담았습니다.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="notice">
                            <div className="words">
                                <p>브랜드직송 배송안내</p>
                                <span className="dot" />
                                <span className="pretendard">주문 후 1 ~ 3일 후 도착</span>
                                <span className="dot" />
                                <span className="pretendard">
                                    도착 가능 요일 : 화 ~ 토 (공휴일 제외)
                                </span>
                            </div>
                            <span className="pretendard">
                                * 상품별로 배송일정이 다를 수 있으니 상품상세를 확인해주세요
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/images/directDelivery/bannerImg.png" alt="" />
                    </div>
                </div>

                <ProductTop
                    className="menu"
                    subCategories={subCategories}
                    selectedSub={selectedSub}
                    setSelectedSub={setSelectedSub}
                />
                <div className="filter-wrap pretendard">
                    {['판매량순', '신상품순', '높은가격순', '낮은가격순'].map((type) => (
                        <p
                            key={type}
                            onClick={() => setSortType(type)}
                            className={sortType === type ? 'on' : ''}
                        >
                            {type}
                        </p>
                    ))}
                </div>
                <ProductList products={filteredData} showCheckbox={false} />
            </div>
        </DirectDeliveryWrap>
    );
};

export default DirectDelivery;
