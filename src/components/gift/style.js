import styled from 'styled-components';

export const GiftPointWrap = styled.div`
    height: 300px;
    margin-top: 40px;
    align-content: center;
    background-image: url('/images/gift/gift_point.png');
    background-repeat: no-repeat;
    background-position: right 0 top 0;
    .gift-point-text {
        display: flex;
        margin-bottom: 45px;
        li {
            width: 500px;
            h3 {
                margin-bottom: 10px;
                position: relative;
                span {
                    color: #3c6039;
                }
                &::before {
                    content: '';
                    width: 110px;
                    height: 1px;
                    background-color: #333;
                    position: absolute;
                    top: -15px;
                    left: 0;
                }
            }
            p {
                font-size: 13px;
                color: #666;
                font-weight: 400;
                font-family: 'pretendard';
            }
        }
        &:last-child {
            margin-bottom: 0px;
        }
    }
`;

export const GiftTutorialWrap = styled.div`
    .tutorial-btn {
        text-align: right;
        button {
            margin: 40px 0;
            background: #fff;
            img {
                margin-left: 20px;
            }
        }
    }
    .tutorial-box {
        background-color: #f3f3f3;
        border-radius: 35px;
        overflow: hidden;
        height: 0;
        opacity: 0;
        transition: height 0.5s ease, opacity 0.5s ease;
        &.open {
            opacity: 1;
            padding: 70px;
            margin-bottom: 150px;
        }
        h3 {
            text-align: center;
            font-size: 20px;
            margin-bottom: 70px;
        }
        .present {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #666;
            padding-bottom: 50px;
            & li > ul > li {
                line-height: 2.5;
                font-weight: 300;
            }
            h4 {
                font-size: 18px;
                margin-bottom: 20px;
            }
            span {
                font-size: 14px;
                color: #3c6039;
                border: 1px solid #3c6039;
                padding: 7px 10px;
                margin-right: 10px;
                font-weight: 500;
            }
        }
        .tutorial-dsc {
            margin-top: 50px;
            font-size: 14px;
            font-family: 'pretendard';
            p {
                line-height: 2.1;
                font-weight: 400;
                background-image: url('/images/gift/check.png');
                background-repeat: no-repeat;
                background-position: 0 50%;
                text-indent: 25px;
            }
        }
    }
`;
