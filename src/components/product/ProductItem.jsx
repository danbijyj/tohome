import { useNavigate } from 'react-router-dom';
import { ProductItemStyle } from './style';
import { BsCart2 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import Checkbox from '../../ui/CheckBox';
import HeartButton from '../../ui/HeartButton';

const formatPrice = (n) => new Intl.NumberFormat('ko-KR').format(n ?? 0);

const ProductItem = ({
    product,
    showCheckbox = true,
    isSelected = false,
    onSelect,
    idx,
    heartVariant = 'overlay',
    onUnliked,
    showDesc = false,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!product) return null;

    const num = Number(product.num);
    const safeNum = Number.isFinite(num) ? num : null;

    const handleClick = () => {
        if (safeNum == null) return;
        navigate(`/product/${safeNum}`);
        window.scrollTo({ top: 0, left: 0 });
    };

    const {
        thumbnail,
        name = '',
        price = 0,
        discountedPrice,
        isDiscounted = false,
        discountRate,
        info,
    } = product;

    const handleAddToCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (safeNum == null) return;
        dispatch(cartActions.addToCart({ num: safeNum, qty: 1, product }));
    };

    return (
        <ProductItemStyle>
            <div className="img-wrap">
                <img src={thumbnail} alt={name} onClick={handleClick} />
                {heartVariant === 'overlay' && (
                    <div className="overlay">
                        <HeartButton productId={safeNum} variant="overlay" />
                        <button
                            className="icon-btn"
                            aria-label="장바구니 담기"
                            onClick={handleAddToCart}
                            disabled={safeNum == null}
                        >
                            <BsCart2 />
                        </button>
                    </div>
                )}
                <HeartButton
                    productId={safeNum}
                    variant={heartVariant === 'mypage' ? 'mypage' : 'overlay'}
                    onUnliked={onUnliked}
                    className="heart-in-img"
                />
                {showCheckbox && (
                    <Checkbox
                        htmlFor={`recipe-${safeNum ?? idx}`}
                        right="15px"
                        top="15px"
                        checked={!!isSelected}
                        onChange={(e) => {
                            if (onSelect && safeNum != null) onSelect(safeNum, e.target.checked);
                        }}
                    />
                )}
            </div>

            <h3 onClick={handleClick}>
                {name.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </h3>

            <div className="price-box" onClick={handleClick}>
                {isDiscounted ? (
                    <p className="discount">{formatPrice(price)}원</p>
                ) : (
                    <p className="discount">{''}</p>
                )}
                <p className="price">
                    {isDiscounted && <span>{discountRate}%</span>}
                    {formatPrice(isDiscounted ? discountedPrice : price)}원
                </p>
            </div>

            {showDesc && heartVariant !== 'mypage' && info && (
                <div className="des pretendard fw300">{info}</div>
            )}
        </ProductItemStyle>
    );
};

export default ProductItem;
