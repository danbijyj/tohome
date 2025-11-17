import React from 'react';
import { MagazineDetailItem1Style } from './style';

const MagazineDetailItem1 = ({ onToggle }) => {
    return (
        <MagazineDetailItem1Style>
            <div className="highTxt" onClick={onToggle}>
                <p>Bon Appetit: Chef&apos;s Recipe at Home</p>
                <p>Tohome Magazine</p>
            </div>
            <article className="main-box">
                <div className="txts" data-aos="fade-right">
                    <h2 className="fontChange">Bon&apos;s appetit</h2>
                    <h3>7월 첫째주 셰프의 레시피</h3>
                    <h4>‘으깬 감자 구이’</h4>
                    <button className="more2">
                        자세히보기{' '}
                        <img src="/images/icon/icon_all.png" alt="" />
                    </button>
                </div>
                <div className="img-wrap">
                    <img src="/images/magazine/detail-meshpotato.jpg" alt="" />
                </div>
            </article>
            <div className="imgs">
                <div className="img-box detail-tomato">
                    <img src="/images/magazine/detail-tomato.png" alt="" />
                </div>
                <div className="img-box detail-brocoli">
                    <img src="/images/magazine/detail-brocoli.png" alt="" />
                </div>
                <div className="img-box detail-lemon">
                    <img src="/images/magazine/detail-lemon.png" alt="" />
                </div>
            </div>
        </MagazineDetailItem1Style>
    );
};

export default MagazineDetailItem1;
