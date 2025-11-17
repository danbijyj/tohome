import styled from 'styled-components';

export const MainCon1Style = styled.article`
    .inner {
        overflow: hidden;
    }
    .main-best-wrap {
        margin-top: 160px;
        .ul {
            cursor: grab;
            white-space: nowrap;
            &:active {
                cursor: grabbing;
            }
            display: flex;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            li {
                box-sizing: border-box;
                height: 450px;
                width: 290px;
                position: relative;
                h2 {
                    padding: 0 4px;
                    margin-top: 10px;
                    width: 90%;
                    height: 60px;

                    white-space: break-spaces;
                    text-align: left;
                    overflow: hidden;
                }
                h3 {
                    font-size: 15px;
                    white-space: pre-line;
                    word-break: keep-all;
                    padding: 10px 0;
                    text-align: left;
                }

                p {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    margin-top: 80px;
                    font-size: 15px;

                    padding-left: 10px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #000;
                }
                .img-box {
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    position: relative;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);

                        width: 100%;
                        /* height: 100%; */
                    }
                }
            }
        }
        .btn {
            display: none;
        }
    }
    .main-newPro-wrap {
        margin-top: 160px;
        padding-bottom: 10px;

        .swiper-slide {
            display: flex;
            cursor: grab;
            &:active {
                cursor: grabbing;
            }
            margin-bottom: 95px;

            .left {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    background-image: url('images/main/main_gradient.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 540px;
                    height: 540px;
                    left: 190px;
                    top: 0;
                    z-index: -1;
                }
                text-align: left;
                margin: auto;
                strong {
                    font-size: 18px;
                    margin-bottom: 10px;
                    color: #3c6039;
                }
                h2 {
                    text-align: left;
                    font-size: 50px;
                }
                h4 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 32px;
                    padding: 55px 0;
                }
                p {
                    text-align: left;

                    font-size: 22px;
                }
            }
            .right {
                width: 750px;
                height: 500px;
                img {
                    width: 100%;
                }
            }
        }
        .swiper-pagination {
            bottom: 5px;
            right: 0px;
            text-align: right;
            width: auto;
            position: absolute;
        }
        .swiper-pagination-bullet {
            margin-right: 100px;
            bottom: 0px;
            width: 30px;
            height: 5px;
            background-color: #ccc;
            opacity: 1;
            border-radius: 0px;
            margin: 0 6px;
            transition: 0.3s;
        }

        .swiper-pagination-bullet-active {
            background-color: #333;
            transform: rotate(-45deg);
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;

        .main-best-wrap {
            padding: 12.3077vw 0;
            /* padding: 0 4.1026vw; */
            width: 100vw;
            margin-top:0;

            .productWrap {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                width: 100vw;

                flex-wrap: wrap;
                gap: 3.0769vw;
                .product-list {
                    display: flex;
                    justify-content: center;
                }

                .img-wrap {
                    margin-bottom: 2.0513vw;
                }
                .price-box {
                    flex-direction: row !important;
                    display: flex;
                    align-items: center;
                    gap: 6px;
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
                li {
                    width: 43.5897vw;
                    min-width: 43.5897vw;
                    height: 70.7692vw;
                    h2 {
                        font-size: 3.5897vw;
                        margin-top: 0;
                    }
                    h3 {
                    }
                    p {
                        display: block;
                    }
                    .img-box {
                        width: 43.5897vw;
                        height: 51.2821vw;
                        img {
                            width: 43.5897vw;
                            height: 51.2821vw;
                        }
                    }
                }
            }
            .btn {
                display: flex;
                justify-content: center;
                margin-top: 9.4872vw;
                button {
                    background: none;
                    border-bottom: 1px solid #000;
                    font-size: 3.3333vw;
                    font-weight: 600;
                    padding: 5px 10px;
                }
            }
        }
        .main-newPro-wrap {
            width: 100vw;
            height: 346px;
            margin-top: 0;
            .swiper {
                height: 260px;
            }
            .swiper-slide {
                height: 66.6667vw;
                .left {
                    position: absolute;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    width: 100vw;
                    height: 66.6667vw;
                    margin-top: 24px;
                    margin-left: 24px;
                    &::after {
                        display: none;
                    }
                    strong {
                        font-size: 2.5641vw;
                        margin-bottom: 0;
                    }
                    h2 {
                        font-size: 5.641vw;
                        margin-bottom: 3.0769vw;
                    }
                    h4 {
                        font-size: 3.3333vw;
                        padding: 0;
                        gap: 0.7692vw;
                    }
                    p {
                        display: none;
                    }
                }
                .right {
                    position: relative;
                    z-index: 1;
                    width: 100vw;
                    height: 66.6667vw;
                    img {
                        width: 100vw;
                        height: 66.6667vw;
                    }
                    &::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 67.61%);
                    }
                }
            }
            .swiper-pagination {
                margin-bottom: 3.0769vw;
            }
            .swiper-pagination-bullet {
                width: 25px;
                height: 4px;
            }
        }
    }
`;
