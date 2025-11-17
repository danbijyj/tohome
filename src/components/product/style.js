import styled from 'styled-components';

export const ProductListStyle = styled.ul`
    width: 1440px;
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
    justify-content: start;

    h2 {
        font-size: 20px;
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        gap: 6.1538vw;
        display: flex;
        justify-content: center;
    }
`;
export const ProductItemStyle = styled.li`
    width: 250px;
    height: 440px;
    box-sizing: border-box;
    border-bottom: 1px solid #333;
    margin-bottom: 65px;
    cursor: pointer;
    &:not(:nth-child(5n)) {
        margin-right: 9.5px;
    }

    .img-wrap {
        position: relative;
        overflow: hidden;
        width: 250px;
        height: 300px;
        margin-bottom: 20px;
        position: relative;
        background-color: #f3f3f3;

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            height: auto;
            display: block;
        }
        .overlay {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.4);
            left: 0;
            top: 0;
            width: 250px;
            height: 305px;
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
        .checkbox {
            background-color: #ff7259;
        }
    }
    h3 {
        word-break: keep-all;
        font-size: 16px;
        height: 55px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .price-box {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: flex-end;
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
    .des {
        font-size: 15px;
        margin-top: 20px;
        word-break: keep-all;
    }
    @media screen and (max-width: 600px) {
        width: 43.5897vw;
        height: 77.0256vw;
        margin-right: 0 !important;
        border-bottom: 0;
        margin-bottom: 0;
        .img-wrap {
            width: 43.5897vw;
            height: 51.2821vw;
            img {
                width: 43.5897vw;
                height: 51.2821vw;
            }
            .overlay {
                width: 43.5897vw;
                height: 51.2821vw;
            }
        }
        h3 {
            font-size: 3.5897vw;
            height: 10.7692vw;
        }
        .price-box {
            .discount {
                font-size: 3.0769vw;
            }
            .price {
                font-size: 3.5897vw;
                span {
                    font-size: 3.5897vw;
                }
            }
        }
    }
`;

export const ProductDetailStyle = styled.div`
    max-height: 900px;
    padding: 60px 20px;
    display: flex;
    justify-content: center;
`;
