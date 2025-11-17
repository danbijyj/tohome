import styled from 'styled-components';

export const BrandInfoStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
    .brand {
        padding: 8px 50px;
        height: 800px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
            /* padding: 8px 50px; */
            box-sizing: border-box;
            display: flex;
            align-items: center;
            gap: 58px;
            h2 {
                width: 352px;
                height: 60px;
                font-size: 30px;
                font-weight: 600;
                color: #3c6039;
                display: flex;
                border-bottom: 1px solid #333;
            }
            .line {
                content: '';
                width: 930px;
                height: 1px;
                height: 60px;
                border-bottom: 1px solid #333;
            }
        }

        table {
            margin-top: 25px;
            border-collapse: separate;
            td,
            th {
                &:first-child {
                    width: 352px;
                    height: 155px;
                    font-size: 25px;
                    font-weight: 600;
                    color: #333;
                    text-align: left;

                    p {
                        position: relative;
                        display: inline-block;
                        &::before {
                            content: '';
                            position: absolute;
                            background-color: #3c6039;
                            right: -15px;
                            top: 0;
                            border-radius: 50px;
                            width: 8px;
                            height: 8px;
                        }
                    }
                }
                &:last-child {
                    width: 930px;
                    box-sizing: border-box;
                    font-size: 20px;
                    line-height: 150%;
                    color: #333;
                    text-align: left;
                    padding-left: 16px;
                }
            }
        }

        img {
            width: 1440px;
            height: 350px;
        }
    }
`;

export const BrandListStyle = styled.div`
    .filter-wrap {
        display: flex;
        justify-content: end;
        margin-top: 70px;
        margin-bottom: 30px;
        p {
            cursor: pointer;
            position: relative;
            font-size: 15px;
            font-weight: 400;
            color: #666;
            &.on {
                font-weight: 600;
                color: #3c6039;
            }
            &:not(:last-child) {
                margin-right: 40px;
                &::after {
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 60%;
                    background-color: #666;
                    right: -20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`;
