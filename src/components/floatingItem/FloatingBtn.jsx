import { useEffect, useState } from 'react';
import { FloatingBtnStyle } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IoIosArrowDropup } from 'react-icons/io';
import { useSelector } from 'react-redux';

const FloatingBtn = () => {
    const { carts } = useSelector((state) => state.cart);
    const { authed } = useSelector((state) => state.auth);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const navigate = useNavigate();

    const onClick1 = () => {
        navigate('/dawnDelivery');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleCartClick = () => {
        if (!authed) {
            const goLogin = window.confirm(
                '로그인이 필요합니다. 로그인 하시겠습니까?\n(취소를 누르면 장바구니로 이동합니다.)'
            );
            if (goLogin) {
                navigate('/login', { state: { redirectTo: '/cart' } });
                return;
            }
        }
        navigate('/cart');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <FloatingBtnStyle>
                    <div>
                        <p className="img-box" onClick={onClick1}>
                            <img src="/images/icon/icon_dawnDelivery.png" alt="새벽투홈" />
                            새벽투홈
                        </p>
                        <p
                            className="img-box"
                            onClick={handleCartClick}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="cart">
                                <RiShoppingCartLine />
                                <span>{carts.length}</span>
                            </span>
                            장바구니
                        </p>
                    </div>
                    <button className="top" onClick={scrollToTop}>
                        <p>TOP</p>
                        <span>
                            <IoIosArrowDropup />
                        </span>
                    </button>
                </FloatingBtnStyle>
            )}
        </>
    );
};

export default FloatingBtn;
