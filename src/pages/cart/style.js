import styled from 'styled-components';

export const CartBottomStyle = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
    .countBox {
        border: 1px solid #000;
        width: 382px;
        height: 430px;
        padding: 80px 20px;
        box-sizing: border-box;
        .total {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            span {
                font-size: 15px;
                font-weight: 700;
                color: #666;
            }
            .priceT {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            .discountT {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            .delivery {
                display: flex;
                justify-content: space-between;
            }
        }
        .line {
            border: 1px solid #3f3f3f;
            margin-top: 20px;
        }
        .cost {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            p {
                font-size: 24px;
                font-weight: 600;
            }
        }
        .buttons {
            .CartListB {
                width: 100%;
                margin-top: 35px;
                /* border: 1px solid #000; */
                display: flex;
                justify-content: center;
                align-items: center;
                button {
                    width: 190px;
                    padding: 10px;
                    box-sizing: border-box;
                    background: none;
                    font-size: 15px;
                    font-weight: 700;
                    background: #386633;
                    color: #fff;
                }
            }
            .CartOrderB {
                width: 100%;
                margin-top: 35px;
                display: flex;
                button {
                    width: 172px;
                    padding: 10px;
                    box-sizing: border-box;
                    background: none;
                    font-size: 15px;
                    font-weight: 700;
                    background: #9e9e9e;
                    color: #fff;
                    &:first-child {
                        background: #386633;
                    }
                }
            }
        }
    }
`;

export const CartWrap = styled.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
    }
    p {
        text-align: center;
    }
    .steps {
        display: flex;
        justify-content: center;
        .box {
            cursor: pointer;
            display: flex;
            width: 145px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* border: 1px solid #000; */
        }
        .dot {
            &.on {
                background: #2f592b;
                border: 10px solid #2f592b;
            }
            display: flex;
            box-sizing: border-box;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 10px solid #b1b1b1;
        }
        .txt {
            &.on {
                color: #2f592b;
            }
            margin-top: 20px;
            font-size: 20px;
            font-weight: 500;
            display: flex;
            font-family: 'Pretendard';
        }
        .line {
            &.on {
                background: #2f592b;
            }
            background: #b1b1b1;
            height: 3px;
            width: 390px;
            margin-top: 14px;
        }
    }

    .menu {
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin-top: 45px;
        ul {
            display: flex;
            gap: 20px;
            li {
                padding: 18px 7px;
                color: #2f592b;
                font-size: 24px;
                font-weight: 600;
                color: #b1b1b1;
                &.on {
                    border-bottom: 2px solid #2f592b;
                    color: #2f592b;
                }
            }
        }
    }
`;
