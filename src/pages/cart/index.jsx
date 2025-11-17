import CartList from '../../components/cart/CartList';
import CartOrder from '../../components/cart/CartOrder';
import CartResult from '../../components/cart/CartResult';
import CartSide from '../../components/cart/CartSide';
import { CartBottomStyle, CartWrap } from './style';
import { useMemo, useState } from 'react';
import CartEmpty from '../../components/cart/CartEmpty';
import { useSelector } from 'react-redux';

const Cart = () => {
    const [isCartTab, setIsCartTab] = useState('List');
    const [isMenuTab, setIsMenuTab] = useState('새벽배송');
    const { carts } = useSelector((state) => state.cart);

    const brandCarts = useMemo(
        () => carts.filter((c) => c.details?.deliveryType === '브랜드직송'),
        [carts]
    );

    const giftCarts = useMemo(() => carts.filter((c) => !!c.giftId), [carts]);
    const dawnCarts = useMemo(() => carts.filter((c) => !c.giftId), [carts]);

    const displayCarts = useMemo(() => {
        if (isMenuTab === '브랜드직송') return brandCarts;
        if (isMenuTab === '선물하기') return giftCarts;
        if (isMenuTab === '정기구독') return [];
        return dawnCarts;
    }, [isMenuTab, brandCarts, giftCarts, dawnCarts]);

    return (
        <CartWrap>
            <div className="inner">
                <div className="steps">
                    <div className="cart box" onClick={() => setIsCartTab('List')}>
                        <span className="dot on"></span>
                        <span className="txt on ">장바구니</span>
                    </div>
                    <div
                        className={`line ${
                            isCartTab === 'Order' || isCartTab === 'Result' ? 'on' : ''
                        }`}
                    ></div>
                    <div className="delivery box" onClick={() => setIsCartTab('Order')}>
                        <span
                            className={`dot ${
                                isCartTab === 'Order' || isCartTab === 'Result' ? 'on' : ''
                            }`}
                        ></span>
                        <span
                            className={`txt ${
                                isCartTab === 'Order' || isCartTab === 'Result' ? 'on' : ''
                            }`}
                        >
                            배송정보 입력
                        </span>
                    </div>
                    <div className={`line ${isCartTab === 'Result' ? 'on' : ''}`}></div>
                    <div className="pay box" onClick={() => setIsCartTab('Result')}>
                        <span className={`dot ${isCartTab === 'Result' ? 'on' : ''}`}></span>
                        <span className={`txt ${isCartTab === 'Result' ? 'on' : ''}`}>
                            결제하기
                        </span>
                    </div>
                </div>

                <div className="menu">
                    <ul>
                        <li
                            className={isMenuTab === '새벽배송' ? 'on' : ''}
                            onClick={() => setIsMenuTab('새벽배송')}
                        >
                            새벽배송 {dawnCarts.length}
                        </li>
                        <li
                            className={isMenuTab === '선물하기' ? 'on' : ''}
                            onClick={() => setIsMenuTab('선물하기')}
                        >
                            선물하기 {giftCarts.length}
                        </li>
                        <li
                            className={isMenuTab === '정기구독' ? 'on' : ''}
                            onClick={() => setIsMenuTab('정기구독')}
                        >
                            정기구독
                        </li>
                        <li
                            className={isMenuTab === '브랜드직송' ? 'on' : ''}
                            onClick={() => setIsMenuTab('브랜드직송')}
                        >
                            브랜드직송 {brandCarts.length}
                        </li>
                    </ul>
                </div>

                <CartBottomStyle>
                    {carts.length > 0 ? (
                        <>
                            {isCartTab === 'List' && (
                                <CartList setIsCartTab={setIsCartTab} items={displayCarts} />
                            )}
                            {isCartTab === 'Order' && <CartOrder />}
                            {(isCartTab === 'List' || isCartTab === 'Order') && (
                                <CartSide
                                    setIsCartTab={setIsCartTab}
                                    isCartTab={isCartTab}
                                    isMenuTab={isMenuTab}
                                />
                            )}
                            {isCartTab === 'Result' && <CartResult />}
                        </>
                    ) : (
                        <CartEmpty />
                    )}
                </CartBottomStyle>
            </div>
        </CartWrap>
    );
};

export default Cart;
