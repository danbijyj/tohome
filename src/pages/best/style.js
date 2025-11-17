import styled from 'styled-components';

export const BestWrap = styled.div`
    .top-wrap {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            background-color: #333;
            width: 1200px;
            height: 1px;
            left: 50%;
            top: 53%;
            transform: translateX(-50%);
        }
    }
    .filter-wrap {
        display: flex;
        justify-content: right;
        font-size: 15px;
        margin-bottom: 30px;
        font-weight: 400;
        p {
            margin-left: 40px;
            cursor: pointer;
            position: relative;
            color: #666;
            &.on {
                color: #3c6039 !important;
                font-weight: 600;
            }
            &:not(:last-child) {
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
            }
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        .top-wrap {
            width: 100vw;
            &::before {
                width: 91.7949vw;
            }
        }
        .product-list {
            margin-top: 60px;
        }
        .filter {
            z-index: 100;
            width: 100vw;
            display: flex;
            justify-content: flex-end;
            position: absolute;

            .filter-wrap {
                width: 18.4615vw;
                border-left: 1px solid #333;
                border-right: 1px solid #333;
                position: relative;
                cursor: pointer;
                overflow: hidden;
                display: flex;
                justify-content: center;
                margin-top: 0;
                p {
                    font-weight: 500;
                    display: none;
                    font-size: 3.0769vw;
                    width: 100%;
                    margin-left: 0;
                    text-align: center;
                    box-sizing: border-box;
                    &.on {
                        width: 18.4615vw;
                        font-size: 3.0769vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 0;
                    }
                    &:not(:last-child) {
                        &::after {
                            display: none;
                        }
                    }
                }
                &:hover,
                &:focus-within {
                    background-color: white;
                    padding: 10px;
                    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
                    display: flex;
                    height: auto;
                    overflow: visible;
                    flex-direction: column;
                    gap: 4.0513vw;
                    justify-content: center;
                    width: 18.4615vw;
                    border: none;

                    p {
                        font-size: 3.0769vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        margin-right: 0;
                        &:hover {
                            border-left: 1px solid #333;
                            border-right: 1px solid #333;
                        }
                    }
                }
            }
        }
    }
`;
