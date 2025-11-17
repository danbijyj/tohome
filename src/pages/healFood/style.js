import styled from 'styled-components';

export const HealFoodStyle = styled.div`
    position: relative;
    margin-top: 56px;
    height: 2320px;
    .banner {
        width: 100%;
        height: 796px;
        z-index: 0;
        .txt-box {
            width: 1000px;
            position: absolute;
            top: 127px;
            left: 50%;
            transform: translate(-50%);
        }
        p {
            font-size: 20px;
            font-weight: 500;
            color: #333;
            text-align: center;
            position: relative;
            z-index: 10;
        }
        h2 {
            font-size: 30px;
            font-weight: 600;
            color: #333;
            margin-top: 22px;
            .mobileOnly {
                display: none;
            }
        }
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 180px;
        .info {
            width: 1100px;
            text-align: center;
            strong {
                font-size: 25px;
                font-weight: 600;
                color: #3c6039;
            }
            p {
                font-size: 22px;
                line-height: 150%;
                font-weight: 500;
                color: #666666;
                text-align: center;
                margin-top: 20px;
                .mobileOnly {
                    display: none;
                }
            }
        }
        .list {
            width: 1440px;
            height: 1020px;
            padding: 0 59px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 60px 120px;
            .meal {
                width: 550px;
                height: 480px;
                display: flex;
                flex-direction: column;
                position: relative;
                &:nth-child(2),
                &:nth-child(4) {
                    margin-right: 0;
                }
                .imgs {
                    width: 550px;
                    height: 350px;
                    border-radius: 25px;
                    overflow: hidden;
                    margin-bottom: 30px;
                    img {
                        width: 550px;
                        height: 350px;
                        transition: transform 0.3s ease;
                    }
                }
                &:hover img {
                    transform: scale(1.1);
                }
                strong {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #333;
                }
                span {
                    font-size: 15px;
                    font-weight: 600;
                    color: #333;
                    margin-top: 5px;
                    margin-bottom: 20px;
                }
                button {
                    width: 95px;
                    height: 25px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    color: #333;
                    display: flex;
                    justify-content: right;
                    font-size: 15px;
                    font-weight: 600;
                    border-bottom: 1px solid #333;
                    background: none;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        margin-top: 2.0513vw;
        height: 462.8205vw;
        .banner {
            width: 100vw;
            height: 51.2821vw;
            background-image: url(images/healfood/mobileBanner.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            .txt-box {
                top: 8.2051vw;
            }
            p {
                font-size: 3.0769vw;
            }
            h2 {
                font-size: 3.8462vw;
                .mobileOnly {
                    display: inline;
                }
            }
            img {
                display: none;
            }
        }
        section {
            width: 100vw;
            margin-top: 12.3077vw;
            gap: 12.3077vw;
            .info {
                width: 82.3077vw;
                strong {
                    font-size: 3.8462vw;
                }
                p {
                    font-size: 3.0769vw;
                    .mobileOnly {
                        display: inline;
                    }
                }
            }
            .list {
                width: 100vw;
                flex-direction: row;
                .meal {
                    width: 91.7949vw;
                    height: 80.1359vw;
                    .imgs {
                        width: 91.7949vw;
                        height: 58.4154vw;
                        img {
                            width: 91.7949vw;
                            height: 58.4154vw;
                        }
                    }
                    strong {
                        font-size: 3.8462vw;
                    }
                    span {
                        font-size: 3.0769vw;
                    }
                    button {
                        width: 20.7692vw;
                        height: 6.1538vw;
                        font-size: 3.0769vw;
                        margin-top: 2.0513vw;
                    }
                }
            }
        }
    }
`;
