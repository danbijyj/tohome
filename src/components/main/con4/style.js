import styled from 'styled-components';

export const Content4Style = styled.section`
    .side-dish {
        &-wrap {
            &.position-fix {
                /* width: 100vw; */
                width: calc(100vw - var(--scrollbar-width));

                position: relative; /* left 대신 relative + margin auto 사용 */
                left: 50%;
                transform: translateX(-50%);
                margin-top: 160px;
            }
            cursor: pointer;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            height: 700px;
            background-color: #fdfdf0;
            margin: auto;
            display: flex;
            align-items: center;
            .main-title {
                margin-top: 70px;
            }

            .txts {
                padding-left: 240px;
                width: 590px;
                height: 100%;
                > p {
                    width: 136px;
                    font-size: 25px;
                    font-weight: 600;
                    text-align: left;
                    word-break: keep-all;
                    margin-top: 95px;
                    margin-bottom: 50px;
                }
                .icons-wrap {
                    margin: 70px 0;
                    display: flex;
                    .icons-box {
                        margin-right: 16px;
                        width: 90px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 15px;

                        p {
                            font-weight: 600;
                            font-size: 14px;
                        }
                        img {
                            width: 70px;
                        }
                    }
                }
                .more1 {
                    font-size: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    width: 150px;
                    height: 40px;
                    border: 1px solid #333;
                    background-color: transparent;
                    transition: 0.3s;
                    &:hover {
                        background-color: #333;
                        color: white;
                    }
                }
            }
        }
        &-right-wrap {
            width: 1330px;
        }
    }

    .health-sub {
        &-wrap {
            cursor: pointer;
            margin-top: 50px;

            .main-title {
                margin-top: 70px;
            }
            .logo_sub {
                margin: 70px auto 35px;
                width: 410px;
                img {
                    box-sizing: border-box;
                    width: 100%;
                }
            }
            .sub-title {
                margin-top: 0;
                margin-bottom: 70px;
            }
            .foodtype-wrap {
                display: flex;
                width: 100%;
                gap: 20px;

                li {
                    &:hover {
                        flex: 2;
                        cursor: pointer;

                        .back {
                            filter: brightness(1);
                        }
                        p {
                            &::before {
                                opacity: 1;
                                top: 0;
                            }
                        }
                    }
                    flex: 1;
                    width: 570px;
                    height: 490px;
                    overflow: hidden;
                    position: relative;
                    transition: 0.3s;

                    p {
                        z-index: 3;
                        top: 0;
                        right: 30px;
                        position: absolute;
                        width: 30px;
                        padding: 55px 0;
                        color: white;
                        font-size: 30px;
                        line-height: 1.2;
                        word-break: break-all;
                        &::before {
                            content: '';
                            background-image: url('/images/main/bookmark.png');
                            background-repeat: no-repeat;
                            width: 60px;
                            height: 500px;
                            position: absolute;
                            top: -100%;
                            left: 50%;
                            transform: translateX(-50%);
                            z-index: -1;
                            transition: 0.5s;
                            opacity: 0;
                        }
                    }
                    .back {
                        transition: 0.5s;
                        filter: brightness(0.3);
                    }
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const SubscribeUlStyle = styled.div`
    .swiper-slide {
        width: 280px;
        height: 400px;
        background-color: transparent;

        li {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .img-wrap {
                width: 280px;
                height: 280px;
                overflow: hidden;
                position: relative;
                user-select: none;
                img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    padding: 10px;
                    height: 90%;
                }
            }

            h3 {
                font-size: 25px;
                margin-top: 15px;
                text-align: center;
                white-space: nowrap;
            }
            p {
                margin-top: 5px;
                font-size: 17px;
                text-align: center;
                word-break: keep-all;
            }
        }
    }
`;
