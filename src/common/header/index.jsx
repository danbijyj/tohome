import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HeaderStyle } from './style';

import FloatingBtn from '../../components/floatingItem/FloatingBtn';
import NavMobile from './NavMobile';
import { useEffect, useRef, useState } from 'react';

const SCROLL_THRESHOLD = 10;

const Header = () => {
    const headerRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const expanded = hovered || !scrolled;

    return (
        <HeaderStyle
            className="header"
            ref={headerRef}
            $expanded={expanded}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="inner">
                <div className="status-bar">
                    <img src="/images/common/status-bar.png" alt="" />
                </div>
                <div className="headBody">
                    <h1>
                        <Link to="/">
                            <img src="/images/common/logo_tohome.png" alt="로고" />
                            <img
                                className="hoverImg"
                                src="/images/common/logo_tohome1.png"
                                alt="로고"
                            />
                        </Link>
                    </h1>
                </div>

                <Navbar expanded={expanded} />
            </div>

            <FloatingBtn />
            <NavMobile />
        </HeaderStyle>
    );
};

export default Header;
