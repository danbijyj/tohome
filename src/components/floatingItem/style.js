import styled from 'styled-components';

export const FloatingBtnStyle = styled.div`
    z-index: 100;
    position: fixed;
    top: 13vw;
    right: 3.1vw;
    width: 80px;
    cursor: pointer;
    div {
        mix-blend-mode: difference;
        background-color: white;
        height: 180px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
        border-radius: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        position: relative;
        padding: 20px 0;
        box-sizing: border-box;
        &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 50%;
            width: 80%;
            height: 1px;
            background-color: #000;
        }
        p {
            font-size: 13px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            align-items: center;
            text-align: center;
            font-size: 13px;
            img {
                width: 30px;
            }
        }
    }
    .top {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
        gap: 10px;

        background-color: transparent;
        mix-blend-mode: difference;
        p {
            font-size: 16px;
        }
        span {
            font-size: 20px;
        }
    }
    .cart {
        font-size: 30px;
        height: 31px;

        position: relative;
        span {
            position: absolute;
            right: -10px;
            top: -10px;
            width: 24px;
            height: 24px;
            background-color: #f3829e;
            border-radius: 50px;
            line-height: 24px;
            text-align: center;
            color: white;
            font-size: 17px;
        }
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const FloatingMenuStyle = styled.div`
    /* 오버레이(배경) */
    position: fixed;
    inset: 0;
    z-index: 2001;
    background: rgba(0, 0, 0, 0.45);

    /* 데스크톱: 헤더 높이만큼 아래에서 시작 (모바일은 아래에서 무시) */
    padding-top: var(--header-offset, 0px);

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    /* 패널 */
    .panel {
        width: min(86vw, 240px);
        margin-top: 7vw;
        margin-right: 13vw;
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
        /* overflow-y: auto; */
        -webkit-overflow-scrolling: touch;
        padding: 20px;
    }

    .close-btn {
        background: transparent;
        border: 0;
        font-size: 28px;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .item {
        &:hover {
            cursor: pointer;
            .txt-box {
                border-bottom: 1px solid #3c6039;
                p {
                    color: #3c6039;
                }
                img {
                    filter: brightness(0) saturate(100%) invert(30%) sepia(51%) saturate(370%)
                        hue-rotate(68deg) brightness(80%) contrast(90%);
                }
            }
        }
        .txt-box {
            border-bottom: 1px solid #fff;
            display: flex;
            align-items: center;
            padding: 10px 15px;
            margin: 10px 0;
            p {
                font-weight: 500;
                font-size: 16px;
            }
            img {
                width: 24px;
                margin-right: 10px;
            }
        }
    }

    .mobile {
        &-logo-wrap,
        &-login-wrap,
        &-support-wrap {
            display: none;
        }
    }

    /* ✅ 모바일: 헤더 오프셋 무시(top=0), 패널 크기/여백 모바일 디자인 유지 */
    @media screen and (max-width: 600px) {
        padding-top: 0; /* 헤더 오프셋 무시 */

        .panel {
            width: 89.7436vw;
            height: 100%;
            margin-right: 0;
            border-radius: 0 20px 20px 0;
            padding: 6.1538vw;
        }

        .mobile {
            &-logo-wrap,
            &-login-wrap,
            &-support-wrap {
                display: block;
                box-sizing: border-box;
            }
        }

        .mobile {
            &-logo-wrap {
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;
                height: 10.7692vw;

                &-img {
                    width: 42.3077vw;
                    img {
                        width: 100%;
                    }
                }
                .close-btn {
                    font-size: 8.9744vw;
                }
                p {
                    font-size: 8.9744vw !important;
                    line-height: 8.9744vw;
                    height: 5.7692vw;
                }
            }

            &-login-wrap {
                margin-top: 2.0513vw;
                &-list {
                    display: flex;
                    li {
                        font-size: 3.3333vw;
                        margin-right: 6.1538vw;
                    }
                }
                &-title {
                    margin-top: 10.2564vw;
                    padding-bottom: 6.1538vw;
                    h4 {
                        font-size: 4.1026vw;
                        span {
                            font-size: 5.1282vw;
                            color: #3c6039;
                        }
                    }
                    strong {
                        font-weight: 600;
                        font-size: 5.1282vw;
                    }
                }
            }

            &-support-wrap {
                margin-top: 24px;
                margin-bottom: 42px;
                display: flex;
                p {
                    font-size: 3.8462vw;
                    margin-right: 5.1282vw;
                    font-weight: 600;
                }
            }
        }

        .item {
            &-wrap {
                border-top: 0.2564vw solid #000;
                border-bottom: 0.2564vw solid #000;
                box-sizing: border-box;
                padding: 24px 0;
            }
            width: 75.1282vw;
            height: 10.2564vw;
            padding: 0;
            margin-top: 4.1026vw;

            .txt-box {
                padding: 2.0513vw 0;
                height: 100%;
                box-sizing: border-box;
                margin: 0;
                img {
                    width: 6.1538vw;
                    height: 6.1538vw;
                }
                p {
                    font-weight: 600;
                    font-size: 5.1282vw;
                }
            }
        }
    }
`;
