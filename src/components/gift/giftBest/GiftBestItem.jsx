import { Link, useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/modules/cartSlice';
import HeartButton from '../../../ui/HeartButton';

const GiftBestItem = ({ gift, heartVariant = 'overlay', onUnliked }) => {
    const item = gift;
    const { name, price, discountedPrice, isDiscounted, discountRate, thumbnail, tags = [] } = item;
    const bestTag = tags.find((t) => t.name === '베스트10');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const n = Number(item.num ?? item.giftId);
    const safeNum = Number.isFinite(n) ? n : null;

    const handleClick = () => {
        if (safeNum == null) return;
        navigate(`/product/${safeNum}`);
        window.scrollTo({ top: 0, left: 0 });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (safeNum == null) return;
        dispatch(cartActions.addToCart({ product: { ...item, num: safeNum }, qty: 1 }));
    };

    return (
        <li>
            <Link
                to={safeNum != null ? `/product/${safeNum}` : '/'}
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
            >
                <div className="best-img">
                    <img src={thumbnail} alt={name} onClick={handleClick} loading="lazy" />
                    <span className="ranking">{bestTag ? bestTag.rank : ''}</span>
                    {heartVariant === 'overlay' && (
                        <div className="overlay">
                            <HeartButton
                                productId={safeNum}
                                variant="overlay"
                                onUnliked={onUnliked}
                            />
                            <button
                                className="icon-btn"
                                type="button"
                                onClick={handleAdd}
                                disabled={safeNum == null}
                            >
                                <BsCart2 />
                            </button>
                        </div>
                    )}
                </div>

                {heartVariant === 'mypage' && (
                    <HeartButton
                        productId={safeNum}
                        variant="mypage"
                        onUnliked={onUnliked}
                        className="heart-in-img"
                    />
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
                        <p className="discount">{Number(price || 0).toLocaleString()}원</p>
                    ) : (
                        <p className="discount">{''}</p>
                    )}
                    <p className="price">
                        {isDiscounted && <span>{discountRate}%</span>}
                        {Number((isDiscounted ? discountedPrice : price) || 0).toLocaleString()}원
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default GiftBestItem;
