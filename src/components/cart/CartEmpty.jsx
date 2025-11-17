import React from 'react';
import { CartEmptyStyle } from './style';

const CartEmpty = () => {
    return (
        <CartEmptyStyle>
            <h2>장바구니가 비었습니다.</h2>
        </CartEmptyStyle>
    );
};

export default CartEmpty;
