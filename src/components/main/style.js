import styled from 'styled-components';

export const ContentStyle = styled.div`
    margin-top: 50px;
    min-height: 400px;
    .inner {
    }
    h2 {
        /* font-size: 30px; */
    }
    p {
        text-align: center;
    }
    .btn {
        display: none;
    }

    .main-title {
        font-size: 25px;
        margin-top: 30px;
        text-align: left;
        margin-left: 40px;
        position: relative;
        font-weight: 600;

        &::before {
            content: '';
            background-image: url('/images/icon/icon_title.png');
            position: absolute;
            left: -42px;
            top: 50%;
            transform: translateY(-50%);
            /* background-position: 0 0; */
            background-repeat: no-repeat;
            background-size: contain;
            width: 35px;
            height: 35px;
        }
    }
    .sub-title {
        margin-top: 70px;
        margin-bottom: 100px;
        text-align: center;
        color: #666;
        font-size: 25px;
        font-family: 'Pretendard';
    }
    .all-btn {
    }
    .more {
        &:hover {
            &::before {
                transform: translateX(-50%);
            }
        }
        margin-top: 80px;
        text-align: left;
        width: 100px;
        position: relative;
        background-color: transparent;

        &::before {
            content: '';
            position: absolute;
            right: 0%;
            top: 0%;
            background-image: url('images/icon/icon_all.png');
            background-size: cover;
            background-repeat: no-repeat;
            width: 20px;
            height: 20px;
            transition: 0.3s;
        }
    }
    .price-wrap {
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 50px;
        font-size: 17px;
        font-weight: 600;
        .original-price {
            color: #888;
            text-decoration: line-through;
            font-size: 15px;
        }
        .discounted-price {
            font-size: 17px;
            .dis-rate {
                font-size: 15px;
                margin-right: 10px;
                color: #ff7259;
            }
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        min-height: 0;
        /* background-color: yellow; */

        section {
            margin-top: 12.3077vw;
        }
        .inner {
            /* background-color: yellowgreen; */
            /* width: 100vw; */
            /* padding: 16.9231vw 0;
            overflow: visible; */
        }
        .main-title {
            font-size: 4.1026vw;
            margin-left: 0;
            padding-left: calc(5.1282vw + 5px);
            &::before {
                width: 5.1282vw;
                height: 5.1282vw;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .sub-title {
            font-size: 3.0769vw;
            margin-top: 6.1538vw;
            margin-bottom: 6.1538vw;
        }
        .des {
            display: none;
        }
        .btn {
            display: flex;
            justify-content: center;
            margin-top: 9.4872vw;
            button {
                background: none;
                border-bottom: 1px solid #000;
                font-size: 3.3333vw;
                font-weight: 600;
                padding: 5px 10px;
            }
        }
    }
`;
