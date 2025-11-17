import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
0%{
    opacity: 0;
    transform: translateY(20px);
}
100%{
    opacity: 1;
    transform: translateY(0);
}
`;

export const AboutTopWrap = styled.div`
    width: 100%;
    height: 899px;
    background-image: url('/images/about/about_bg.jpg');
    background-repeat: no-repeat;
    background-position: 0 0;
    margin-top: 50px;
    text-align: center;
    .about-logo,
    .about-title,
    .about-text {
        opacity: 0;
    }
    .about-logo {
        animation: ${fadeUp} 0.7s ease-out forwards;
        animation-delay: 0.5s;
        &::after {
            content: '';
            width: 45px;
            height: 1px;
            background-color: #333;
            display: block;
            margin: 25px auto 65px;
        }
        img {
            margin-top: 100px;
        }
    }
    .about-title {
        font-size: 34px;
        margin-bottom: 100px;
        animation: ${fadeUp} 0.7s ease-out forwards;
        animation-delay: 0.9s;
        span {
            color: #666;
        }
    }
    .about-text {
        font-family: 'pretendard';
        font-weight: 400;
        width: 1000px;
        margin: auto;
        background: rgba(255, 255, 255, 0.95);
        padding: 75px 0;
        animation: ${fadeUp} 0.7s ease-out forwards;
        animation-delay: 1.2s;
        p {
            line-height: 2;
        }
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 177.9487vw;
        margin-top: 10.25vw;
        background-position: center center;
        background-size: cover;

        .about-logo {
            &::after {
                width: 3.85vw;
                margin: 6.15vw auto;
            }
            img {
                margin-top: 7.69vw;
                width: 35.38vw;
            }
        }
        .about-title {
            font-size: 3.8462vw;
            margin-bottom: 8.2051vw;
        }
        .about-text {
            width: 85.3846vw;
            padding: 8.9744vw 3.8462vw;
            p {
                font-size: 3.0769vw;
            }
        }
    }
`;

export const AboutSlideWrap = styled.div`
    height: 800px;
    position: relative;
    .btn-wrap {
        position: absolute;
        top: 50%;
        z-index: 100;
        width: 100%;

        button {
            position: absolute;
            font-size: 17px;

            background-color: transparent;
            p {
                transition: 0.3s;
            }
            &::before,
            &::after {
                transition: 0.3s;
                content: '';
                position: absolute;
                top: -12px;
                width: 38px;
                height: 1px;
                background-color: #333;
            }
            &::before {
                left: 42%;
            }
            &::after {
                left: -36%;
            }
            &.prev {
                left: -70px;
                transform: rotate(-90deg);
            }
            &.next {
                right: -70px;
                transform: rotate(90deg);
            }
            &:hover {
                &::before {
                    transform: rotate(45deg);
                    transform-origin: left center;
                }
                &::after {
                    transform-origin: 100%;
                    transform: rotate(-45deg);
                }
                p {
                    transform: translateY(-100%);
                    opacity: 0;
                }
            }
        }
    }
    /*
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    .btn-wrap {
      display: none;
    }
    &.swiper {
      width: 94.8718vw;
      height: 97.4359vw;
    }
    &.swiper-wrapper {
      height: auto;
    }
    &.SwiperSlide {
      display: flex;
    }
  }
    */
    @media (max-width: 600px) {
        height: 380px;
        .btn-wrap {
            display: none;
        }

        .about-swiper,
        .about-swiper .swiper-wrapper,
        .about-swiper .swiper-slide {
            width: 100% !important;
            max-width: 100% !important;
        }
        .about-swiper .swiper-wrapper {
            height: auto;
        }
    }
`;

export const AboutSlideItem = styled.div`
    width: 100%;
    display: flex;
    text-align: left;
    .AboutSlideDetail {
        width: 660px;
        margin-left: 100px;
        h4 {
            color: #3c6039;
            font-size: 28px;
            margin-bottom: 110px;
            span {
                background-color: #3c6039;
                color: #fff;
                width: 50px;
                height: 50px;
                line-height: 50px;
                display: inline-block;
                text-align: center;
                margin-left: 20px;
            }
        }
        strong {
            font-size: 34px;
            margin-bottom: 35px;
            display: block;
        }
        p {
            white-space: pre-line;
        }
    }
    .AboutMagazine {
        ul {
            margin-top: 40px;
            display: flex;
            gap: 40px;
            li {
                padding: 30px;
                width: 250px;
                border: 1px solid #888;
                cursor: pointer;

                small {
                    font-size: 14px;
                    border-bottom: 1px solid #888;
                    padding-bottom: 10px;
                }
                .AboutBanner {
                    margin-top: 20px;
                    position: relative;
                    p {
                        font-size: 14px;
                    }
                    img {
                        position: absolute;
                        right: 0;
                        top: 28%;
                        width: 28px;
                        height: 20px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        /* 컨테이너 */
        display: flex;
        padding: 0 2.5641vw;
        box-sizing: border-box;
        gap: 4.1026vw;
        flex-direction: row;

        /* 이미지 */
        .bannerImg {
            width: 43.3333vw;
            height: 71.7949vw;
            img {
                width: 100%;
                height: 71.7949vw;
                display: block;
                object-fit: cover;
            }
        }

        /* 텍스트 영역 */
        .AboutSlideDetail {
            width: 100%;
            margin-left: 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .txt {
                h4 {
                    width: 41.1333vw;
                    font-size: 3.0769vw;
                    margin-bottom: 3.3077vw;
                    display: flex;
                    span {
                        width: 3.8462vw;
                        height: 3.8462vw;
                        line-height: normal;
                        font-size: 1.9444vw;
                        margin-left: 1.3897vw;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                strong {
                    font-size: 3.3333vw;
                    margin-bottom: 2.0513vw;
                }
                p {
                    font-size: 2.3077vw;
                    line-height: 1.7;
                    height: 53.8462vw;
                    width: 47.4359vw;
                }
            }
        }
        /* 매거진 카드(하단 2열) */
        .AboutMagazine {
            width: 100%;
            position: absolute;
            left: 10px;
            bottom: -90px;
            ul {
                margin-top: 16px;
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                width: 91.7026vw;
                justify-content: center;
                li {
                    width: 43.4974vw;
                    height: 19.7154vw;
                    box-sizing: border-box;
                    padding: 0 4.1026vw;
                    /* 
                    height: auto;*/
                    small {
                        font-size: 2.3077vw;
                        padding-bottom: 1.5385vw;
                    }
                    .AboutBanner {
                        position: relative;
                        margin-top: 2.0513vw;
                        /* padding-right: 24px; */
                        p {
                            font-size: 2.3077vw;
                            /* margin-top: 20px; */
                        }
                        em {
                            display: block;
                            font-style: normal;
                            font-size: 2.8205vw;
                            font-weight: 600;
                        }
                        img {
                            width: 5.3077vw;
                            height: 3.3744vw;
                            top: 50%;
                        }
                    }
                }
            }
        }
    }
`;

export const AboutGotoWrap = styled.div`
    margin-top: 150px;
    h2 {
        font-size: 25px !important;
    }
    @media screen and (max-width: 600px) {
        margin-top: 12.3077vw;
        h2 {
            font-size: 3.3333vw !important;
            width: 100vw;
        }
    }
`;
export const AboutLeft = styled.ul`
    border: 1px solid #888;
    border-radius: 0 0 35px 0;
    display: flex;
    margin-top: 60px;
    li {
        width: 860px;
        height: 350px;
        display: flex;
        align-items: center;
        a {
            &:hover {
                background: rgba(255, 255, 255, 0.95);
                color: #333;
            }
        }
        &:last-child {
            width: 580px;
            border-radius: 0 0 33px 0;
        }
        .con-text {
            margin: auto 50px;
            .title {
                width: 275px;
                display: flex;
                margin-bottom: 15px;
                justify-content: space-between;
                padding: 0 10px;
                border-bottom: 2px solid #333;
                img {
                    width: 31px;
                    height: 30px;
                }
                h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                    font-weight: 600;
                }
            }

            .green-title {
                font-size: 14px;
                color: #3c6039;
                margin-bottom: 30px;
                margin-left: 10px;
                font-family: 'pretendard';
                font-weight: 400;
            }
            p {
                line-height: 2;
                margin-left: 10px;
                font-family: 'pretendard';
                font-weight: 300;
            }
        }
        .goto {
            color: #fff;
            font-size: 14px;
            border: 1px solid #fff;
            margin: auto;
            padding: 8px 35px;
            img {
                margin-left: 15px;
                margin-top: 4px;
            }
        }
    }
    @media screen and (max-width: 600px) {
        border: none;
        border-radius: 0;
        flex-direction: column;
        position: relative;
        display: flex;
        padding: 0 4.1026vw;
        margin-top: 6.1538vw;
        li {
            position: relative;
            width: 91.7949vw;
            height: 260px;
            &:first-child {
                width: 91.7949vw;
                position: absolute;
                z-index: 2;
                display: flex;
                justify-content: center;
                pointer-events: none;
            }
            &:last-child {
                position: relative;
                z-index: 1;
                width: 91.7949vw;
                border-radius: 0;
            }
            .con-text {
                display: flex;
                flex-direction: column;
                width: 278px;
                align-items: center;
                margin-bottom: 108px;
                .titleWrap {
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;
                    /* gap: 2.0513vw; */
                    .title {
                        display: flex;
                        align-items: center;
                        border-bottom: none;
                        width: 4.359vw;
                        h3 {
                            display: none;
                        }
                        img {
                            filter: brightness(0) invert(1);
                            width: 4.359vw;
                            height: 4.1026vw;
                        }
                    }
                    .green-title {
                        color: #fff;
                        font-size: 3.8462vw;
                        display: flex;
                        justify-content: center;
                        margin-bottom: 4.1026vw;
                        margin-left: 0;
                        white-space: nowrap;
                        line-height: 1;
                        font-weight: 500;
                    }
                }

                p {
                    color: #fff;
                    font-size: 2.5641vw;
                    font-weight: 400;
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    display: none;
                    &:first-of-type {
                        display: block;
                    }
                }
            }
            .goto {
                padding: 1.5385vw 4.6154vw;
                bottom: 16.9744vw;
                left: 50%;
                position: absolute;
                transform: translateX(-50%);
                font-size: 2.1538vw;
                img {
                    width: 0.9256vw;
                    height: 2vw;
                }
            }
        }
    }
`;
export const AboutRight = styled.ul`
    border: 1px solid #888;
    border-radius: 0 0 0 35px;
    display: flex;
    margin-top: 60px;
    li {
        width: 860px;
        height: 350px;
        display: flex;
        align-items: center;
        a {
            &:hover {
                background: rgba(255, 255, 255, 0.95);
                color: #333;
            }
        }
        &:first-child {
            width: 580px;
            border-radius: 0 0 0 33px;
        }
        .con-text {
            margin: auto 50px;
            .title {
                width: 275px;
                display: flex;
                margin-bottom: 15px;
                justify-content: space-between;
                padding: 0 10px;
                border-bottom: 2px solid #333;
                img {
                    width: 31px;
                    height: 30px;
                }
                h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                    font-weight: 600;
                }
            }
            .green-title {
                font-size: 14px;
                color: #3c6039;
                margin-bottom: 30px;
                margin-left: 10px;
                font-family: 'pretendard';
                font-weight: 400;
            }
            p {
                line-height: 2;
                margin-left: 10px;
                font-family: 'pretendard';
                font-weight: 300;
            }
        }
        .goto {
            color: #fff;
            font-size: 14px;
            border: 1px solid #fff;
            margin: auto;
            padding: 8px 35px;
            img {
                margin-left: 15px;
                margin-top: 4px;
            }
        }
    }
    @media screen and (max-width: 600px) {
        border: none;
        border-radius: 0;
        flex-direction: column;
        position: relative;
        display: flex;
        padding: 0 4.1026vw;
        margin-top: 6.1538vw;
        height: 260px;
        li {
            position: relative;
            width: 91.7949vw;
            height: 260px;
            &:first-child {
                position: relative;
                z-index: 1;
                width: 91.7949vw;
                height: 260px;
                border-radius: 0;
            }
            &:last-child {
                width: 91.7949vw;
                height: 350px;
                position: absolute;
                z-index: 2;
                display: flex;
                justify-content: center;
                pointer-events: none;
            }
            .con-text {
                display: flex;
                flex-direction: column;
                width: 278px;
                height: 189px;
                align-items: center;
                margin: 0;
                .titleWrap {
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;
                    /* gap: 2.0513vw; */
                    .title {
                        display: flex;
                        align-items: center;
                        border-bottom: none;
                        width: 4.359vw;
                        h3 {
                            display: none;
                        }
                        img {
                            filter: brightness(0) invert(1);
                            width: 4.359vw;
                            height: 4.1026vw;
                        }
                    }
                    .green-title {
                        color: #fff;
                        font-size: 3.8462vw;
                        display: flex;
                        justify-content: center;
                        margin-bottom: 4.1026vw;
                        margin-left: 0;
                        white-space: nowrap;
                        line-height: 1;
                        font-weight: 500;
                    }
                }
                p {
                    color: #fff;
                    font-size: 2.5641vw;
                    font-weight: 400;
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    display: none;
                    &:first-of-type {
                        display: block;
                    }
                }
            }
            .goto {
                padding: 1.5385vw 4.6154vw;
                bottom: 16.9744vw;
                left: 50%;
                position: absolute;
                transform: translateX(-50%);
                font-size: 2.1538vw;
                img {
                    width: 0.9256vw;
                    height: 2vw;
                }
            }
        }
    }
`;
