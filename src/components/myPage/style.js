import styled from 'styled-components';

export const MyPageItemStyle = styled.div`
    .inner {
        margin-top: 100px;
        .name {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
            h2 {
                font-size: 25px !important;
                font-weight: 600;
                color: #ff7259;
                margin-right: 5px;
            }
            span {
                font-size: 16px;
                font-weight: 600;
                color: #666666;
            }
        }
        .items {
            width: 1440px;
            height: 50px;
            background-color: #ff7259;
            display: flex;
            justify-content: center;
            gap: 200px;

            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    margin-right: 26px;
                }
                strong {
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                    margin-right: 10px;
                    text-decoration: underline;
                    cursor: pointer;
                }
                p {
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                }
            }
            .item3 {
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    margin-right: 26px;
                }
                strong {
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                    margin-right: 10px;
                    text-decoration: underline;
                    cursor: pointer;
                }
                p {
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                }
            }
        }
        .list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 100px;
            .menu {
                width: 287px;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                img {
                    height: 35px;
                }

                span {
                    font-size: 17px;
                    font-weight: 700;
                    color: #333;
                }
                p {
                    font-size: 14px;
                    font-weight: 600;
                    color: #7e7e7e;
                    font-family: 'Pretendard';
                }
            }
        }
        .order {
            margin-top: 100px;
            .text {
                display: flex;
                justify-content: left;
                align-items: center;
                margin-bottom: 15px;
                h2 {
                    font-size: 24px !important;
                    font-weight: 700;
                    color: #333;
                    margin-right: 8px;
                }
                span {
                    font-size: 14px;
                    font-weight: 600;
                    color: #7e7e7e;
                    margin-top: 10px;
                }
            }

            .stepbystep {
                width: 1440px;
                height: 160px;
                background-color: #f3f3f3;
                position: relative;
                margin-bottom: 100px;
                .inner {
                    width: 1210px;
                    height: 75px;
                    margin: auto;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .step {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        strong {
                            font-size: 40px;
                            font-weight: 700;
                            color: #7e7e7e;
                        }
                        span {
                            font-size: 17px;
                            font-weight: 600;
                            color: #666666;
                        }
                    }
                    .step4 {
                        strong {
                            color: #ff7259;
                        }
                    }
                    .step5 {
                        strong {
                            color: #ff7259;
                        }
                    }
                    i {
                        font-size: 15px;
                    }
                }
            }
        }
    }
`;

export const MyPageLikesStyle = styled.div`
    .like {
        .text {
            width: 1440px;
            height: 29px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #d8d8d8;
            padding-bottom: 15px;
            h2 {
                font-size: 24px !important;
                font-weight: 700;
                color: #333;
                margin-right: 8px;
            }
            button {
                background: none;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    color: #7e7e7e;
                    margin-top: 10px;
                    margin-right: 10px;
                }
                img {
                    height: 20px;
                    margin-top: 10px;
                }
            }
        }
    }
    .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 100px;
        .menu {
            width: 287px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                height: 35px;
            }

            span {
                font-size: 17px;
                font-weight: 700;
                color: #333;
            }
            p {
                font-size: 14px;
                font-weight: 600;
                color: #7e7e7e;
            }
        }
        .swiper-slide {
            h3 {
                text-align: left;
                padding-left: 10px;
            }
        }
        &.expanded {
            .grid-list {
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));
                column-gap: 50px;
                row-gap: 0px;
            }
        }
    }
`;
