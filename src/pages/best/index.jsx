import { useSelector } from 'react-redux';
import { BestWrap } from './style';
import ProductList from '../../components/product/ProductList';
import TopSection from '../../components/topSection/TopSection';
import { useMemo, useState } from 'react';

const Best = () => {
    const { AllDataList } = useSelector((state) => state.cart);

    const dataByNum = useMemo(() => {
        const m = new Map();
        AllDataList?.forEach((item) => {
            const isBest = item.tags?.some((t) => t.name === '베스트');
            if (isBest && !item.giftId && !m.has(item.num)) {
                m.set(item.num, item);
            }
        });
        return Array.from(m.values());
    }, [AllDataList]);

    const [sortType, setSortType] = useState('판매량순');

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

    return (
        <BestWrap>
            <div className="inner">
                <section className="top-wrap">
                    <TopSection
                        $borderTop="none"
                        $borderBottom="none"
                        className="top-line"
                        title={'투홈 베스트'}
                        subtitle={'현대식품관 투홈의 인기 상품을 만나보세요'}
                    />
                </section>
                <div className="filter">
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
                </div>

                <ProductList products={sortedData} showCheckbox={false} className="product-list" />
            </div>
        </BestWrap>
    );
};

export default Best;
