import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';
import { CategoryListWrap, CategoryItemWrap } from './style';
import { cartActions } from '../../store/modules/cartSlice';

const CategoryList = ({ products }) => {
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.cart.sortType);
    const handleSort = (type) => {
        dispatch(cartActions.setSortType(type));
    };
    const finalPrice = (product) => {
        return product.isDiscounted && product.discountedPrice
            ? product.discountedPrice
            : product.price;
    };
    const base = Array.isArray(products) ? products : [];
    const sortedProducts = [...base].sort((a, b) => {
        if (sortType === '판매량순') {
            const aRank = a.tags?.find((t) => t.name === '베스트')?.rank ?? Infinity;
            const bRank = b.tags?.find((t) => t.name === '베스트')?.rank ?? Infinity;
            return aRank - bRank;
        }
        if (sortType === '신상품순') {
            const aRank = a.tags?.find((t) => t.name === '신상품')?.rank ?? Infinity;
            const bRank = b.tags?.find((t) => t.name === '신상품')?.rank ?? Infinity;
            return aRank - bRank;
        }
        if (sortType === '높은가격순') {
            return finalPrice(b) - finalPrice(a);
        }
        if (sortType === '낮은가격순') {
            return finalPrice(a) - finalPrice(b);
        }
        return 0;
    });
    return (
        <CategoryListWrap>
            <div>
                <ul className="category-sort">
                    {['판매량순', '신상품순', '높은가격순', '낮은가격순'].map((type) => (
                        <li
                            key={type}
                            className={sortType === type ? 'active' : ''}
                            onClick={() => handleSort(type)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="category-item-wrap">
                <CategoryItemWrap>
                    {sortedProducts.map((item) => (
                        <CategoryItem key={item.id} product={item} />
                    ))}
                </CategoryItemWrap>
            </div>
        </CategoryListWrap>
    );
};

export default CategoryList;
