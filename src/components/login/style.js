import styled from 'styled-components';

export const JoinItemStyle = styled.div`
    .inner {
        width: 1440px;
        margin: auto;
        color: #333;
        .section1 {
            margin-bottom: 50px;
            .toptxt {
                display: flex;
                margin: 0 20px;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 18px;
                span {
                    font-size: 20px;
                    font-weight: 600;
                }
                .sub {
                    display: flex;
                    gap: 5px;
                    justify-content: right;
                    align-items: center;
                    p {
                        font-size: 15px;
                        &:nth-child(1) {
                            color: #ff0000;
                        }
                    }
                }
            }
            .table-wrap colgroup {
                .w1 {
                    width: 300px;
                }
                .w2 {
                    width: 1140px;
                }
            }
            .form tbody tr {
                td {
                    border: 1px solid #adadad;
                    vertical-align: top;
                    padding: 10px 15px;
                    font-family: 'Pretendard';
                    label {
                        font-size: 18px;
                        font-weight: 500;
                        color: #333;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        gap: 5px;
                        margin-top: 10px;
                    }
                    p {
                        font-size: 20px;
                        font-weight: 500;
                        color: #ff0000;
                    }
                }
                td input {
                    width: 700px;
                    height: 48px;
                    font-size: 16px;
                    font-weight: 500;
                    border: 1px solid #d8d8d8;
                    padding: 0px 15px;
                    box-sizing: border-box;
                    outline: none;
                    font-family: 'Pretendard';
                }
            }
            tr {
                &:nth-child(5) {
                    td {
                        &:nth-child(2) {
                            input {
                                width: 220px;
                                margin-right: 10px;
                            }
                            select {
                                margin-left: 10px;
                                width: 220px;
                                height: 48px;
                            }
                        }
                    }
                }
            }
            tr {
                &:nth-child(6) {
                    td {
                        &:nth-child(2) {
                            input {
                                margin-right: 10px;
                                width: 100px;
                            }
                            select {
                                margin-right: 10px;
                                width: 120px;
                                height: 48px;
                            }
                        }
                    }
                }
            }
        }
        /* section1 */

        .section2 {
            .bottomtxt {
                display: flex;
                margin: 0 20px;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 18px;
                span {
                    font-size: 20px;
                    font-weight: 600;
                }
            }
            .table-wrap colgroup {
                .w1 {
                    width: 300px;
                    background-color: #ececec;
                }
                .w2 {
                    width: 1140px;
                }
            }
            .form tbody tr {
                td {
                    font-family: 'Pretendard';
                    border: 1px solid #adadad;
                    vertical-align: top;
                    padding: 10px 15px;
                    font-size: 18px;
                    font-weight: 500;
                    .gender {
                        display: flex;
                        gap: 10px;
                        p {
                            button {
                                font-family: 'Pretendard';
                                font-size: 16px;
                                font-weight: 500;
                                width: 90px;
                                height: 48px;
                                background: #fff;
                                color: #7e7e7e;
                                border: 1px solid #7e7e7e;
                                &:hover {
                                    color: #fff;
                                    background: #666666;
                                }
                            }
                        }
                    }
                    label {
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        gap: 5px;
                        margin-top: 10px;
                    }
                }
                td input {
                    width: 700px;
                    height: 48px;
                    font-size: 16px;
                    font-weight: 500;
                    border: 1px solid #d8d8d8;
                    padding: 0px 15px;
                    box-sizing: border-box;
                    outline: none;
                }
            }
            .form {
                tr {
                    &:nth-child(2) {
                        td {
                            &:nth-child(2) {
                                display: flex;
                                border-top: none;
                                border-left: none;
                                border-bottom: none;
                                select {
                                    width: 100px;
                                    height: 48px;
                                    margin-right: 5px;
                                }
                                span {
                                    margin-right: 15px;
                                }
                                p {
                                    margin-right: 10px;

                                    button {
                                        font-size: 16px;
                                        font-weight: 500;
                                        width: 90px;
                                        height: 48px;
                                        background: #fff;
                                        font-family: 'pretendard';
                                        color: #7e7e7e;
                                        border: 1px solid #7e7e7e;
                                        &:hover {
                                            color: #fff;
                                            background: #666666;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            tr {
                &:nth-child(3) {
                    td {
                        .address {
                        }

                        &:nth-child(2) {
                            input {
                                width: 500px;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
        details {
            p {
                text-align: left;
            }
            .agree {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                input[type='checkbox'] {
                    width: 24px;
                    height: 24px;
                    border: 2px solid #b1b1b1;
                    border-radius: 5px;
                    cursor: pointer;
                    appearance: none;
                    -webkit-appearance: none;
                    background-color: #fff;
                    transition: all 0.2s;
                    margin-right: 12px;

                    /* 체크된 상태 */
                    &:checked {
                        background-color: #3c6039;
                        border-color: #3c6039;
                    }

                    /* 체크된 상태에 체크마크 표시 */
                    &:checked::after {
                        content: '✔';
                        display: block;
                        text-align: center;
                        color: #fff;
                        font-size: 20px;
                        line-height: 20px;
                    }
                }
            }

            span {
                font-size: 15px;
                font-weight: 500;
                color: #333333;
                margin-right: 4px;
            }
        }
        .joinbtn p {
            margin: 60px auto 0px;
            button {
                width: 240px;
                height: 40px;
                background-color: #3c6039;
                color: #fff;
                font-size: 15px;
                font-weight: 600;
                border-radius: 5px;
                &:hover {
                    background-color: #fff;
                    border: 1px solid #3c6039;
                    color: #3c6039;
                }
            }
        }
        margin-bottom: 150px;
    }
`;

export const JoinInfoStyle = styled.div`
    .info-tab {
        &-wrap {
        }
        &-head {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            width: 100%;
            height: 70px;
            padding: 0 20px;
            border: 1px solid #b1b1b1;
            form {
                position: relative;
                width: 100%;
                height: 100%;
                /* background-color: aqua; */
            }
            .arrowDown {
                font-size: 30px;
                height: 35px;
            }
        }
        &-body {
            padding: 30px;

            border: 1px solid #000;
            width: 100%;
            box-sizing: border-box;
            max-height: 300px;
            overflow-y: auto;

            p {
                text-align: left;
                line-height: 1.4;
            }
            .checkbox {
                &-wrap {
                    padding: 30px;
                    border: 1px solid #000;
                }
                font-family: 'Pretendard';
                padding-left: 20px;
                padding-bottom: 10px;
                &:last-of-type {
                    padding-bottom: 0;
                }
                height: 40px;
            }
        }
        &-box {
            &4 {
                .info-tab-body {
                    padding: 0;
                    border: none;
                }
            }
        }
    }
`;
