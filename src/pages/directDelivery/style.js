import styled from 'styled-components';

export const DirectDeliveryWrap = styled.div`
    .inner {
    }
    .titleBox {
        border-top: 1px solid;
        border-bottom: 1px solid;
        padding: 75px 0;
        text-align: center;
        width: 100%;
        h2 {
            font-size: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            gap: 10px;
            margin-bottom: 30px;
            img {
                width: 45px;
                height: 45px;
            }
        }
        p {
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            color: #666;
        }
    }

    .banner {
        position: relative;
        margin-top: 40px;
        padding: 30px 0;
        display: grid;
        width: 100%;
        margin-bottom: 120px;
        .left {
            display: flex;
            flex-direction: column;
            gap: 24px;
            .points {
                display: grid;

                .point {
                    margin-bottom: 30px;
                    .title {
                        font-size: 16px;
                        font-weight: 600;
                        span {
                            color: #3c6039;
                        }
                    }
                    .desc {
                        font-size: 13px;
                        font-weight: 500;
                        color: #666;
                        margin-top: 5px;
                    }
                }
                .row {
                    display: flex;
                    gap: 36px;
                }
            }
            .notice {
                width: 650px;
                height: 55px;
                background: #f8f8f8;
                border-radius: 10px;
                padding: 8px 75px;
                border: 1px solid #c5c5c5;
                .words {
                    width: 510px;
                    display: flex;
                    margin-top: 5px;
                    p {
                        font-size: 14px;
                        font-weight: 600;
                        color: #3c6039;
                        margin-right: 18px;
                    }

                    span {
                        font-size: 13px;
                        font-weight: 500;
                        &:nth-of-type(2) {
                            margin-right: 8px;
                        }
                    }
                }
                span {
                    font-size: 12px;
                    color: #666;
                }
            }
        }
        .right {
            position: absolute;
            width: 600px;
            top: 0;
            right: 0;
        }
    }

    .menu {
        width: 100%;
        border-top: 1px solid;
        margin-top: 125px;
        ul {
            display: flex;
            gap: 10px;
            margin-top: 30px;
            justify-content: center;
            li {
                padding: 5px 20px;

                display: flex;
                align-items: center;
                justify-content: center;
                &.on {
                    font-weight: 600;
                    color: #3c6039;
                }
            }
        }
    }
    .filter-wrap {
        display: flex;
        justify-content: end;
        margin-top: 70px;
        margin-bottom: 30px;
        gap: 20px;
        p {
            cursor: pointer;
            position: relative;
            font-size: 15px;
            color: #666;
            font-weight: 400;
            &.on {
                font-weight: 600;
                color: #3c6039;
            }
            &:not(:last-child) {
                margin-right: 20px;
                &::after {
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 60%;
                    background-color: #666;
                    right: -20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`;
