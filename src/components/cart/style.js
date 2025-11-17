import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    /* align-items: center; */
    gap: 55px;
    .left {
        /* flex: 1; */
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const CartBoxStyle = styled.div`
    /* margin-top: 100px; */
    padding: 20px 0;
    border-top: 2px solid #000;
    width: 1000px;
`;

export const ItemBox = styled.div`
    display: flex;
    /* .subBox { */
    width: 1000px;
    height: 226px;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    box-sizing: border-box;
    display: flex;
    padding: 20px 0;
    align-items: flex-start;
    /* gap: 20px; */
    .image {
        width: 180px;
        height: 186px;
        /* border: 1px solid #000; */
        background: pink;
        margin-right: 20px;
    }
    .txt {
        display: flex;
        flex-direction: row;
        gap: 20px;
        p {
            font-size: 20px;
            font-weight: 500;
        }
        span {
            font-size: 14px;
            font-weight: 600;
            display: flex;
            justify-content: center;
        }
        .price {
            width: 150px;
            p {
                font-size: 18px;
                font-family: 'Pretendard';
            }
            span {
                display: flex;
                justify-content: center;
                font-size: 14px;
                color: #9e9e9e;
                text-decoration: line-through;
            }
        }
        .name {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            p {
                text-align: left;
            }
        }
        .calc {
            width: 80px;
            height: 24px;
            display: flex;
            gap: 8px;
            justify-content: center;
            align-items: center;
            button {
                background: none;
                font-size: 18px;
            }
            .num {
                font-size: 20px;
            }
        }
        .purchase {
            width: 90px;
            height: 42px;
            /* padding: 10px; */
            background: #386633;
            display: flex;
            justify-content: center;
            text-align: center;
            button {
                background: none;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
            }
        }
        .icons {
            display: flex;
            justify-content: center;

            gap: 10px;
            height: 40px;
            font-size: 25px;
            .heart-wrap {
                position: relative;

                width: 35px;
                height: 40px;
                .heart-in-cart {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    line-height: 50%;
                    border-radius: 5px;
                    color: #ff7259;

                    font-size: 20px;
                    background-color: #f7f7f7ff;
                    &:hover {
                        color: #ffb2a4;
                    }
                }
            }
            .cancel {
                cursor: pointer;
                font-size: 30px;
            }
        }
    }
    /* } */
`;

export const OrderBoxStyle = styled.div`
    width: 1000px;
`;
export const FormsStyle = styled.div`
    .Info {
        width: 960px;
        padding: 20px;
        border: 1px solid;
        margin-bottom: 20px;
        &.payment {
            .options {
                display: flex;
                gap: 10px;
                margin-top: 20px;
                justify-content: center;
                li {
                    width: 207px;
                    height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    input[type='radio'] {
                        margin: 0;
                    }
                }
            }
        }
    }
    .title {
        display: flex;
        gap: 10px;
        align-items: center;
        border-bottom: 1px solid #000;
        padding: 20px;

        p {
            font-size: 24px;
            font-weight: 600;
        }
        span {
            font-size: 16px;
            font-weight: 500;
            color: #7e7e7e;
        }
    }
    .forms {
        .form {
            display: flex;
            margin: 20px;
            gap: 10px;
            font-family: 'Pretendard';
            label {
                width: 170px;
                font-size: 16px;
                font-weight: 500;
                display: flex;
                align-items: center;
            }
            .field-group {
                /* width: 270px; */
                height: 40px;
                display: flex;
                gap: 10px;
                input {
                    width: 270px;
                    border: 1px solid #d8d8d8;
                }
            }
            &.email {
                select {
                    width: 222px;
                    height: 40px;
                    border: 1px solid #d8d8d8;
                    color: #3b3b3b;
                    padding: 10px;
                    option {
                        font-size: 16px;
                    }
                }
                span {
                    height: 40px;
                    display: flex;
                    align-items: center;
                }
            }
            &.tel {
                select {
                    width: 120px;
                    height: 40px;
                    border: 1px solid #d8d8d8;
                    color: #3b3b3b;
                    display: flex;
                    text-align: center;
                }
                input {
                    width: 80px;
                    display: flex;
                    text-align: center;
                }
            }
            &.addr {
                input {
                    width: 700px;
                    padding: 0 10px;
                }
            }
            &.message {
                input {
                    width: 700px;
                    padding: 0 10px;
                }
            }
        }
    }
`;

export const ResultStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ResultBoxStyle = styled.div`
    width: 1000px;
    border: 1px solid #000;
    padding: 60px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .innerBox {
        width: 960px;
        /* border: 1px solid #000; */
        .title {
            width: 100%;
            border-bottom: 1px solid #000;
            padding-bottom: 20px;
            p {
                font-size: 20px;
                font-weight: 500;
            }
            strong {
                font-size: 20px;
                font-weight: 600;
                display: flex;
                text-align: center;
                justify-content: center;
            }
        }
        .total {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px 0;
            border-bottom: 1px solid #000;
            font-family: 'Pretendard';
            .price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Pretendard';
            }
        }
        .cost {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            font-family: 'Pretendard';
            p {
                font-size: 24px;
                font-weight: 600;
            }
        }
        .orderButton {
            width: 100%;
            button {
                background: none;
                width: 50%;
                height: 40px;
                font-size: 15px;
                font-weight: 700;
                color: #fff;
                background: #f3829e;
                &:first-child {
                    background: #386633;
                }
            }
        }
    }
`;

export const CartEmptyStyle = styled.div`
    width: 100%;
`;
