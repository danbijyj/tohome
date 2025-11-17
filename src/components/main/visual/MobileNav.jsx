import React from 'react';
import { MobileNavStyle } from './style';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <MobileNavStyle>
            <ul className="btnWrap">
                <li>
                    <Link to="/directDelivery">
                        <img src="/images/main/mobileIcon1.png" alt="" />
                        <p>브랜드직송관</p>
                    </Link>
                </li>
                <li>
                    <Link to="/specialBrand">
                        <img src="/images/main/mobileIcon2.png" alt="" />
                        <p>특화브랜드관</p>
                    </Link>
                </li>
                <li>
                    <Link to="/gift">
                        <img src="/images/main/mobileIcon3.png" alt="" />
                        <p>선물하기</p>
                    </Link>
                </li>
                <li>
                    <Link to="/healFood">
                        <img src="/images/main/mobileIcon4.png" alt="" />
                        <p>구독하기</p>
                    </Link>
                </li>
            </ul>
        </MobileNavStyle>
    );
};

export default MobileNav;
