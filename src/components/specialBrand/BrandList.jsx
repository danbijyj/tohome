import { useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { useMemo, useState } from 'react';
import { BrandListStyle } from './style';
import ProductTop from '../product/ProducTools/ProductTop';

const BrandList = ({ brandTag }) => {
    const { AllDataList } = useSelector((state) => state.cart);
    const [sortType, setSortType] = useState('판매량순');
    const [selectedSub, setSelectedSub] = useState('전체보기');
    const brandTagMap = {
        Brand1Myeong: '명인명촌',
        Brand2Table: '1TABLE',
        Brand3Yehyang: '예향',
        Brand4Market: '동행마켓',
    };
    const filteredBrands = AllDataList?.filter(
        (item) => item.brandtag === brandTagMap[brandTag]
    );
    const subCategories =
        filteredBrands && filteredBrands.length > 0
            ? [
                  ...new Set(
                      filteredBrands.map((f) => f.category?.trim() || '기타')
                  ),
              ]
            : [];
    const getFilteredProducts = () => {
        if (!filteredBrands) return [];
        return selectedSub === '전체보기'
            ? filteredBrands
            : filteredBrands.filter(
                  (product) => product.category?.trim() === selectedSub?.trim()
              );
    };
    const getSortedProducts = () => {
        const products = getFilteredProducts().map((item, idx) => ({
            ...item,
            originalIndex: idx,
        }));
        return products.sort((a, b) => {
            if (sortType === '판매량순' || sortType === '신상품순') {
                if (a.rank === b.rank) return a.originalIndex - b.originalIndex;
                return b.rank - a.rank;
            }
            if (sortType === '높은가격순') {
                return (
                    (b.discountedPrice || b.price) -
                    (a.discountedPrice || a.price)
                );
            }
            if (sortType === '낮은가격순') {
                return (
                    (a.discountedPrice || a.price) -
                    (b.discountedPrice || b.price)
                );
            }
            return 0;
        });
    };
    return (
        <BrandListStyle>
            <ProductTop
                className="filter-category-wrap"
                fontSize="18px"
                fontWeight="300"
                subCategories={subCategories}
                selectedSub={selectedSub}
                setSelectedSub={setSelectedSub}
            />
            <div className="filter-wrap pretendard">
                {['판매량순', '신상품순', '높은가격순', '낮은가격순'].map(
                    (type) => (
                        <p
                            key={type}
                            onClick={() => setSortType(type)}
                            className={sortType === type ? 'on' : ''}
                        >
                            {type}
                        </p>
                    )
                )}
            </div>
            <ProductList products={getSortedProducts()} showCheckbox={false} />
        </BrandListStyle>
    );
};

export default BrandList;
