import styled, { keyframes } from 'styled-components';

export const DawnDeliveryStyle = styled.div`
    margin-top: 100px;
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BannerStyle = styled.div`
    position: relative;
    height: 900px;
    box-sizing: border-box;
    overflow: hidden;

    img {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .txt-box {
        position: absolute;
        width: 610px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;

        h2,
        span,
        p {
            opacity: 0;
            transform: translateY(30px);
            animation: ${fadeUp} 0.8s ease forwards;
        }

        h2 {
            padding: 0;
            margin-bottom: 15px;
            font-size: 36px;
            font-weight: 700;
            animation-delay: 0.2s;
        }

        span {
            font-size: 20px;
            margin-bottom: 60px;
            font-weight: 500;
            animation-delay: 0.5s;
        }

        p {
            font-size: 24px;
            font-weight: 500;

            &:nth-of-type(1) {
                margin-bottom: 15px;
                animation-delay: 0.8s;
            }
            &:nth-of-type(2) {
                animation-delay: 1.1s;
            }
            &:nth-of-type(3) {
                animation-delay: 1.4s;
            }
        }
    }
`;
