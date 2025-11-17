import styled from 'styled-components';

export const GiftBestWrap = styled.div`
    background-color: #fdfdf0;
    padding: 100px 0;
    section {
        width: 1440px;
        margin: auto;

        .head {
            position: relative;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 30px;
            h2 {
                position: absolute;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                text-align: center;
                font-size: 25px;
                margin-bottom: 30px;
            }

            .arrow-wrap {
                width: 100px;
                display: flex;
                gap: 40px;
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    height: 28px;
                    position: relative;
                    background-color: transparent;
                    &:first-child {
                        &::after {
                            content: '';
                            position: absolute;
                            right: -20px;
                            width: 1px;
                            height: 16px;
                            background-color: #888;
                        }
                    }
                }
            }
        }
    }
`;
export const GiftBestListWrap = styled.ul`
    width: 1440px;
    min-height: 200px;
    overflow: hidden;
    .slick-slide {
        width: 400px !important;
        margin-right: 40px;
    }
    .slick-list {
        overflow: hidden;
    }
    li {
        width: 400px;
        border-bottom: 1px solid #333;
        padding-bottom: 10px;
        box-sizing: border-box;
        .best-img {
            position: relative;
            margin-bottom: 20px;
            cursor: pointer;
            img {
                width: 100%;
                max-width: 400px;
                display: block;
            }
            .overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.4);
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                max-width: 400px;
                max-height: 480px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                opacity: 0;
                transition: 0.3s ease;
                &:hover {
                    opacity: 1;
                }
                .icon-btn {
                    width: 45px;
                    height: 45px;
                    border-radius: 10px;
                    border: 1px solid #fff;
                    background: transparent;
                    color: #fff;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:hover {
                        background-color: rgba(255, 255, 255, 0.66);
                    }
                }
            }
            .ranking {
                position: absolute;
                left: 20px;
                top: 20px;
                width: 50px;
                height: 50px;
                background-color: #3c6039;
                color: #fff;
                font-size: 40px;
                text-align: center;
                line-height: 1.3;
            }
        }
        h3 {
            font-size: 18px;
            word-break: keep-all;
            white-space: pre-line;
        }
        .price-box {
            text-align: right;
            width: 100%;
            max-width: 400px;
            .discount {
                font-size: 15px;
                color: #999;
                text-decoration: line-through;
                min-height: 24px;
            }
            .price {
                font-size: 17px;
                span {
                    color: #ff7259;
                    font-size: 15px;
                    margin-right: 8px;
                }
            }
        }
    }
`;
