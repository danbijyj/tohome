import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';

const NONMEMBER_ROUTE = '/order/guest';

const DELIVERY_THRESHOLD = 10000;
const DELIVERY_FEE = 3000;

const toNum = (v) => {
    const n = Number(String(v ?? '').replace(/[^\d.-]/g, ''));
    return Number.isFinite(n) ? n : 0;
};

const lineTotals = (item) => {
    const qty = Number(item?.quantity) || 1;
    const price = toNum(item?.price);
    const disc =
        item?.discountedPrice != null && toNum(item.discountedPrice) !== 0
            ? toNum(item.discountedPrice)
            : null;
    const unit = disc != null ? disc : price;
    return { original: price * qty, discounted: unit * qty };
};

const CartSide = ({ setIsCartTab, isCartTab, isMenuTab }) => {
    const { carts } = useSelector((state) => state.cart);
    const { authed } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts, dispatch]);

    const viewCarts = useMemo(() => {
        if (!Array.isArray(carts)) return [];
        if (isMenuTab === '선물하기') return carts.filter((c) => !!c.giftId);
        if (isMenuTab === '브랜드직송')
            return carts.filter(
                (c) => c.deliveryType === '브랜드직송' || c.details?.deliveryType === '브랜드직송'
            );
        if (isMenuTab === '새벽배송') return carts.filter((c) => !c.giftId);
        return carts;
    }, [carts, isMenuTab]);

    const { tabPriceTotal, tabDiscount, tabDeliveryFee, tabPayable } = useMemo(() => {
        let priceSum = 0;
        let discountedSum = 0;
        for (const item of viewCarts) {
            const { original, discounted } = lineTotals(item);
            priceSum += original;
            discountedSum += discounted;
        }
        const discount = Math.max(0, priceSum - discountedSum);
        const delivery =
            discountedSum >= DELIVERY_THRESHOLD ? 0 : viewCarts.length > 0 ? DELIVERY_FEE : 0;
        const payable = discountedSum + delivery;
        return {
            tabPriceTotal: priceSum,
            tabDiscount: discount,
            tabDeliveryFee: delivery,
            tabPayable: payable,
        };
    }, [viewCarts]);

    const fmt = (n) => (Number.isFinite(n) ? n : 0).toLocaleString();

    const onEmpty = () => {
        const z = window.confirm('장바구니에 제품이 없습니다. 구매 페이지로 이동합니다.');
        dispatch(cartActions.emptyCart(z));
        if (z) {
            navigate(`/`);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    };

    const primaryButtonLabel =
        isMenuTab === '선물하기' ? '선물하기' : authed ? '주문하기' : '비회원 주문하기';

    const handlePrimaryClick = () => {
        if (isMenuTab === '선물하기') {
            setIsCartTab('Order');
            return;
        }
        if (authed) {
            setIsCartTab('Order');
            return;
        }
        const goLogin = window.confirm('로그인이 필요합니다. 로그인 하시겠습니까?');
        if (goLogin) {
            navigate('/login', { state: { redirectTo: '/cart' } });
        } else {
            navigate(NONMEMBER_ROUTE);
        }
    };

    return (
        <div className="countBox">
            <div className="total">
                <div className="priceT pretendard">
                    <span>총 금액</span>
                    <span>{fmt(tabPriceTotal)}원</span>
                </div>
                <div className="discountT pretendard">
                    <span>총 할인금액</span>
                    <span>{fmt(tabDiscount)}원</span>
                </div>
                <div className="delivery pretendard">
                    <span>총 배송비</span>
                    <span>{fmt(tabDeliveryFee)}원</span>
                </div>
            </div>

            <div className="line"></div>

            <div className="cost pretendard">
                <p>총 예상금액</p>
                <p>{fmt(tabPayable)}원</p>
            </div>

            <div className="buttons">
                {isCartTab === 'List' && (
                    <div className="CartListB">
                        <button disabled={viewCarts.length === 0} onClick={handlePrimaryClick}>
                            {primaryButtonLabel}
                        </button>
                    </div>
                )}
                {isCartTab === 'Order' && (
                    <div className="CartOrderB">
                        <button onClick={() => setIsCartTab('Result')}>결제하기</button>
                        <button onClick={onEmpty}>취소하기</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSide;
