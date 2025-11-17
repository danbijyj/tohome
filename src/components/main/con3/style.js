import styled from 'styled-components';

export const Content3Style = styled.div`
    .main {
        &-about {
            &:hover {
                cursor: pointer;
                .main-about-btn {
                    background-color: white;
                    color: #333;
                    border-color: white;
                }
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 450px;
            position: relative;
            /* width: 100vw; */
            width: calc(100vw - var(--scrollbar-width));

            left: 50%;
            transform: translateX(-50%);
            margin-top: 160px;
            &.position-fix {
                /* width: 100vw; */
                width: calc(100vw - var(--scrollbar-width));

                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
            img {
                width: 100%;
                position: absolute;
                top: 0;
                z-index: -1;
            }

            h2 {
                margin-top: 50px;
                font-weight: 600;
                letter-spacing: 6px;
                color: white;
            }
            div {
                margin-top: 60px;
                p {
                    font-weight: 500;
                    font-size: 55px;
                    letter-spacing: 2.75px;
                    color: white;
                    width: 880px;

                    &:nth-child(1) {
                        text-align: left;
                    }
                    &:nth-child(2) {
                        text-align: right;
                    }
                }
            }

            &-btn {
                transition: 0.3s;
                margin: auto;
                width: 150px;
                height: 40px;
                background-color: transparent;
                color: white;
                border: 1px solid white;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
            }
        }
    }
    .brand-about {
        margin-top: 160px;

        h2 {
            margin-bottom: 115px;
        }
        strong {
            font-size: 25px;
            font-weight: 700;
        }
        p {
            width: 1000px;
            line-height: 140%;
            margin-top: 25px;
            text-align: left;
            font-size: 25px;
            word-break: keep-all;
        }
        .mobileOnly {
            display: none;
        }
        &-banner {
            cursor: pointer;
            margin-top: 75px;
            display: flex;
            /* gap: 10px; */
            .img-box {
                width: 360px;
                height: 360px;
                /* background-color: azure; */
                position: relative;

                &:hover {
                    img {
                        &:nth-child(2) {
                            width: 150px;
                            top: 150px;
                        }
                    }
                    p {
                        transform: translate(-50%, 0%);
                        opacity: 1;
                    }
                    button {
                        transform: translateY(0%);
                        opacity: 1;
                    }
                }
                img {
                    &:nth-child(1) {
                        width: 100%;
                    }
                    &:nth-child(2) {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 204px;
                        mix-blend-mode: screen;
                        transition: 0.3s;
                    }
                    &:nth-child(3) {
                        display: none;
                    }
                }
                p {
                    transition: 0.3s;
                    font-size: 15px !important;
                    font-weight: 500;
                    white-space: pre-line;
                    color: white;
                    position: absolute;
                    bottom: 100px;
                    text-align: center;
                    left: 50%;
                    transform: translate(-50%, 50%);
                    word-break: keep-all;
                    width: 240px;
                    opacity: 0;
                }

                button {
                    transition: 0.3s;
                    font-size: 15px;
                    font-weight: 600;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    bottom: 60px;
                    width: 100%;
                    height: 20px;
                    background-color: transparent;
                    transform: translateY(50%);
                    opacity: 0;

                    img {
                        width: 24px !important;
                        margin-left: 20px;
                    }
                }
            }
        }
    }
    .main-dawn-wrap {
        cursor: pointer;
        margin-top: 150px;
        width: 100%;
        height: 300px;
        overflow: hidden;
        position: relative;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
        .mobileDawn {
            display: none;
        }
        .txts {
            position: absolute;
            left: 160px;
            top: 75px;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 36px;
                font-weight: 700;
                margin-bottom: 2px;
                display: flex;
                text-align: center;
                position: relative;
                padding-right: 45px;
                &::after {
                    content: '';
                    position: absolute;
                    background-image: url('images/icon/icon_dawnDelivery.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 40px;
                    height: 40px;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            p {
                font-size: 25px;
                font-weight: 500;
            }
        }
    }
    @media screen and (max-width: 600px) {
        .main-about {
            height: 160px;
            background-image: url(/images/main/brandStory.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            margin-top: 0;
            img {
                display: none;
            }
            h2 {
                font-size: 12px;
                font-weight: 600;
                margin-top: 18px;
            }
            div {
                width: 66.6667vw;
                margin-top: 4.6667vw;
                line-height: 1.5;
                p {
                    font-size: 3.6154vw;
                    font-weight: 500;
                    width: 66.6667vw;
                    letter-spacing: 1.9px;
                }
            }
            button {
                width: 90px;
                height: 24px;
                margin-top: 17px !important;
                font-size: 8.4px;
                margin: 0;
                color: #fff !important;
            }
        }
        .brand-about {
            margin-top: 12.3077vw;

            h2 {
                margin-bottom: 0;
                width: 100vw;
                text-align: left;
            }
            strong {
                display: none;
            }
            .txts {
                display: none;
            }
            .mobileOnly {
                display: flex;
                font-size: 3.0769vw;
                width: 390px;
                justify-content: center;
                text-align: center;
                color: #666;
            }
            .brand-about-banner {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 4px;
                margin-top: 24px;
                .img-box {
                    width: 188px;
                    height: 183px;
                    &:hover {
                        img:nth-child(2) {
                            width: initial;
                            top: initial;
                        } /* 필요 시 원래 값으로 */
                        p {
                            transform: translate(-50%, 20%);
                            opacity: 0;
                        }
                        button {
                            transform: translateY(10%);
                            opacity: 0;
                        }
                    }
                    img {
                        &:nth-child(1) {
                            width: 188px;
                            height: 183px;
                        }
                        &:nth-child(2) {
                            display: none;
                        }
                        &:nth-child(3) {
                            display: block;
                            width: 100.3px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            mix-blend-mode: screen;
                            transition: 0.3s;
                        }
                    }
                    button {
                        display: none;
                    }
                    p {
                        display: none;
                    }
                }
            }
        }
        .main-dawn-wrap {
            width: 100vw;
            height: 120px;
            margin-top: 12.3077vw;
            img {
                width: 100vw;
                height: 120px;
                display: none;
            }
            .mobileDawn {
                display: block;
                position: absolute;
                left: 50%;
                top: 50%;
                width: 100vw;
                transform: translate(-50%, -50%);
            }
            .txts {
                width: 170px;
                height: 52px;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                h2 {
                    font-size: 15px;
                    padding-right: 20px;
                    &::after {
                        width: 16px;
                        height: 16px;
                    }
                }
                p {
                    font-size: 10px;
                }
            }
        }
    }
`;
