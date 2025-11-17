import styled from 'styled-components';

export const SideDishStyle = styled.div`
    position: relative;
    margin-top: 56px;
    height: 1700px;
    margin-bottom: 150px;
    .banner {
        width: 100vw;
        height: 796px;

        z-index: 0;
        position: relative;
        img {
            width: 100vw;
            position: absolute;
            z-index: -1;
            left: 50%;
            transform: translateX(-50%);
        }
        .txt-box {
            width: 1000px;
            position: absolute;
            top: 127px;
            left: 50%;
            transform: translate(-50%);
        }
        p {
            font-size: 20px;
            font-weight: 500;
            color: #333;
            text-align: center;
            position: relative;
            z-index: 10;
        }
        h2 {
            font-size: 30px;
            font-weight: 600;
            color: #333;
            margin-top: 22px;
        }
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info {
            width: 1100px;
            text-align: center;
            strong {
                font-size: 25px;
                font-weight: 600;
                color: #3c6039;
            }
        }
    }
    p {
        font-size: 22px;
        line-height: 150%;
        font-weight: 500;
        color: #666666;
        text-align: center;
        margin-top: 20px;
    }
`;
