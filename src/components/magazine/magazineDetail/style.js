import styled from 'styled-components';

export const MagazineDetailStyle = styled.div`
    background-image: url('/images/magazine/back.jpg');
    .fontChange {
        font-family: 'playfair display';
        font-style: italic;
    }
    .mag-title {
        font-size: 25px;
        font-weight: 600;
        height: 100px;
        padding-top: 50px;
        position: relative;
        width: max-content;
        margin: auto;
        &::before {
            content: '';
            background-image: url('/images/icon/icon_title.png');
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            width: 32px;
            height: 32px;
            left: -40px;
            top: 35%;
        }
    }
    .mobile-btn-wrap {
        display: none;
    }

    @media screen and (max-width: 600px) {
        .pop-up {
            animation: popupani forwards 0.3s;
            @keyframes popupani {
                from {
                    transform: translateY(100%);
                }
                to {
                    transform: translateY(0%);
                }
            }
        }
        max-width: auto;
        .mag-title {
            position: absolute;
            top: 22.5641vw;
            left: 50%;
            transform: translateX(-50%);
            padding: 0;
            padding-left: 2.5641vw;
            font-size: 5.1282vw;

            &::before {
                top: 5%;
                left: -2.5641vw;
                width: 5.1282vw;
                height: 5.1282vw;
            }
        }
        & > div {
            &:nth-child(1) {
            }
            &.mag-item2 {
                padding-top: 125vw;
            }
            &.mag-item3,
            &.mag-item4 {
                padding-top: 99.4872vw;
            }
            &.mag-bottom {
                padding-top: 22.5641vw;
            }
            &.mag-item2,
            &.mag-item3,
            &.mag-item4,
            &.mag-bottom {
                box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.25);
                width: 100vw;
                height: 138.4615vw;
                position: fixed;
                bottom: 0;
                left: 0;
                z-index: 100;
                border-radius: 7.6923vw 7.6923vw 0 0;
                padding-bottom: 12.8205vw;
                background-color: white;
                box-sizing: border-box;
                overflow-y: scroll;

                .mobile-btn-wrap {
                    z-index: 100;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: space-between;
                    width: 91.7949vw;
                    margin-top: 6.1538vw;
                    box-sizing: border-box;

                    button {
                        height: 10.2564vw;
                        position: relative;
                        background-color: transparent;
                        font-size: 3.8462vw;
                        font-weight: 600;
                        &:first-of-type {
                            padding-left: 8.2051vw;
                            &::after {
                                left: 0;
                                background-image: url('/images/icon/btn-prev.png');
                            }
                        }
                        &:last-of-type {
                            padding-right: 8.2051vw;

                            &::after {
                                background-image: url('/images/icon/btn-next.png');
                                right: -3.8462vw;
                            }
                        }
                        &::after {
                            content: '';
                            position: absolute;
                            top: 55%;
                            transform: translateY(-50%);
                            width: 6.1538vw;
                            height: 6.1538vw;
                            background-repeat: no-repeat;
                        }
                    }
                }
            }
        }
    }
`;

export const MagazineDetailItem1Style = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 900px;
    position: relative;
    .highTxt {
        cursor: pointer;
        z-index: 10;
        /* z-index: 50; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 70px 80px;
        box-sizing: border-box;

        p {
            font-size: 25px;
            font-weight: 600;
            &:last-child {
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
    .main-box {
        z-index: 9;
        width: 900px;
        height: 670px;

        margin-top: 180px;
        margin-left: 250px;
        margin: auto;
        position: relative;
        .txts {
            position: absolute;
            top: 288px;
            z-index: 10;

            @keyframes txtsSlideIn {
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            h2 {
                font-style: italic;
                font-size: 72px;
                color: #000;
                padding-left: 28px;
            }
            h3 {
                font-size: 32px;
                font-family: 'pretendard';
                font-weight: 200;
            }
            h4 {
                margin-left: 180px;
                font-size: 40px;
                font-weight: 600;
            }
            .more2 {
                margin-left: 100px;
                font-size: 18px;
                height: 22px;
                display: flex;
                align-items: center;
                gap: 20px;
                background-color: transparent;
                img {
                    height: 100%;
                    transform: rotate(90deg);
                }
            }
        }
        .img-wrap {
            position: absolute;
            right: 0;
            background-color: beige;
            width: 500px;
            height: 670px;
            border-radius: 670px;
            overflow: hidden;
            background-color: transparent;
            img {
                height: 100%;
                transform: translate(-15%, -2%) rotate(160deg);
            }
        }
    }
    .imgs {
        .img-box {
            position: absolute;
        }
        img {
            width: 100%;
        }
        .detail {
            &-tomato {
                width: 145px;
                height: 140px;
                top: 237px;
                right: 110px;
            }
            &-brocoli {
                width: 110px;
                height: 110px;
                top: 170px;
                left: 248px;
                transform: rotate(-60deg);
            }
            &-lemon {
                width: 110px;
                height: 110px;
                left: 75px;
                bottom: 120px;
            }
        }
    }
    @media screen and (max-width: 600px) {
        overflow: hidden;
        height: 162.5641vw;
        .highTxt {
            position: absolute;
            top: 6.1538vw;
            left: 4.1026vw;
            top: 6.1538vw;
            left: 4.1026vw;
            padding: 0;
            p {
                display: none;
                &:last-child {
                    display: block;
                }
            }
        }
        .main-box {
            /* height: 634px; */
            height: 100%;
            box-sizing: border-box;

            margin: 0;
            .txts {
                /* top: 627px; */
                top: 141.0256vw;
                width: 100vw;
                margin: auto;

                h2,
                .more2 {
                    display: none;
                }
                h3 {
                    text-align: center;
                    margin: auto;
                    font-size: 4.359vw;
                }
                h4 {
                    text-align: center;
                    margin: 0;
                    font-size: 6.4103vw;
                }
            }
            .img-wrap {
                top: 0;
                width: 100%;
                height: 135.1282vw;
                border-radius: 0;
                overflow: hidden;
                img {
                    transform: translate(-15%, -2%) rotate(160deg);

                    @keyframes imgIn {
                        to {
                            opacity: 0.5;
                            transform: translateX(50%);
                        }
                    }
                }
            }
        }
        .imgs {
            .img-box {
            }
            img {
            }
            .detail {
                &-tomato,
                &-brocoli,
                &-lemon {
                    display: none;
                }
            }
        }
    }
`;
export const MagazineDetailItem2Style = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 76px;
    .chefs {
        margin-left: 170px;
        position: relative;
        .pathTxt {
            overflow: visible;
            position: absolute;
            right: -280px;
            top: -30px;

            font-size: 12px;
        }
        img {
        }
    }
    .web-txts {
        display: none;
    }
    .mobile-txts {
        width: 838px;
        margin-right: 126px;
        h2 {
            font-size: 30px;
            margin-bottom: 20px;
        }
        h3 {
            text-align: center;
            font-size: 25px;
            margin: 40px 0;
            font-weight: 600;
        }
        p {
            text-align: center;
            font-size: 20px;
            line-height: 1.5;
            span {
                display: none;
            }
        }
    }
    @media screen and (max-width: 600px) {
        .mobile-btn-wrap {
            button {
                &:first-of-type {
                    opacity: 0;
                    user-select: none;
                    pointer-events: none;
                }
            }
        }
        /* background-color: black; */
        background-color: antiquewhite;
        /* margin-top: 88px; */
        width: 100vw;
        height: 185.8974vw;
        flex-direction: column;
        align-content: start;
        .chefs {
            width: 100%;
            .pathTxt {
                opacity: 1 !important;
                right: -28.2051vw;
                top: -7.6923vw;
            }
            img {
            }
        }
        .web-txts {
            margin-top: 12.8205vw;
            display: block;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
            /* position: absolute; */

            h2 {
                font-size: 5.1282vw;
                h3 {
                    display: none;
                    margin-top: 4.1026vw;
                    font-size: 3.8462vw;
                }
            }
        }
        .mobile-txts {
            box-sizing: border-box;
            padding: 0 6.9231vw;
            margin: 0;
            width: 100%;
            h2,
            h3 {
                display: none;
            }
            p {
                width: 100%;

                font-size: 3.3333vw;
                line-height: 1.5;
                text-align: center;
                padding-bottom: 5vw;

                span {
                    display: block;
                }
            }
        }
    }
`;
export const MagazineDetailItem3Style = styled.div`
    margin-top: 50px;
    box-sizing: border-box;
    position: relative;
    height: 800px;
    position: relative;
    overflow: hidden;
    .main-img {
        position: absolute;
        top: 255px;
        left: 50%;
        transform: translateX(-50%);

        width: 755px;
        height: 440px;
    }
    .img-box {
    }
    .detail-vectors {
        position: absolute;
        img {
            width: 100%;
        }
        &1 {
            left: 320px;
            top: 190px;
        }
        &2 {
            bottom: 63px;
            right: 450px;
        }
        &3 {
            right: 270px;
            bottom: 150px;
        }
        &4 {
            left: 500px;
            bottom: 30px;
        }
        &5 {
            top: 200px;
            right: 310px;
        }
        &6 {
            left: 172px;
            bottom: 110px;
        }
        &7 {
            top: 255px;
            right: 110px;
        }
        &8 {
            left: 170px;
            bottom: 230px;
        }
        &9 {
            right: 147px;
            bottom: 270px;
        }
        &10 {
            top: 130px;
            right: 540px;
        }
    }
    .mobile-txt-wrap {
        display: none;
    }
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        .main-img {
            margin: 0;
            padding: 0;
            height: min-content;
            top: 39.4872vw;
            width: 82.0513vw;
            img {
                width: 100%;
            }
        }
        .img-box {
        }
        .detail-vectors {
            display: none;
        }
        .mobile-txt-wrap {
            display: block;
            text-align: center;
            line-height: 1.8;
            font-size: 16;
            font-weight: 600;
        }
    }
`;
export const MagazineDetailItem4Style = styled.div`
    background-image: url('images/magazine/con4-back.png');
    background-position: 0 -110px;
    margin-top: 50px;
    box-sizing: border-box;
    position: relative;
    height: 1960px;

    padding: 0 150px;
    overflow: hidden;

    .bg {
        z-index: 1;
        position: absolute;
        top: 5%;
        left: -15%;
        width: 100%;
        height: 100%;
        opacity: 0.5;

        img {
        }
    }

    .icons {
        display: flex;
        justify-content: center;
        gap: 102px;
        &-img-wrap {
            display: flex;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
            strong {
                font-size: 17px;

                span {
                    margin-left: 16px;
                    font-size: 20px;
                    font-weight: 600;
                }
            }
        }
    }
    .steps {
        &-wrap-mobile-btns {
            display: none;
        }
        z-index: 2;
        margin-top: 50px;
        display: flex;
        gap: 35px;
        &:nth-child(even) {
            flex-direction: row-reverse;
            .txt {
                align-items: flex-end;

                h2,
                p,
                em {
                    text-align: right;
                }
            }
        }
        .img-wrap {
            width: 196px;
            height: 196px;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .txt {
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            h2 {
                font-weight: 700;
                text-align: left;
            }
            em {
                font-size: 17px;
                span {
                    color: white;
                    background-color: #3c6039;
                    margin-right: 10px;
                    padding: 8px;
                    border-radius: 40px;
                    height: 25px;
                }
            }
            p {
                word-break: keep-all;
                width: 350px;
            }
        }
    }

    .mag-title {
        span {
            margin-right: 10px;
        }
    }
    @media screen and (max-width: 600px) {
        background-image: none;
        .mag-title {
            span {
                display: none;
            }
        }
        .icons {
            position: absolute;
            top: 34.6154vw;
            left: 50%;
            transform: translateX(-50%);
            gap: 6.1538vw;

            &-img-wrap {
                min-width: 25.641vw;
                img {
                    width: 5.1282vw;
                    height: 5.1282vw;
                }
                strong {
                    font-size: 2.3077vw;
                    span {
                        display: block;
                        font-size: 3.0769vw;
                        margin-left: 0;
                    }
                }
            }
        }
        .steps {
            &-wrap-mobile-btns {
                display: flex;
                justify-content: space-between;
                width: 89.7436vw;
                margin: 0;
                padding: 0;
                position: absolute;
                top: 75.641vw;
                left: 50%;
                transform: translateX(-50%);
                button {
                    background-color: transparent;
                }
            }
            &-wrap {
                /* flex-direction: row; */
                align-content: center;
                position: absolute;
                top: 46.1538vw;
                left: 50%;
                transform: translateX(-50%);
                width: 73.0769vw;
                height: 82.0513vw;
                margin: 0;
                overflow: hidden;

                .steps {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 200ms ease-out, transform 200ms ease-out;
                    transform: translateX(10px);
                    display: block;
                }
                .steps[data-active='true'] {
                    opacity: 1;
                    pointer-events: auto;
                    transform: translateX(0);
                }
            }
            &:nth-child(even) {
                .txt {
                    align-items: center;
                    align-content: center;
                    h2,
                    p,
                    em {
                        text-align: center;
                    }
                }
            }

            .img-wrap {
                width: 30.7692vw;
                height: 30.7692vw;
                position: absolute;
                top: -12.8205vw;
                top: -12.8205vw;
                left: 50%;
                transform: translateX(-50%);

                img {
                    width: 100%;
                }
            }

            .txt {
                width: 100%;
                margin-top: 23.0769vw;

                h2,
                p {
                    text-align: center;
                    font-size: 3.8462vw;
                    width: 100%;
                }

                em {
                    display: flex;
                    text-align: left;
                    align-items: center;
                    font-size: 3.0769vw;

                    span {
                        width: 6.1538vw;
                        height: 3.5897vw;
                        font-size: 2.3077vw;
                        box-sizing: border-box;
                        padding: 0.2564vw 1.0256vw;
                    }
                }
                p {
                }
            }
        }
    }
`;
