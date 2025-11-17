import styled from 'styled-components';

export const GiftResWrap = styled.div`
    width: 700px;
    .gift-rest-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        align-items: center;
        p {
            margin-right: 20px;
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
`;

export const GiftResListWrap = styled.ul`
    .slick-slide {
        width: 330px !important;
        margin-right: 40px;
        box-sizing: border-box;
    }
    .slick-list {
        overflow: hidden;
    }
    li {
        width: 330px;
        border-bottom: 1px solid #333;
        padding-bottom: 10px;
        .popular-img {
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
            text-align: right;
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
