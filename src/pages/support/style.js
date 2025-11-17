import styled from 'styled-components';

export const SupportWrap = styled.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px !important;
    }
    p {
        text-align: center;
    }
`;

export const SupporMainTap = styled.section`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    width: 100%;
    height: 80px;

    h2 {
        height: 100%;
        font-size: 40px;
        line-height: 80px;
        font-weight: 600;
    }
    .tab {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid #000; */
        font-size: 18px;
        cursor: pointer;
        p {
            font-weight: 500;
            &.on {
                font-weight: 700;
            }
            &:not(:last-child) {
                margin-right: 25px;
            }
        }
    }
`;
