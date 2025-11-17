import styled from 'styled-components';

export const LoginStyle = styled.div`
    margin-top: 56px;
    h2 {
        font-size: 32px !important;
        font-weight: 600;
        color: #333;
    }
    p {
        text-align: center;
    }
    .content {
        width: 1440px;
        padding: 0 40px;
        box-sizing: border-box;
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 150px;
        .left {
            width: 715px;
            height: 700px;
            padding: 0, 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #333;
            > img {
                width: 200px;
                margin-top: 20px;
                margin-bottom: 40px;
            }
            span {
                text-align: center;
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 40px;
            }
            .txtbox {
                &-wrap {
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                }
                width: 450px;
                height: 60px;
                padding: 15px 20px;
                box-sizing: border-box;
                border: 1px solid #c5c5c5;
                display: flex;
                justify-content: left;
                align-items: center;
                margin-bottom: -1px;

                i {
                    color: #9e9e9e;
                    font-size: 20px;
                    margin-right: 10px;
                    margin-top: 10px;
                }
                input {
                    width: 400px;
                    height: 30px;
                    border: none;
                    outline: none;
                    font-size: 15px;
                    color: #7e7e7e;
                    font-family: 'Pretendard';
                }
            }
            p {
                margin: 30px 0;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                font-family: 'Pretendard';
            }
            .btns {
                display: flex;
                gap: 12px;
                button {
                    width: 160px;
                    height: 35px;
                    border-radius: 5px;
                    color: #fff;
                    background-color: #3c6039;
                    font-size: 15px;
                    font-weight: 600;
                    display: inline-block;
                    text-align: center;
                    &:hover {
                        border: 2px solid #3c6039;
                        color: #3c6039;
                        background-color: #fff;
                    }
                }
            }
            .bottom {
                .or {
                    width: 450px;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15px;
                    margin-bottom: 55px;
                    p {
                        width: 60px;
                        height: 40px;
                        font-size: 20px;
                        background-color: #fff;
                    }
                    .line {
                        display: block;
                        width: 450px;
                        height: 2px;
                        background: #ececec;
                        margin-top: -50px;
                        z-index: -1;
                    }
                }
                .snsbox {
                    width: 450px;
                    height: 120px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    button {
                        width: 450px;
                        height: 50px;
                        background-color: #fff;
                        border: 1px solid #c5c5c5;
                        font-size: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 8px;
                        &:hover {
                            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                        }
                        img {
                            width: 23px;
                            height: 23px;
                            display: block;
                        }
                    }
                }
            }
        }
    }
    .right {
        img {
            width: 700px;
            height: 700px;
        }
    }
`;
export const JoinStyle = styled.div`
    .inner {
        margin-top: 56px;
    }
    h2 {
        font-size: 32px !important;
        font-weight: 600;
        color: #333;
    }
    p {
        text-align: center;
    }
    .btn-wrap {
        width: 100%;
        position: relative;
        .join-btn {
            cursor: pointer;
            font-size: 15px;
            color: white;
            width: 240px;
            height: 40px;
            margin-top: 60px;
            background-color: #3c6039;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;
