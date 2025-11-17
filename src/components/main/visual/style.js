import styled from 'styled-components';

export const VisualStyle = styled.div`
    &::after {
        content: '';
        position: absolute;
        width: calc(100vw - var(--scrollbar-width));

        height: 120%;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        background-color: #fdfbf0;
        @media screen and (max-width: 600px) {
            display: none;
        }
    }
    position: relative;
    height: 680px;
    margin-top: 50px;
    @media screen and (max-width: 600px) {
        margin-top: 0;
    }
    margin-bottom: 50px;
    width: 1440px;

    .swiper-slide {
        background-color: transparent;
    }
    h2 {
        font-size: 30px;
    }
    p {
        text-align: center;
    }
    .btn-wrap {
        position: absolute;
        top: 50%;
        z-index: 100;
        width: 100%;

        button {
            position: absolute;
            font-size: 15px;
            font-weight: 600;
            font-family: 'Arita buri' !important;
            background-color: transparent;
            p {
                transition: 0.3s;
            }
            &::before,
            &::after {
                transition: 0.3s;
                content: '';
                position: absolute;
                top: -12px;
                width: 40px;
                height: 1px;
                background-color: #333;
            }
            &::before {
                left: 50%;
            }
            &::after {
                left: -40%;
            }
            &.prev {
                left: -40px;
                transform: rotate(-90deg);
            }
            &.next {
                right: -40px;
                transform: rotate(90deg);
            }
            &:hover {
                &::before {
                    transform: rotate(45deg);
                    transform-origin: left center;
                }
                &::after {
                    transform-origin: 100%;
                    transform: rotate(-45deg);
                }
                p {
                    transform: translateY(-100%);
                    opacity: 0;
                }
            }
        }
    }
    .indicator {
        display: none;
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        height: 133.3333vw;
        margin-top: 8vw;
        h2 {
            font-size: 5.641vw;
        }
        .btn-wrap {
            display: none;
        }
        .indicator {
            display: flex;
            justify-content: center;
            gap: 2.0513vw;
            margin-top: 4.1026vw;
            position: absolute;
            bottom: 4.1026vw;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            span {
                display: block;
                width: 6.4103vw;
                height: 1.0256vw;
                border-radius: 1.2821vw;
                background: #fff;
                opacity: 0.6;
                transition: 0.3s, opacity 0.3s;
                &.active {
                    background: #333;
                    opacity: 1;
                }
            }
        }
    }
`;

export const BannerWrap = styled.article`
    cursor: grab;
    &:active {
        cursor: grabbing;
    }
    width: 100%;
    display: flex;
    flex-direction: ${({ $position }) => ($position === 'right' ? 'row-reverse' : 'row')};
    align-items: center;

    .txt-box {
        width: 720px;
        box-sizing: border-box;
        padding: 0 140px;
        color: #333;
        h3 {
            font-size: 34px;
            padding-bottom: 80px;
            text-align: left;
            position: relative;
            .mobileOnly {
                display: none;
            }
            img {
                width: 300px;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 40px;
                left: 0;
                width: 45px;
                height: 1px;
                background-color: #333;
            }
        }
        p {
            text-align: left;
            font-size: 14px;
        }
        .mobileOnly {
            display: none;
        }
    }
    .img-box {
        box-sizing: border-box;
        position: relative;
        width: 790px;
        height: 680px;
    }
    .more {
        margin-top: 40px;
        box-sizing: border-box;
        line-height: 40px;
        text-align: center;
        border: 1px solid #888;
        width: 135px;
        height: 40px;
        font-size: 12px;
        color: #888;
        transition: 0.2s;

        &:hover {
            background-color: #888;
            color: #fff;
            cursor: pointer;
        }
    }
    &.visual-con {
        &1 {
        }
        &2 {
            .img-box {
                padding: 45px 65px;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                gap: 50px;
                img {
                    width: 270px;
                    height: 270px;
                }
            }
            .txt-box {
                .mobileOnlyT {
                    display: none;
                }
            }
        }
        &3 {
            .img-box {
                padding: 90px 0;
                img {
                    &:nth-child(1) {
                        width: 475px;
                    }
                    &:nth-child(2) {
                        width: 225px;
                        height: 200px;
                        position: absolute;
                        top: 130px;
                        right: 90px;
                    }
                    &:nth-child(3) {
                        width: 225px;
                        height: 200px;
                        position: absolute;
                        bottom: 110px;
                        right: 0;
                    }
                }
            }
        }
        &4 {
            .img-box {
                padding: 65px 85px;
                img {
                    &:nth-child(1) {
                        width: 550px;
                        height: 550px;
                    }
                    &:nth-child(2) {
                        width: 200px;
                        height: 200px;
                        position: absolute;
                        top: 100px;
                        left: 0;
                    }
                    &:nth-child(3) {
                        width: 215px;
                        height: 215px;
                        position: absolute;
                        bottom: 42px;
                        right: 0;
                    }
                }
            }
            .txt-box {
                .mobileOnlyT {
                    display: none;
                }
            }
        }
        &5 {
            background-color: #fdfbf0;
            .img-box {
                padding: 45px 65px;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                gap: 50px;
                &-sub {
                    &:nth-child(1) {
                        width: 290px;
                    }
                    &:nth-child(3) {
                        width: 250px;
                        height: 250px;
                        position: relative;
                        /* overflow: visible !important; */
                        img {
                            position: absolute;
                            left: 60%;
                            top: 40%;
                            transform: translate(-50%, -50%);
                            height: 120%;
                            width: auto;
                        }
                    }

                    width: 250px;
                    height: 250px;
                    overflow: visible;
                    position: relative;
                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        height: 100%;
                    }
                }
            }
            .txt-box {
                .mobileOnlyTit {
                    display: none;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        position: relative;
        .img-box {
            position: relative;
            z-index: 1;
            width: 100vw;
            height: 133.3333vw;
        }
        .txt-box {
            width: 100vw;
            height: 133.3333vw;
            position: absolute;
            z-index: 2;
            padding: 9.2308vw 6.1538vw;
            h3 {
                padding-bottom: 0;
                font-size: 5.641vw;
                font-weight: 600;
                margin-bottom: 3.5897vw;
                &::after {
                    display: none;
                }
            }
            p {
                display: none;
            }
            .mobileOnly {
                font-size: 4.1026vw;
                font-weight: 600;
                display: block;
            }
            .more {
                display: none;
            }
        }
        &.visual-con1 {
            .txt-box {
                h3 {
                    color: #fff;
                }
                p {
                    color: #fff;
                }
            }
        }
        &.visual-con2 {
            .img-box {
                background-image: url(/images/main/mobileBanner2.png);
                background-repeat: no-repeat;
                background-position: 0 0;
                img {
                    display: none;
                }
            }
            .txt-box {
                h3 {
                    display: none;
                    span {
                        /* display: none; */
                    }
                }
                .mobileOnlyT {
                    display: block;
                    padding-bottom: 0;
                    font-size: 5.641vw;
                    margin-bottom: 3.5897vw;
                }
            }
        }
        &.visual-con3 {
            .img-box {
                background-image: url(/images/main/mobileBanner3.png);
                background-repeat: no-repeat;
                background-position: 0 0;
                img {
                    display: none;
                }
            }
        }
        &.visual-con4 {
            .img-box {
                background-image: url(/images/main/mobileBanner4.png);
                background-repeat: no-repeat;
                background-position: 0 0;
                img {
                    display: none;
                }
            }
            .txt-box {
                h3 {
                    display: none;
                    span {
                        /* display: none; */
                    }
                }
                .mobileOnlyT {
                    display: block;
                    padding-bottom: 0;
                    font-size: 5.641vw;
                    margin-bottom: 3.5897vw;
                }
            }
        }
        &.visual-con5 {
            .img-box {
                background-image: url(/images/main/mobileBanner5.png);
                background-repeat: no-repeat;
                background-position: 0 0;
                img {
                    display: none;
                }
            }
            .txt-box {
                h3 {
                    padding-bottom: 0;
                    display: flex;
                    justify-content: center;
                    img {
                        display: none;
                    }
                }
                .mobileOnlyTit {
                    display: flex;
                    justify-content: center;
                    img {
                        display: block;
                    }
                }
            }
        }
    }
`;
export const MobileNavStyle = styled.nav`
    display: none;
    @media screen and (max-width: 600px) {
        margin-top: 6.6667vw;
        display: flex;
        justify-content: center;
        ul {
            display: flex;
            gap: 4.1026vw;
            li {
                width: 20.2308vw;
                height: 15.8974vw;
                a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3.0769vw;
                    img {
                        width: 8.7179vw;
                        height: 8.7179vw;
                    }
                    p {
                        font-size: 3.3333vw;
                        font-weight: 600;
                    }
                }
            }
        }
    }
`;
