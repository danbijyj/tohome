import styled from 'styled-components';

export const SpecialBrandWrap = styled.div`
    .inner {
        margin-top: 56px;
        .top {
            height: 250px;
            margin-bottom: 80px;
            padding-top: 48px;
            box-sizing: border-box;
            p {
                font-size: 15px;
                font-weight: 600;
                text-align: center;
                color: #666;
                margin-bottom: 10px;
            }
            h2 {
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 30px;
                padding-bottom: 30px;
                border-bottom: 1px solid #333;
            }
            .brand {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 233px;
                p {
                    font-size: 20px;
                    color: #333;
                    font-weight: 500;
                    cursor: pointer;
                    &:hover,
                    &.on {
                        color: #3c6039;
                        font-weight: 600;
                    }
                }
            }
        }
        .filter-category-wrap {
            display: flex;
            border-top: 1px solid #666;
            justify-content: space-between;
            padding: 30px;
            p {
                font-size: 20px;
            }
        }
    }
`;
