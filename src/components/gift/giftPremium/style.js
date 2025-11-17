import styled from 'styled-components';

export const GiftPremiumWrap = styled.div`
    padding-top: 150px;
    margin: auto;
    h2 {
        margin-bottom: 30px;
        font-size: 25px !important;
    }
    .btn-more {
        font-size: 12px;
        color: #888;
        background-color: #fff;
        border: 1px solid #888;
        width: 135px;
        height: 40px;
        display: block;
        margin: 60px auto 0;
        transition: 0.3s;
        &:hover {
            background-color: #333;
            color: white;
        }
    }
`;

export const GiftPremiumListWrap = styled.ul`
    display: flex;
    gap: 40px;
    width: 1440px;
    flex-wrap: wrap;
    > li {
        border-bottom: 1px solid #333;
        padding-bottom: 20px;
    }
    li {
        width: 330px;
        .premium-img {
            height: 330px;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
            img {
                width: 330px;
                cursor: pointer;
            }
            .overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.4);
                left: 0;
                top: 0;
                width: 330px;
                height: 330px;
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
        }
        h3 {
            font-size: 16px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .price-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            .price-dsc {
                font-size: 13px;
                color: #3c6039;
                span {
                    border: 1px solid #3c6039;
                    padding: 3px 10px;
                    margin-right: 10px;
                }
            }
            .price {
                text-align: right;
                font-size: 17px;
            }
        }
    }
`;
