import styled from 'styled-components';

export const FaqStyle = styled.section`
    padding-top: 85px;
    h2 {
        font-size: 32px;
        font-weight: 600;

        text-align: left !important;
        margin-bottom: 16px;
    }
    h3 {
        padding: 10px;
        margin-left: 20px;
        font-size: 20px;
        /* border: 1px solid #000; */
    }
    .accr {
        font-family: 'pretendard';
        cursor: pointer;
        user-select: none;
        width: 100%;
        &.on {
            .accHead {
                border: 2px solid #ff7259;
                .circle {
                    color: #fff;
                    background-color: #ff7259;
                    font-size: 24px;
                    font-family: 'Arita buri';
                }
            }
            .accBody {
                display: block;
            }
        }

        .accHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid #fff;
            border-bottom: 1px solid #333;
            height: 70px;
            padding: 0 20px;
            .circle {
                font-family: 'Arita buri';
                font-size: 24px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                border-radius: 100px;
                text-align: center;
                margin-right: 10px;
                padding: 7px 12px;
                /* box-sizing: border-box; */
            }
        }
        .accBody {
            display: none;
            padding: 30px 60px;
            background-color: #f3f3f3;
            transition: 0.4s;
            /* max-height: 0px; */
            font-family: 'Pretendard';
            p {
                color: #5f5f5f;
                text-align: left;
                word-break: keep-all;
            }
        }
    }
`;

export const FaqTap = styled.section`
    margin-bottom: 70px;
    div {
        cursor: pointer;
        border-top: 1px solid #5f5f5f;
        display: flex;
        flex-wrap: wrap;
        p {
            font-weight: 500;
            width: 286px;
            height: 70px;
            background-color: white;
            font-size: 20px;
            color: #3f3f3f;
            line-height: 70px;
            border: 1px solid #c5c5c5;
            &.on,
            &:hover {
                background-color: #5f5f5f;
                color: white;
                border: 1px solid #5f5f5f;
            }
        }
    }
`;
