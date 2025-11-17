import styled from 'styled-components';

export const SaleWrap = styled.div`
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
`;
