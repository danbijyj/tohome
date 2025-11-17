import styled from 'styled-components';

export const ProductTopStyle = styled.ul`
    z-index: 100;
    width: 1200px;
    border-top: 1px solid;
    margin-top: 125px;
    margin: auto;
    padding-top: 30px;
    box-sizing: border-box;
    /* padding: 0 120px; */
    display: flex;
    justify-content: space-around;
    li {
        cursor: pointer;
        max-width: 90px;
        white-space: nowrap;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${(props) => props.fontSize || '15px'};
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 18px;
        &.on {
            font-weight: 600;
            color: #3c6039;
        }
    }
`;
export const ProductResultStyle = styled.div`
    .result {
        &-top {
            margin-top: 20px;
            height: 250px;
            margin-bottom: 30px;
            h2 {
                border-bottom: 1px solid #000;
                padding-bottom: 30px;
                strong {
                    color: #3c6039;
                }
                span {
                    color: #666;
                }
            }
            .filter {
                display: flex;
                justify-content: space-around;
                margin-top: 30px;
                li {
                    &.active {
                        color: #3c6039;
                    }
                }
            }
            .sort {
                margin-top: 110px;
                display: flex;
                justify-content: end;
                li {
                    padding: 0 20px;
                    color: #666;
                    font-size: 15px;
                    height: 18px;
                    line-height: 18px;

                    &:not(:last-child) {
                        border-right: 1px solid #666;
                    }
                    &:last-child {
                        padding-right: 0;
                    }
                    &.active {
                    }
                }
            }
        }
    }
    .list {
        border: 1px solid #000;
    }
`;

export const ProductSearchStyle = styled.div`
    width: 100vw;
    height: 340px;
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 500;
    border-top: 1px solid #f3f3f3;
    .close-btn {
        font-size: 26px;
        position: absolute;
        right: 0;
        top: 30px;
        cursor: pointer;
    }
    .overlay {
        position: absolute;
        top: 340px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100vw;
        background: rgba(0, 0, 0, 1);
    }

    .inner {
        z-index: 1;
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
        .search {
            &-hot,
            &-recom,
            &-tags {
                min-width: 400px;
                max-width: 400px;
                max-height: 230px;
                height: 230px;
                .list {
                    box-sizing: border-box;
                    margin-top: 16px;
                    max-height: 230px;
                    overflow: hidden;

                    li {
                        cursor: pointer;
                        user-select: none;
                        font-size: 14;
                        display: flex;
                        align-items: center;
                        position: relative;

                        span {
                            font-size: 25px;
                            font-style: italic;
                            margin-right: 20px;
                            color: #3c6039;
                        }
                    }
                }
            }
            &-hot {
                .list {
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    flex-direction: column;

                    li {
                        &::before {
                            position: absolute;
                            content: '';
                            width: 80%;
                            height: 1px;
                            background-color: #333;
                            bottom: 6px;
                            transition: 0.3s;
                            transform: translateX(-50%) scale(0);
                        }
                        &:hover {
                            &::before {
                                transform: translateX(0%) scale(1);
                            }
                        }
                    }
                }
            }
            &-recom {
                .list {
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 16px;
                    row-gap: 10px;
                    li {
                        padding: 8px 20px;
                        border-radius: 20px;
                        border: 1px solid #d8d8d8;
                        text-align: center;
                        height: 37px;
                        box-sizing: border-box;
                        &:hover {
                            background-color: #7e7e7e;
                            border: 1px solid #7e7e7e;
                            color: white;
                        }
                    }
                }
            }
            &-tags {
                .list {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    column-gap: 10px;
                    row-gap: 16px;
                    li {
                        color: #3c6039;
                        padding: 8px 24px;
                        border-radius: 20px;
                        background: var(--Gray-50, #f3f3f3);
                        &:hover {
                            background-color: #3c6039;
                            color: white;
                        }
                    }
                }
            }
            &-title {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
    &::before {
    }
`;
