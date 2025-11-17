import styled from 'styled-components';

export const SideDishListStyle = styled.div`
    width: 1440px;
    height: 500px;
    margin-top: 150px;

    .title {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 900px;
        margin-bottom: 15px;
        /* animation: ani2 1s ease-in-out 0s 1 forwards;
        @keyframes ani2 {
            0% {
                transform: translateY(50%);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        } */
    }
    h2 {
        font-size: 25px;
        color: #333;
        &::after {
            content: '';
            width: 640px;
            height: 1px;
            display: inline-block; /* ← 핵심 */
            background: #333;
            margin-left: 20px;
            vertical-align: middle;
        }
    }

    .items {
        display: flex;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        margin-bottom: 70px;
        &:hover .box {
            animation-play-state: paused;
            cursor: pointer;
        }
        .box {
            width: 280px;
            height: 400px;
            display: flex;
            justify-content: center;
            text-align: center;
            animation: scroll 10s linear infinite;
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-500%);
                }
            }

            .data {
                width: 280px;
                height: 400px;
                img {
                    width: 100%;
                    margin-bottom: 12px;
                }
                strong {
                    font-size: 25px;
                    color: #333;
                    margin-bottom: 5px;
                }
                p {
                    font-size: 17px;
                    color: #333;
                }
            }
        }
    }
    .arrow {
        width: 100px;
        margin: auto;
        cursor: pointer;
        i {
            font-size: 24px;
            color: #333;
            &:last-child {
                margin-left: 50px;
            }
        }
    }
    .swiper-slide {
        width: 280px;
        height: 400px;
        background-color: transparent;

        li {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .img-wrap {
                width: 280px;
                height: 280px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }

            h3 {
                font-size: 25px;
                margin-top: 15px;
                text-align: center;
                white-space: nowrap;
            }
            p {
                margin-top: 5px;
                font-size: 17px;
                text-align: center;
                word-break: keep-all;
            }
        }
    }
`;
