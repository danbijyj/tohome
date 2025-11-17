import styled from 'styled-components';

export const FooterStyle = styled.footer`
    margin-top: 150px;
    height: 670px;
    background-color: #f1f1ef;

    .inner {
        padding-top: 95px;
    }
    .copyright {
        font-size: 15px;
        font-weight: 500;
        text-align: center;
        padding: 26px 0;
        border-top: 1px solid #333;
    }
    @media screen and (max-width: 600px) {
        /* height: 89.2308vw; */
        height: max-content;
        margin-top: 22.3077vw;
        .inner {
            width: 91.7949vw;
            padding-top: 6.1538vw;
        }
        .copyright {
            padding-top: 0;
            padding-bottom: 4.1026vw;
            margin-top: 9.2308vw;
            border: none;

            font-size: 1.7949vw;
        }
    }
`;

export const FooterBodyUl = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
        &:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 50px;
            div {
                width: 300px;
                color: #333;
                position: relative;
                &:nth-child(2) {
                    padding-bottom: 15px;
                    & > img {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }

                em {
                    font-size: 15px;
                    font-weight: 500;
                    position: relative;

                    &::after {
                        content: '';
                        background-color: #333;
                        width: 234px;
                        height: 1px;
                        left: 120%;
                        top: 50%;
                        transform: translateY(-50%);
                        position: absolute;
                    }
                }
                strong {
                    font-size: 34px;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                }
                p {
                    text-align: center;
                    font-size: 20px;
                }
                h5 {
                    font-size: 15px;
                    font-weight: 500;
                    margin-left: 10px;
                }
            }
        }
    }
    .links {
        width: 250px;
        height: 210px;
        section {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            & > img {
                filter: invert();
                width: 100%;
            }
            div {
                display: flex;
                justify-content: space-around;
            }
        }
    }
    .utill {
        .option {
            text-align: center;
        }
        p {
            margin-bottom: 16px;
        }
        div:not(.option) {
            margin-top: 20px;
            border-top: 1px solid #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 50px;
            padding-top: 20px;
            em {
                display: flex;
                justify-content: space-between;
                p {
                    &:first-child {
                        margin-right: 10px;
                    }
                }
            }
        }
        &-mobile-wrap {
            display: none;
        }
    }
    @media screen and (max-width: 600px) {
        margin-top: 18.4615vw;
        flex-direction: column;
        align-items: center;
        li {
            &:nth-child(1) {
                flex-direction: row;
                height: 12.3077vw;

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    width: 41.0256vw;
                    height: 12.3077vw;
                    &:nth-child(2) {
                        padding: 0;
                        & > img {
                            bottom: -1.8462vw;
                            width: 4.4821vw;
                        }
                    }

                    em {
                        font-size: 2.5641vw;
                        &::after {
                            width: 29.4872vw;
                        }
                    }
                    strong {
                        height: max-content;
                        margin: auto;
                        font-size: 3.8462vw;
                        img {
                            width: 3.8462vw;
                            gap: 1.0256vw;
                        }
                    }
                    p {
                        margin: auto;
                        font-size: 2.5641vw;
                    }
                    h5 {
                        padding: 0 1.0256vw;
                        word-break: keep-all;
                        margin: auto;
                        font-size: 2.3077vw;
                    }
                }
            }
        }
        .links {
            position: absolute;
            height: max-content;

            top: 6.1538vw;
            left: 50%;
            transform: translateX(-50%);
            section {
                .logo {
                    display: none;
                }
                & > img {
                }
                div {
                }
            }
        }
        .utill {
            display: none;
            &-mobile-wrap {
                display: flex;
                margin-top: 24px;
                gap: 3.9103vw;
                p {
                    font-size: 2.5641vw;
                }
            }
        }
    }
`;

export const FooterInfoUl = styled.ul`
    margin: 50px auto;
    font-size: 14px;
    text-align: center;
    width: 1060px;
    word-break: keep-all;
    font-family: 'pretendard';
    li {
        margin-bottom: 20px;
        display: flex;
        align-content: center;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        &:nth-child(1) {
            font-weight: 600;
        }
        &:nth-child(2) {
            div {
                display: flex;
                justify-content: center;
                gap: 30px;
            }
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &:nth-child(3) {
            font-weight: 500;
        }
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 6.1538vw;

        li {
            margin-bottom: 2.0513vw;
            padding: 0 7.1795vw;
            box-sizing: border-box;
            p {
                font-size: 2.0513vw;
            }
            &:nth-child(1) {
            }
            &:nth-child(2) {
                font-weight: 500;
                div {
                    gap: 2.1795vw;

                    &:nth-child(2) {
                        /* flex-direction: column; */
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        gap: 0;
                    }
                }
            }
            &:nth-child(3) {
                font-size: 1.7949vw;
            }
        }
    }
`;
