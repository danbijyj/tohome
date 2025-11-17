import styled from 'styled-components';

export const DawnDeliveryConStyle = styled.div`
    position: relative;
    h2 {
        font-size: 36px !important;
        font-weight: 700 !important;
        margin-bottom: 100px;
    }
`;
export const Con1Style = styled.div`
    margin-top: 110px;
    height: 1260px;

    .box {
        width: 1440px;
        height: 940px;
        /* border: 1px solid; */
        .top {
            width: 100%;
            display: flex;
            .left {
                width: 720px;
                height: 470px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .right {
                width: 720px;
                height: 470px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .txt {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 580px;
                    height: 198px;
                    /* border: 1px solid #000; */
                    p {
                        font-size: 24px;
                        font-weight: 700;
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    img {
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
        .bottom {
            width: 100%;
            display: flex;
            .left {
                width: 720px;
                height: 470px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .txt {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 610px;
                    height: 232px;
                    p {
                        font-size: 24px;
                        font-weight: 700;
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    img {
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
            .right {
                width: 720px;
                height: 470px;
                overflow: hidden;
            }
        }
    }
`;

export const Con2Style = styled.div`
    padding: 70px 0;
    /* height: 726px; */
    background-color: #fdfbf0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
        width: 886px;
        height: 590px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
            width: 80px;
            margin-bottom: 27px;
        }
        .box2 {
            width: 240px;
            height: 70px;
            background-color: #666;
            margin-bottom: 70px;
            p {
                height: 70px;
                justify-content: center;
                display: flex;
                align-items: center;
                color: #fff;
                font-size: 24px;
                font-weight: 700;
                text-align: center;
            }
        }
        .txt-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 15px;
            img {
                /* margin-right: 10px; */
            }
            .txt {
                display: flex;
                align-items: center;
                gap: 15px;
                span {
                    font-size: 24px;
                }
            }
        }
    }
`;

export const Con3Style = styled.div`
    padding: 180px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 100px;
    }
    .wholeBox {
        /* padding: 0 140px; */
        .box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 206px;
            width: 1160px;
            &:nth-child(2) {
                gap: 0;
            }
        }
        .top {
            /* position: absolute; */
            /* display: flex;
      justify-content: space-between;
      align-items: center; */
            img {
            }
            .txtBox {
                width: 448px;
                height: 310px;
                /* border: 1px solid #000; */
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;

                p {
                    font-size: 34px;
                    font-weight: 600;
                    margin-bottom: 23px;
                }
                .title {
                    font-size: 18px;
                    margin-bottom: 23px;
                    /* line-height: 300%; */
                }
                .text {
                    &:first-of-type {
                        margin-top: 23px;
                    }
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
        .middle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .box {
                gap: 0;
            }
            .txtBox {
                width: 654px;
                height: 310px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                /* margin-top: 170px; */
                /* border: 1px solid #000; */
                p {
                    font-size: 34px;
                    margin-bottom: 23px;
                }
                .title {
                    font-size: 18px;
                    margin-bottom: 23px;
                    /* line-height: 300%; */
                }
                .text {
                    &:first-of-type {
                        margin-top: 23px;
                    }
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
        .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
            }
            .txtBox {
                width: 448px;
                height: 310px;
                /* border: 1px solid #000; */
                display: flex;
                flex-direction: column;
                justify-content: center;
                p {
                    font-size: 34px;
                    margin-bottom: 23px;
                }
                .title {
                    font-size: 18px;
                    margin-bottom: 23px;
                    /* line-height: 300%; */
                }
                .text {
                    &:first-of-type {
                        margin-top: 23px;
                    }
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`;

export const Con4Style = styled.div`
    width: calc(100vw - var(--scrollbar-width));
    /* width: 100dvw; */
    overflow: hidden;
    background-color: #fdfbf0;
    padding: 100px 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(images/dawnDelivery/con4/Q&A.png);
    background-repeat: no-repeat;
    background-position: 7px 270px;
    h2 {
        text-align: center;
        margin-bottom: 0 !important;
        font-size: 36px;
        font-weight: 700;
    }
    p {
        display: flex;
        font-size: 30px;
        font-weight: 700;
        justify-content: center;
    }
    .box {
        font-family: 'pretendard';
        width: 1200px;
        margin: 0 auto;
        margin-top: 46px;
        .txt {
            margin-bottom: 15px;
            .left {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                .qNum {
                    font-size: 25px;
                    font-weight: 700;
                }
                .bubbleQ {
                    position: relative;
                    background: #2c5428;
                    color: #fff;
                    padding: 28px 50px;
                    border-radius: 20px;
                    font-size: 20px;
                    &::before {
                        content: '';
                        position: absolute;
                        left: -6px;
                        top: 50%;
                        transform: translateY(-50%) rotate(45deg);
                        width: 12px;
                        height: 12px;
                        background: #2c5428;
                        border-radius: 2px; /* 살짝 둥근 꼬리 */
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: flex-end;
                margin-top: 10px;
            }
            .aNum {
                font-size: 25px;
                font-weight: 700;
                display: flex;
                right: 0;
            }
            .bubbleA {
                position: relative;
                background: #fff;
                border: 1px solid #b1b1b1;
                color: #000;
                font-size: 18px;
                padding: 28px 60px;
                border-radius: 20px;
                font-weight: 400;
                &::before {
                    content: '';
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%) rotate(-45deg);
                    width: 12px;
                    height: 12px;
                    background: #fff;
                    border-right: 1px solid #b1b1b1;
                    border-bottom: 1px solid #b1b1b1;
                    border-radius: 2px; /* 살짝 둥근 꼬리 */
                }
            }
        }
    }
`;
