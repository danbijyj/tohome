import styled from 'styled-components';

export const MagazineListStyle = styled.div`
    width: 100%;
    height: 900px;
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background-image: url('/images/magazine/back.jpg');

    &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background-color: #333;
        z-index: 1;
    }
    .left {
        width: 50%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        padding: 90px 70px;
        box-sizing: border-box;
        .img-wrap {
            width: 150px;
            height: 95px;
            overflow: hidden;
            position: relative;
            img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 50%;
                transition: 0.3s;
                &:hover {
                    transform: translate(-50%, -50%) scale(1.3);
                    cursor: pointer;
                }
            }
            .des {
                display: none;
            }
        }
    }
    .right {
        width: 50%;
        height: 100%;
        position: relative;
        &-title {
            &-mobile-bottom {
                display: none;
            }
            width: 100%;
            position: absolute;
            bottom: 100px;
            box-sizing: border-box;
            h2 {
                font-size: 50px;
                font-family: 'Playfair Display' !important;
                font-weight: 400;
                font-style: italic;
                text-align: left;
                padding-left: 102px;
            }
            h3 {
                font-size: 25px;
                text-align: center;
            }
            h4 {
                margin-top: 30px;
                font-size: 32px;
                font-weight: 600;
                text-align: center;
                span {
                    font-size: 20px;
                    margin-right: 15px;
                }

                &.mobile {
                    display: none;
                }
            }
        }
        &-high {
            position: absolute;

            font-size: 15px;
            left: 40px;
            top: 350px;
            /* height: 100%; */
            /* width: 100%; */

            h3 {
                transform-origin: left center;
                transform: rotate(-90deg);
            }
        }
        &-main-images-wrap {
            /* display: none; */
            width: 100%;
            height: 100%;

            position: relative;

            img {
                position: absolute;
            }
            .recipe {
                &-meshpotato {
                    top: 265px;
                    right: 110px;
                }
                &-potato {
                    top: 180px;
                    right: 260px;
                }
                &-basil {
                    right: 45px;
                    bottom: 165px;
                }
                &-cheese {
                    bottom: 380px;
                    left: 200px;
                }
                &-lemon {
                    top: 250px;
                    left: 250px;
                }
                &-yogurt {
                    right: 134px;
                    top: 220px;
                }
                &-parsley {
                    top: 350px;
                    left: 180px;
                }
                &-blueberry {
                    bottom: 275px;
                    left: 50px;
                }
                &-eucalyptus {
                    left: 80px;
                    top: 0px;
                }
            }
        }

        .more {
            &:hover {
                img {
                    transform: translateX(-50%);
                }
            }
            z-index: 100;
            cursor: pointer;
            position: absolute;
            font-size: 18px;
            right: 30px;
            top: 50px;
            background-color: transparent;
            height: 25px;
            display: flex;
            align-items: center;
            gap: 20px;
            img {
                height: 100%;
                transition: 0.3s;
            }
        }
    }
    @media screen and (max-width: 600px) {
        height: 341.0256vw;
        flex-direction: column-reverse;
        justify-content: flex-end;

        &::before {
            display: none;
        }
        .left {
            min-height: 120.5128vw;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 12.8205vw;
            grid-column-gap: 7.6923vw;
            padding: 7.6923vw;

            .img-wrap {
                width: 21.7949vw;
                overflow: visible;
                img {
                    width: 80%;
                }
                .des {
                    margin-top: 20.5128vw;
                    font-size: 3.3333vw;
                    white-space: nowrap;
                    text-align: center;
                    display: block;
                }
                overflow-y: none;
            }
        }
        .right {
            width: 100%;
            min-height: 171.7949vw;
            box-sizing: border-box;
            &-title {
                width: 66.1538vw;
                height: 23.0769vw;
                margin: 0 15.8974vw;
                top: 17.1795vw;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 0;

                h2 {
                    font-size: 7.6923vw;
                    padding: 0;
                }
                h3 {
                    font-size: 4.359vw;
                    text-align: right;
                }
                h4 {
                    margin-top: 0;
                    &.web {
                        display: none;
                    }
                    &.mobile {
                        display: block;
                        font-size: 3.0769vw;
                        padding-left: 17.9487vw;
                    }
                }
                &-mobile {
                    h4 {
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        font-size: 6.4103vw;
                        font-weight: 600;
                        span {
                            font-weight: 500;
                            font-size: 17px;
                            display: block;
                            border: 1px solid #000;
                        }
                    }
                    &-bottom {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        position: absolute;
                        bottom: 66px;
                        left: 50%;
                        transform: translateX(-50%);
                        color: #333;
                        span {
                            text-align: center;
                        }
                        p {
                            font-size: 6.4103vw;
                            text-align: center;
                        }
                    }
                }
            }
            &-high {
                left: 4.1026vw;
                top: 6.4103vw;
                span {
                    display: none;
                }
                h3 {
                    transform-origin: center;
                    transform: rotate(0deg);
                }
            }
            &-main-images-wrap {
                .recipe {
                    &-meshpotato {
                        width: 65.1282vw;
                        right: 6.6667vw;
                        bottom: 42.5641vw;
                    }
                    &-potato {
                        width: 14.1026vw;
                        right: 35.8974vw;
                        top: 46.1538vw;
                    }
                    &-basil {
                        width: 20.5128vw;
                        bottom: 20.5128vw;
                        right: 0;
                    }
                    &-cheese {
                        left: 12.3077vw;
                        bottom: 54.6154vw;
                        width: 11.0256vw;
                    }
                    &-lemon {
                        width: 12.3077vw;
                        left: 21.0256vw;
                        top: 60.5128vw;
                    }
                    &-yogurt {
                        width: 7.9487vw;
                        right: 1.0256vw;
                        right: 11.2821vw;
                        top: 54.8718vw;
                    }
                    &-parsley {
                        width: 11.5385vw;
                        left: 7.6923vw;
                        top: 50%;
                    }
                    &-blueberry {
                        width: 11.0256vw;
                        left: 0;
                        bottom: 33.3333vw;
                    }
                    &-eucalyptus {
                        width: 37.9487vw;
                        top: -1.2821vw;
                        left: 69.2308vw;
                        transform: rotate(110deg);
                    }
                }
            }
            .more {
                top: 645px;
                left: 35%;
            }
        }
    }
`;
