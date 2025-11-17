import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ProductResultStyle } from './style';
import ProductList from '../ProductList';

const FILTER_TABS = ['전체보기', '새벽투홈', '브랜드직송', '선물하기'];
const SORT_TABS = ['판매량순', '신상품순', '높은가격순', '낮은가격순'];
const toKey = (v) => (v ?? '').toString().toLowerCase();

const ProductResult = () => {
    const { AllDataList } = useSelector((s) => s.cart);
    const [params] = useSearchParams();
    const qFromUrl = params.get('q') || '';

    const [query, setQuery] = useState(qFromUrl);
    const [activeFilter, setActiveFilter] = useState('전체보기');
    const [activeSort, setActiveSort] = useState('판매량순');

    useEffect(() => setQuery(qFromUrl), [qFromUrl]);

    const filtered = useMemo(() => {
        const base = Array.isArray(AllDataList) ? AllDataList : [];
        const q = toKey(query).trim();

        return base.filter((p) => {
            if (activeFilter === '새벽투홈' && p.deliveryType !== '새벽배송') return false;
            if (activeFilter === '브랜드직송') {
                const isBrandDirect = p.deliveryType === '브랜드직송' || p.isBrandDirect === true;
                if (!isBrandDirect) return false;
            }
            if (activeFilter === '선물하기' && !p.giftId) return false;

            if (!q) return true;
            const bag = [
                p.name,
                p.des,
                ...(p.tags?.map((t) => t.name) ?? []),
                p.brandName,
                p.category,
            ]
                .filter(Boolean)
                .map(toKey)
                .join(' ');
            return bag.includes(q);
        });
    }, [AllDataList, activeFilter, query]);

    const sorted = useMemo(() => {
        const list = filtered.map((item, idx) => ({ ...item, originalIndex: idx }));
        return list.sort((a, b) => {
            if (activeSort === '판매량순' || activeSort === '신상품순') {
                const ar = a.rank ?? 0;
                const br = b.rank ?? 0;
                if (ar === br) return a.originalIndex - b.originalIndex;
                return br - ar;
            }
            if (activeSort === '높은가격순') {
                return (b.discountedPrice || b.price || 0) - (a.discountedPrice || a.price || 0);
            }
            if (activeSort === '낮은가격순') {
                return (a.discountedPrice || a.price || 0) - (b.discountedPrice || b.price || 0);
            }
            return 0;
        });
    }, [filtered, activeSort]);

    const displayQuery = query?.trim() ? query.trim() : '전체';

    return (
        <ProductResultStyle>
            <div className="inner">
                <section className="result-top">
                    <h2>
                        <strong>{displayQuery}</strong> 검색결과
                        <span> {sorted.length}</span>건
                    </h2>

                    <ul className="filter">
                        {FILTER_TABS.map((t) => (
                            <li
                                key={t}
                                className={activeFilter === t ? 'active' : ''}
                                onClick={() => setActiveFilter(t)}
                            >
                                {t}
                            </li>
                        ))}
                    </ul>

                    <ul className="sort">
                        {SORT_TABS.map((s) => (
                            <li
                                key={s}
                                className={activeSort === s ? 'active' : ''}
                                onClick={() => setActiveSort(s)}
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                </section>

                <ProductList products={sorted} showCheckbox={false} className="list" />
            </div>
        </ProductResultStyle>
    );
};

export default ProductResult;
