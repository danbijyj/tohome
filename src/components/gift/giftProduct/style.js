import styled from 'styled-components';

export const GiftProductWrap = styled.div`
    width: 1500px;
    margin: auto;
    padding: 150px 0;
    button {
        font-size: 12px;
        color: #888;
        background-color: #fff;
        border: 1px solid #888;
        width: 135px;
        height: 40px;
    }
`;

export const GiftListTopWrap = styled.ul`
    display: flex;
    width: 1200px;
    margin: 30px auto 0;
    justify-content: center;
    font-size: 15px;
    padding: 30px 0 100px;
    border-top: 1px solid #666;
    li {
        font-family: 'pretendard';
        margin-left: 40px;
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
        &:first-child {
            margin-left: 0;
        }
        &.active {
            color: #3c6039;
            font-weight: 600;
        }
    }
`;

export const GiftProducts = styled.div`
    .category-sort {
        display: flex;
        justify-content: right;
        font-size: 15px;
        margin-bottom: 30px;
        font-family: 'pretendard';
        li {
            margin-left: 40px;
            cursor: pointer;
            position: relative;
            color: #666;
            font-weight: 400;
            &.active {
                color: #3c6039;
                font-weight: 600;
            }
            &::after {
                content: '';
                width: 1px;
                height: 15px;
                background-color: #666;
                position: absolute;
                top: 50%;
                transform: translateY(-55%);
                right: -20px;
            }
            &:last-child::after {
                content: none;
            }
        }
    }
`;

export const GiftListWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 62px;
    li {
        width: 250px;
        padding-bottom: 10px;
        border-bottom: 1px solid #333;
        margin-bottom: 18px;
        .img-wrap {
            position: relative;
            overflow: hidden;
            img {
                width: 250px;
                margin-bottom: 15px;
                display: block;
            }
            .overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.4);
                left: 0;
                top: 0;
                width: 250px;
                height: 300px;
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
