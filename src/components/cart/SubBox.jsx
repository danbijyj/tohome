import { useMemo } from 'react';
import { ItemBox } from './style';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoGiftOutline, IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import HeartButton from '../../ui/HeartButton';

const toNum = (v) => {
    const n = Number(String(v ?? '').replace(/[^\d.-]/g, ''));
    return Number.isFinite(n) ? n : 0;
};

const SubBox = ({ cart, setIsCartTab }) => {
    const { num, name, price, discountedPrice, thumbnail, pricePerUnit, quantity } = cart;

    const dispatch = useDispatch();

    const n = Number(num);
    const safeNum = Number.isFinite(n) ? n : null;

    const { qty, lineOriginal, lineDiscounted } = useMemo(() => {
        const qtySafe = Number(quantity) || 1;
        const priceNum = toNum(price);

        const discNum =
            discountedPrice != null && toNum(discountedPrice) !== 0 ? toNum(discountedPrice) : null;

        return {
            qty: qtySafe,
            lineOriginal: priceNum * qtySafe,
            lineDiscounted: discNum != null ? discNum * qtySafe : null,
        };
    }, [price, discountedPrice, quantity]);

    return (
        <ItemBox>
            <img className="image" src={thumbnail} alt={name} />
            <div className="txt">
                <div className="name">
                    <p>{name}</p>
                    <span>{pricePerUnit}</span>
                </div>

                <div className="price">
                    {lineDiscounted != null ? (
                        <>
                            <p>{lineDiscounted.toLocaleString()}원</p>
                            <span>{lineOriginal.toLocaleString()}원</span>
                        </>
                    ) : (
                        <p>{lineOriginal.toLocaleString()}원</p>
                    )}
                </div>

                <div className="calc">
                    <button
                        className="minus"
                        onClick={() => dispatch(cartActions.decreaseQuantity(num))}
                    >
                        <FaMinus />
                    </button>
                    <p className="num">{qty}</p>
                    <button
                        className="plus"
                        onClick={() => dispatch(cartActions.increaseQuantity(num))}
                    >
                        <FaPlus />
                    </button>
                </div>

                <div className="purchase">
                    <button onClick={() => setIsCartTab('Order')}>바로구매</button>
                </div>

                <div className="icons">
                    <div className="heart-wrap">
                        <HeartButton
                            productId={safeNum}
                            variant="overlay"
                            className="heart-in-cart"
                        />
                    </div>
                    <div
                        className="cancel"
                        onClick={() => dispatch(cartActions.removeFromCart(num))}
                    >
                        <IoClose />
                    </div>
                </div>
            </div>
        </ItemBox>
    );
};

export default SubBox;
