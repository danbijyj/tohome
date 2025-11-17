import styled from 'styled-components';

export const MainRecomStyle = styled.div`
    margin-top: 160px;
    position: relative;
    & > h2 {
        position: absolute;
        top: 70px;
        z-index: 10;
    }
    h3 {
        padding-bottom: 0;
        position: absolute;
        top: 135px;
    }
    .swiper {
        /* width: 100vw; */
        width: calc(100vw - var(--scrollbar-width));

        margin-left: calc(-50vw + 720px);
    }
    .swiper-slide {
        display: flex;
        flex-direction: column;
        /* margin-top: 70px; */
        height: 900px;
        box-sizing: border-box;
        padding-top: 265px;
        margin-bottom: 95px;
        position: relative;

        &:hover {
            .right {
                .img-box {
                    img {
                        width: 120%;
                    }
                }
            }
        }
        h3 {
            height: 100px;
            width: 100%;
            position: absolute;
            .timer {
                display: flex;
                align-items: center;
                gap: 10px;
                position: absolute;
                left: 50%;
                font-weight: 700;
                transform: translate(-50%, -50%);
                color: #333;
                bottom: -25px;
                font-size: 35px;
            }
        }

        section {
            user-select: none;
            display: flex;
            gap: 90px;
            align-items: center;
            word-break: keep-all;
            padding: 90px;

            .left {
                position: relative;
                width: 470px;
                padding-left: 80px;
                /* padding-right: 90px; */
                text-align: left;
                /* padding: 0 145px; */
                display: flex;
                flex-direction: column;

                strong {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    color: #3c6039;
                }
                h2 {
                    text-align: left;
                    font-size: 30px;
                    font-weight: 600;
                    height: 72px;
                    margin-bottom: 40px;
                }
                h4 {
                    font-size: 32px;
                    padding: 55px 0;
                }
                p {
                    text-align: left;
                    white-space: pre-line;
                    font-size: 20px;
                    line-height: 160%;
                    position: relative;
                    /* font-weight: 500; */
                    position: relative;
                    border-bottom: 1px solid #333;
                    margin-bottom: 15px;
                    /* &::before {
                        content: '';
                        position: absolute;
                    } */
                }
            }
            .right {
                width: 870px;
                /* height: 500px; */
                .img-box {
                    width: 870px;
                    height: 470px;
                    position: relative;
                    overflow: hidden;
                    img {
                        width: 100%;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        transition: 0.8s;
                    }
                }
                .txts {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    p {
                        width: 275px;
                        height: 55px;
                        line-height: 55px;
                        font-size: 20px;
                        text-align: left;
                        padding-left: 10px;
                        border-bottom: 1px solid #000;
                        cursor: pointer;
                        &.on {
                            user-select: none;
                            font-weight: 600;
                            color: #3c6039;
                            border-bottom: 1px solid #3c6039;
                        }
                    }
                }
                .mobile {
                    display: none;
                }
            }
        }
        .back {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            opacity: 20%;
            background-color: white;
            filter: blur(3px);
        }
    }
    .swiper-pagination {
        display: none;
    }
    @media screen and (max-width: 600px) {
        height: 97.6923vw;
        margin-top: 0;
        h2 {
            top: 0;
        }
        .swiper {
            margin-left: 0;
            height: 97.6923vw;
        }
        .swiper-slide {
            height: auto;
            padding-top: 0;
            &:hover {
                .right {
                    .img-box {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
            &[data-swiper-slide-index='0'] {
                .txts {
                    p:first-of-type {
                        font-weight: 600;
                        color: #3c6039;
                        border-bottom: 1px solid #3c6039;
                    }
                }
            }
            &[data-swiper-slide-index='1'] {
                .txts {
                    p:nth-of-type(2) {
                        font-weight: 600;
                        color: #3c6039;
                        border-bottom: 1px solid #3c6039;
                    }
                }
            }
            &[data-swiper-slide-index='2'] {
                .txts {
                    p:nth-of-type(3) {
                        font-weight: 600;
                        color: #3c6039;
                        border-bottom: 1px solid #3c6039;
                    }
                }
            }
            .back {
                display: none;
            }
            .sub-title {
                display: none;
            }
            section {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 97.6923vw;
                padding: 0 4.1026vw;
                .left {
                    display: none;
                }
                .right {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    margin-top: 6.1538vw;
                    .txts {
                        order: 1;
                    }
                    .title {
                        order: 2;
                    }
                    .price {
                        order: 3;
                    }
                    .bottom {
                        order: 4;
                    }
                    .img-box {
                        order: 5;
                    }
                    .img-box {
                        width: 100vw;
                        height: 235px;
                        overflow: visible;
                        margin-top: 8px;
                        img {
                            width: 100vw;
                            height: 60.2564vw;
                        }
                    }
                    .txts {
                        width: 91.7949vw;
                        display: flex;
                        gap: 3.0769vw;
                        p {
                            width: 28.2051vw;
                            font-size: 3.0769vw;
                            line-height: 2.5641vw;
                            height: 6.1538vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding-left: 0;
                        }
                    }
                    .title {
                        display: block;
                        font-size: 3.8462vw;
                        margin-top: 6.1538vw;
                        span {
                            font-size: 3.0769vw;
                        }
                    }
                    .price {
                        display: flex;
                        justify-content: flex-end;
                        gap: 1.5385vw;
                        width: 91.7949vw;
                        span {
                            font-size: 3.0769vw;
                            color: #999;
                            text-decoration: line-through;
                            min-height: 6.1538vw;
                            display: flex;
                            align-items: center;
                        }
                        .dicount {
                            font-size: 3.5897vw;
                            color: #ff7259;
                        }
                        p {
                            font-size: 3.5897vw;
                        }
                    }
                    .bottom {
                        width: 91.7949vw;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .time {
                            font-size: 3.5897vw;
                            width: 33.2051vw;
                            .timer {
                                display: inline-flex;
                                align-items: center;
                                gap: 2.0513vw;
                                font-variant-numeric: tabular-nums;
                                font-feature-settings: 'tnum';
                            }
                            span {
                                display: flex;
                                align-items: center;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Content2Style = styled.div`
    .sub-title {
        margin-bottom: 17px;
    }
    .btn-wrap {
        display: flex;
        justify-content: end;

        .more {
            margin-top: 0;
        }
    }
    section {
        &:nth-child(2) {
            margin-top: 160px;
        }
    }
    .product-list {
        margin-top: 30px;
    }

    @media screen and (max-width: 600px) {
        .more {
            display: none;
        }
        .price-box {
            flex-direction: row !important;
            display: flex;
            align-items: center;
            gap: 1.5385vw;
            .price {
                display: flex;
                text-align: right;
                padding-bottom: 0;
                border-bottom: none;
                padding-left: 0;
                line-height: 1;
            }
            .discount {
                display: flex;
                border-bottom: none;
                padding-bottom: 0;
                align-items: center;
            }
            .des {
                display: none;
            }
        }
        section {
            &:nth-child(2) {
                margin-top: 0;
            }
        }
    }
`;
