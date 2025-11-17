import styled from 'styled-components';

export const Content05Style = styled.div`
    /* background-color: aqua; */

    .main-today-recipe {
        margin-top: 160px;
        .title2 {
            margin-top: 70px;
            text-align: center;
            font-size: 25px;
            span {
                font-weight: 600;
                display: block;
            }
        }
        .recipe-head {
            margin-top: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            position: relative;
            &:hover {
                cursor: pointer;
                .left {
                    &::before {
                        opacity: 0.5;
                    }
                    img {
                        width: 110%;
                    }
                }
            }
            .left {
                width: 720px;
                height: 400px;
                background-color: yellow;
                position: relative;
                overflow: hidden;
                &::before {
                    content: '';
                    position: absolute;
                    opacity: 0;
                    inset: 0;
                    pointer-events: none;
                    background: radial-gradient(
                        ellipse at center,
                        rgba(0, 0, 0, 0) 40%,
                        rgba(0, 0, 0, 0.4) 70%,
                        rgba(0, 0, 0, 0.7) 100%
                    );
                    mix-blend-mode: multiply; /* 옵션: 색/밝기 조절 */
                    transform: scale(120%);
                    transition: 0.3s;
                    z-index: 1;
                }
                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    transition: 0.6s;
                }
            }
            .right {
                padding: 5px 45px;
                height: 400px;
                box-sizing: border-box;

                em {
                    font-size: 20px;
                }
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                }
                strong {
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    margin: 12px 0 15px;
                    img {
                        margin-right: 8px;
                    }
                    span {
                        margin-right: 10px;
                        font-size: 15px;
                    }
                }
                p {
                    text-align: left;
                    height: 120px;
                }
                .more2 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-top: 20px;
                    padding: 0;
                    display: flex;
                    gap: 20px;
                    background-color: transparent;
                    p {
                        font-size: 18px;
                        height: 100%;
                    }
                    img {
                        height: 20px;
                    }
                }
                .line {
                    width: 675px;
                    height: 1px;
                    background-color: #333;
                    margin-top: 23px;
                    margin-bottom: 30px;
                }
                .btn-wrap {
                    display: flex;
                    justify-content: end;
                    gap: 25px;
                    .btn1 {
                        width: 172px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        border-radius: 50px;
                        background-color: #3c6039;
                        color: white;
                        font-size: 17px;
                        font-weight: 600;
                        &:hover {
                            border: 2px solid #3c6039;
                            background-color: white;
                            color: #3c6039;
                            line-height: 37px;
                        }
                    }
                }
            }
        }
        .recipe-body {
            margin-top: 120px;
        }
    }

    .main-gift-wrap {
        cursor: pointer;
        width: 100%;
        height: 350px;
        position: relative;
        margin-top: 150px;
        .txt-box {
            width: 480px;
            height: 180px;
            padding: 84px 164px;
            /* margin-top: 84px; */
            /* margin-left: 164px; */
            /* position: relative; */
            img {
                width: 480px;
                /* position: absolute; */
                /* top: 0; */
            }
            .mobileText {
                display: none;
            }
            p {
                margin-top: 30px;
                text-align: left;
                padding: 0 25px;
            }
        }
        .back {
            border-radius: 35px 35px 350px 35px;
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
        }
        .mobile_giftImg {
            display: none;
        }
        .more1 {
            position: absolute;
            right: -10px;
            bottom: 0;
            background-color: transparent;
        }
    }
    @media screen and (max-width: 600px) {
        .main-today-recipe {
            display: none;
        }
        .main-gift-wrap {
            display: flex;
            width: 100vw;
            height: 120px;
            margin-top: 0;
            .txt-box {
                width: 100vw;
                height: 120px;
                padding: 0;
                img {
                    display: none;
                }
                .mobileText {
                    width: 88vw;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    p {
                        display: inline-flex;
                        position: relative;
                        font-size: 15px;
                        font-weight: 600;
                        justify-content: space-between;
                        margin-top: 0;
                        &::after {
                            content: '';
                            display: inline-block;
                            background-image: url(/images/main/giftIcon.png);
                            background-repeat: no-repeat;
                            position: absolute;
                            width: 24px;
                            height: 24px;
                            vertical-align: middle;
                            margin-left: -26px;
                        }
                    }
                    span {
                        font-size: 10px;
                        font-weight: 500;
                        display: flex;
                        text-align: center;
                        margin-top: 10px;
                    }
                }
                p {
                    display: none;
                }
            }
            .back {
                display: none;
            }
            .mobile_giftImg {
                display: block;
                /* border-radius: 35px 35px 350px 35px; */
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
            }
            .more1 {
                display: none;
            }
        }
    }
`;
