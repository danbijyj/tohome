import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import HeartButton from '../../ui/HeartButton';
import { BsCart } from 'react-icons/bs';

const CategoryItem = ({ product, heartVariant = 'overlay', onUnliked }) => {
    const { thumbnail, name, price, discountedPrice, isDiscounted, discountRate } = product || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const authed = useSelector((s) => s.auth?.authed);

    const idCandidate =
        product?.num ??
        product?.id ??
        product?.fruitId ??
        product?.grainId ??
        product?.seafoodId ??
        product?.meatId ??
        product?.riceId ??
        product?.sideId ??
        product?.seasoningId ??
        product?.bakeryId ??
        product?.snackId ??
        product?.liquidId;

    const n = Number(idCandidate);
    const safeNum = Number.isFinite(n) ? n : null;

    const to = safeNum != null ? `/product/${safeNum}` : '/';
    const scrollTop = () => window.scrollTo({ top: 0, left: 0 });

    const handleAddCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (safeNum == null) return;
        dispatch(cartActions.addToCart({ num: safeNum, qty: 1, product }));
    };

    const fmt = (v) => Number(v || 0).toLocaleString();

    const onHeartClickCapture = (e) => {
        if (authed) return;
        e.preventDefault();
        e.stopPropagation();
        const ok = window.confirm('좋아요를 추가하려면 로그인 해야합니다. 로그인 하시겠습니까?');
        if (ok) {
            const redirectTo = location.pathname + location.search + location.hash;
            navigate('/login', { state: { redirectTo } });
        }
    };

    return (
        <li>
            <Link to={to} onClick={scrollTop}>
                <div className="img-wrap">
                    <img src={thumbnail} alt={name} loading="lazy" />
                    {heartVariant === 'overlay' && (
                        <div className="overlay">
                            <span onClickCapture={onHeartClickCapture}>
                                <HeartButton
                                    productId={safeNum}
                                    variant="overlay"
                                    onUnliked={onUnliked}
                                />
                            </span>
                            <button
                                className="icon-btn"
                                type="button"
                                onClick={handleAddCart}
                                disabled={safeNum == null}
                                aria-label="장바구니 담기"
                            >
                                <BsCart />
                            </button>
                        </div>
                    )}
                </div>

                {heartVariant === 'mypage' && (
                    <span onClickCapture={onHeartClickCapture}>
                        <HeartButton
                            productId={safeNum}
                            variant="mypage"
                            onUnliked={onUnliked}
                            className="heart-in-img"
                        />
                    </span>
                )}

                <h3>
                    {String(name || '')
                        .split('\n')
                        .map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                </h3>

                <div className="price-box">
                    {isDiscounted ? (
                        <p className="discount">{fmt(price)}원</p>
                    ) : (
                        <p className="discount">{''}</p>
                    )}
                    <p className="price">
                        {isDiscounted && <span>{discountRate}%</span>}
                        {fmt(isDiscounted ? discountedPrice : price)}원
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default CategoryItem;
