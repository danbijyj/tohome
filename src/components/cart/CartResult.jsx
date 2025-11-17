import { useDispatch, useSelector } from 'react-redux';
import { ResultBoxStyle, ResultStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { cartActions } from '../../store/modules/cartSlice';

const CartResult = () => {
    const {
        priceTotal,
        quantityTotal,
        carts,
        totalDiscount,
        totalPayable,
        totalDiscounted,
        totalDeliveryFee,
    } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts]);

    const onMain = () => {
        navigate(`/`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const fmt = (n) => (Number.isFinite(n) ? n : 0).toLocaleString();
    return (
        <ResultStyle>
            <ResultBoxStyle>
                <div className="innerBox">
                    <div className="title">
                        <p>현대식품관</p>
                        <strong>결제가 완료되었습니다</strong>
                    </div>
                    <div className="total">
                        <div className="price">
                            <span>총 금액</span>
                            <span>{fmt(priceTotal)}원</span>
                        </div>
                        <div className="price">
                            <span>총 할인금액</span>
                            <span>{fmt(totalDiscount)}원</span>
                        </div>
                        <div className="price">
                            <span>총 배송비</span>
                            <span>{fmt(totalDeliveryFee)}원</span>
                        </div>
                    </div>
                    <div className="cost">
                        <p>최종 결제 금액</p>
                        <p>{fmt(totalPayable)}원</p>
                    </div>
                    <div className="orderButton">
                        <button onClick={onMain}>결제내역 보기</button>
                        <button onClick={onMain}>계속 쇼핑하기</button>
                    </div>
                </div>
            </ResultBoxStyle>
        </ResultStyle>
    );
};

export default CartResult;
