import React from 'react';
import { FooterStyle } from './style';
import FooterBody from './FooterBody';
import FooterInfo from './FooterInfo';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="inner">
                <FooterBody />
                <FooterInfo />
            </div>
            <div className="copyright pretendard">
                Copyright © Hyundai Department Store. All rights reserved.
            </div>
        </FooterStyle>
    );
};

export default Footer;
