import { Link, useNavigate } from 'react-router-dom';
import FloatingMenuItem from './FloatingMenuItem';
import { FloatingMenuStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { IoClose } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const MenuItems = [
    {
        id: 1,
        menuTitle: '과일·채소',
        img: '/images/icon/menuitem_fruit.png',
        route: '/category/fruit',
    },
    {
        id: 2,
        menuTitle: '곡물·견과',
        img: '/images/icon/menuitem_grain.png',
        route: '/category/grain',
    },
    {
        id: 3,
        menuTitle: '생선·해산물·건어물',
        img: '/images/icon/menuitem_seafood.png',
        route: '/category/seafood',
    },
    {
        id: 4,
        menuTitle: '육류·달걀',
        img: '/images/icon/menuitem_meat.png',
        route: '/category/meat',
    },
    {
        id: 5,
        menuTitle: '밥·국·면',
        img: '/images/icon/menuitem_rice.png',
        route: '/category/rice',
    },
    {
        id: 6,
        menuTitle: '밑반찬·간식',
        img: '/images/icon/menuitem_sidedish.png',
        route: '/category/side',
    },
    {
        id: 7,
        menuTitle: '양념·오일·통조림',
        img: '/images/icon/menuitem_oil.png',
        route: '/category/seasoning',
    },
    {
        id: 8,
        menuTitle: '베이커리·치즈',
        img: '/images/icon/menuitem_bread.png',
        route: '/category/bakery',
    },
    {
        id: 9,
        menuTitle: '과자·초콜릿·캔디',
        img: '/images/icon/menuitem_candy.png',
        route: '/category/snack',
    },
    {
        id: 10,
        menuTitle: '물·우유·커피·음료',
        img: '/images/icon/menuitem_drink.png',
        route: '/category/liquid',
    },
];

const FloatingMenu = ({ setIsOpen, isOpen = true, headerOffset = 0, lockScroll = true }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authed, user } = useSelector((state) => state.auth);

    const onClose = () => setIsOpen?.(false);

    const onOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const onLogout = () => {
        dispatch(authActions.logout(user));
        navigate('/login');
        onClose();
    };

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);

        if (!isOpen || !lockScroll) return () => window.removeEventListener('keydown', onKey);

        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = 'hidden';
        if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [isOpen, lockScroll]);

    const node = (
        <FloatingMenuStyle
            onClick={onOverlayClick}
            style={{ '--header-offset': `${headerOffset}px` }}
            role="dialog"
            aria-modal="true"
        >
            <div className="panel" onClick={(e) => e.stopPropagation()}>
                <section className="mobile-logo-wrap">
                    <div className="mobile-logo-wrap-img">
                        <img src="/images/common/logo_tohome1.png" alt="tohome" />
                    </div>
                    <button type="button" className="close-btn" onClick={onClose} aria-label="닫기">
                        <IoClose />
                    </button>
                </section>

                <section className="mobile-login-wrap">
                    <ul className="mobile-login-wrap-list">
                        {authed ? (
                            <>
                                <li>
                                    <button type="button" onClick={onLogout}>
                                        로그아웃
                                    </button>
                                </li>
                                <li>
                                    <Link to="/myPage" onClick={onClose}>
                                        마이페이지
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" onClick={onClose}>
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/join" onClick={onClose}>
                                        회원가입
                                    </Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to="/" onClick={onClose}>
                                홈
                            </Link>
                        </li>
                    </ul>

                    <div className="mobile-login-wrap-title">
                        {authed ? (
                            <h4>
                                <span>{user?.name}</span>님 환영합니다
                            </h4>
                        ) : (
                            <strong>로그인을 해주세요.</strong>
                        )}
                    </div>
                </section>

                <section className="item-wrap">
                    {MenuItems.map((menu) => (
                        <Link key={menu.id} to={menu.route} onClick={onClose} className="menu-link">
                            <FloatingMenuItem menu={menu} />
                        </Link>
                    ))}
                </section>

                <section className="mobile-support-wrap">
                    <p>
                        <Link to="/support" onClick={onClose}>
                            공지사항
                        </Link>
                    </p>
                    <p>
                        <Link to="/support" onClick={onClose}>
                            고객센터
                        </Link>
                    </p>
                </section>
            </div>
        </FloatingMenuStyle>
    );

    return createPortal(node, document.body);
};

export default FloatingMenu;
