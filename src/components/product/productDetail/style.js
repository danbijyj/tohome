import styled from 'styled-components';

export const DetailSideStyle = styled.div`
    border-right: 1px solid #000;
    padding: 77px 40px;
    padding-left: 20px;
    /* padding: 0 20px; */
    width: 568px;
    margin-right: 40px;

    .proInfo {
        width: 100%;

        .brandwrap {
            display: flex;
            width: 100%;
            .tag {
                display: flex;
                gap: 8px;

                span {
                    padding: 3px 7px;
                    border: 1px solid #000;
                    &:nth-child(2) {
                        color: #3c6039;
                        border: 1px solid #3c6039;
                    }
                }
            }
            .brand {
                display: flex;
                /* justify-content: center; */
                align-items: center;
                margin-left: 6px;
                gap: 2px;
                &::before {
                    content: '';
                    display: block;
                    justify-content: center;
                    border: 1px solid #333;
                    height: 15px;
                    background: #000;
                    margin-right: 8px;
                }
                span {
                    font-size: 13px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                }
                .icon {
                    width: 20px;
                    display: flex;
                    justify-content: center;
                }
            }
        }
        h2 {
            line-height: 1.6;
            font-size: 24px;
            font-weight: 700;
            padding: 15px 0;
            display: flex;
            justify-content: flex-start;
            text-align: left;
            word-break: keep-all;
        }
        .price {
            display: flex;
            flex-direction: column;
            strong {
                font-size: 25px;
                font-weight: 600;
            }
            span {
                font-size: 15px;
                font-weight: 500;
                color: #aea7a2;
                font-family: 'Pretendard';
            }
        }
        .detailInfo {
            margin-top: 15px;
            border-top: 1px solid #aea7a2;
            dl {
                .infoItem {
                    display: flex;
                    padding: 15px 0;
                    border-bottom: 1px solid #e7e7e7;
                    font-size: 15px;
                    font-weight: 500;
                    font-family: 'Pretendard';

                    &:nth-child(4) {
                        dd {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 20px;
                            p {
                                width: auto;
                                height: auto;
                                word-break: keep-all;
                            }
                            .quantity {
                                height: 50%;
                            }
                            .deliveryInfo {
                                display: flex;
                                align-items: center;
                                gap: 5px;
                            }
                            span {
                                display: flex;
                                align-items: center;
                                font-size: 13px;
                            }
                            .icon {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 50%;
                                border: 1px solid #aea7a2;
                                width: 15px;
                                height: 15px;
                                color: #aea7a2;
                            }
                        }
                    }
                    &:nth-child(5) {
                        dd {
                            display: flex;
                            justify-content: flex-end;
                            gap: 54px;
                            p {
                                margin-right: 70px;
                                display: flex;
                                align-items: center;
                            }
                        }
                    }
                    &.deliveryType {
                        height: 70px;
                        overflow: hidden;
                        dt {
                            height: 100%;
                        }
                        dd {
                            strong {
                                font-weight: 700;
                            }
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            gap: 0;
                        }
                    }

                    dt {
                        width: 96px;
                        display: flex;
                        align-items: center;
                    }
                    dd {
                        font-size: 15px;
                        font-weight: 500;
                        flex: 1;
                    }
                    .quantity {
                        width: 92px;
                        border: 1px solid #aea7a2;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 10px 0;
                        gap: 17px;
                        border-radius: 3px;
                        button {
                            background: none;
                            display: flex;
                        }
                    }
                }
            }
        }
        .totalPrice {
            width: 100%;
            display: flex;
            padding: 40px 0;
            justify-content: flex-end;
            align-items: center;
            gap: 15px;
            p {
                font-size: 16px;
                font-weight: 700;
            }
            strong {
                font-size: 25px;
                font-weight: 700;
            }
        }
        .buttonWrap {
            width: 100%;
            display: flex;
            gap: 5px;
            justify-content: flex-end;
            button {
                width: 190px;
                background: none;
                padding: 16px 60px;
                border: 1px solid #454545;
                font-size: 16px;
                font-weight: 700;
                background: #454545;
                color: #fff;
                &:nth-child(1) {
                    background: #fff;
                    color: #333;
                }
            }
        }
    }
    .price-box {
        text-align: left;

        .discount {
            font-size: 15px;
            color: #999;
            text-decoration: line-through;
        }
        .price {
            font-size: 27px;
            font-weight: 600;
            display: block;

            span {
                margin-left: 10px;
                color: #ff7259;
                font-size: 25px;
                margin-right: 8px;
            }
        }
    }
`;

export const DetailTabStyle = styled.div`
    ul {
        display: flex;
        gap: 80px;

        li {
            list-style: none;
            margin: 0;
            padding: 0;
            button {
                background: none;
                font-size: 15px;
                font-weight: 700;
                padding: 25px 7px;
                font-family: 'Pretendard';
                &.on {
                    color: #3c6039;
                    border-bottom: 2px solid #3c6039;
                }
            }
        }
    }
`;

export const DetailArtStyle = styled.div`
    width: 1330px;
    height: max-content;

    .swiper-slide {
    }
`;

export const DetailArtMainStyle = styled.div`
    padding: 22px 0;
    padding-bottom: 16px;
    width: 1330px;
    height: 800px;
    height: max-content;
    /* DetailArtMainStyle 내부 */
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior: contain; /* 페이지로 스크롤 전파 줄이기 */

    .detailContent {
        display: flex;
        gap: 20px;
    }
    .detailContent {
        width: max-content;
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        &.swiper-wheel-wrap {
            overscroll-behavior: contain;
        }
    }
    .box,
    .mainImg {
    }
    .mainImg {
        width: 575px;
        height: 100%;
        img {
            width: 100%;
        }
    }

    .smallImg {
        width: 708px;
        height: auto;
        img {
            width: 100%;
        }
    }

    .box {
        h2,
        p {
            text-align: left;
        }
    }
    .box1 {
        h2 {
            font-size: 36px;
            font-weight: 700;
            padding: 10px 0;
            display: flex;
            font-family: 'Pretendard';
        }
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 1.7;
            font-family: 'Pretendard';
        }
    }

    .box2 {
        .text {
            display: flex;
            gap: 40px;
            padding: 10px 0;
            .txt {
                strong {
                    font-size: 25px;
                    font-weight: 700;
                    text-align: left;
                    display: block;
                    font-family: 'Pretendard';
                    width: 100%;
                }
                ul {
                    list-style: none;
                    margin-top: 15px;
                    padding: 0;
                    display: grid;
                    gap: 14px;
                }
                li {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.8;
                    font-family: 'Pretendard';
                    svg {
                        width: 22px;
                        height: 22px;
                        color: #8f8f8f;
                        flex: 0 0 22px;
                        margin-top: 2px;
                    }
                }
            }
        }
    }
    .box3 {
        width: 1030px;
        padding: 130px 0;
        padding-right: 30px;
        .title {
            margin-bottom: 30px;
            font-size: 25px;
            display: flex;
            gap: 7px;
            img {
                width: 30px;
            }
        }
        .content {
            display: flex;
            justify-content: space-between;

            .profile {
                min-width: 250px;
                height: 280px;
                img {
                    width: 250px;
                }
            }
            .txt {
                strong {
                    font-size: 30px;
                    margin-bottom: 25px;
                    text-align: left;
                    display: block;
                    color: #454545;
                    font-family: 'Pretendard';
                }
                p {
                    font-size: 26px;
                    color: #767572;
                    font-family: 'Pretendard';
                }
            }
        }
    }
`;

export const DetailArtSubStyle = styled.div`
    width: 1330px;
    align-items: center;
    word-break: keep-all;

    .slide {
        width: 800px;
    }

    col.col-k {
        width: 35%;
    }
    col.col-v {
        width: auto;
    }
    .tableWrap {
        display: flex;
        gap: 30px;
        .cont {
            width: 845px;
            box-sizing: border-box;
            margin-top: 100px;

            caption {
                display: none;
            }
            tr {
                &:first-child {
                    border-top: 2px solid #e7e7e7;
                }
            }
            th,
            td {
                border-bottom: 1px solid #e7e7e7;
                padding: 12px 14px;
                vertical-align: top;
                text-align: left;
                padding: 15px;
                font-family: 'Pretendard';
            }
            th {
                font-size: 15px;
                font-weight: 600;
                background: #f8f8f8;
            }
            td {
                font-weight: 500;
                font-size: 15px;
            }
        }
    }
`;

export const DetailArtFaqStyle = styled.div`
    font-family: 'pretendard';
    margin-top: 40px;
    width: 1330px;
    .slide {
        width: 700px;
    }
    .boxWrap {
        display: flex;
        gap: 30px;
    }
    .box {
        width: 695px;
        strong {
            font-size: 30px;
            font-weight: 500;
            font-family: 'Pretendard';
        }
        .article {
            margin-top: 30px;
            padding: 26px 20px;
            background: #f8f8f8;
            p {
                text-align: left;
                word-break: keep-all;
                font-size: 15px;
            }
            .txt {
                font-size: 15px;
                display: flex;
                flex-direction: column;
                gap: 4px;
                p {
                    display: flex;
                    text-align: left;
                    align-items: flex-start;
                    gap: 8px;
                    font-size: 15px;
                    color: #5f5f5f;
                    line-height: 1.8;
                    font-family: 'Pretendard';
                    &::before {
                        content: '';
                        flex: 0 0 5px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background: #5f5f5f;
                        margin-top: 0.55em;
                    }
                }
                span {
                    color: #5f5f5f;
                    font-size: 15px;
                    text-align: left;
                    padding-left: 20px;
                }
            }
        }
    }
`;

export const DetailArtReviewStyle = styled.div`
    .reviewTop {
        padding: 28px 110px;
        border-top: 1px solid #dcd9d5;
        border-bottom: 1px solid #dcd9d5;
        display: flex;
        gap: 93px;
        .grade-star {
            display: flex;
            gap: 7px;
            align-items: center;
            span {
                --size: 34px;
                width: calc(var(--size) * 5);
                height: var(--size);
                display: block;
                background-image: url(/images/product/detailArt/star2.png);
                background-repeat: repeat-x;
                background-size: var(--size) var(--size);
                background-position: left center;
            }
            strong {
                font-size: 25px;
                font-weight: 700;
                color: #dbd9d4;
                display: inline-flex;
                align-items: center;
                height: var(--star-size);
                line-height: 1;
                em {
                    color: #333;
                }
            }
        }
        .reviewBtn {
            width: 135px;
            padding: 13px 0;
            box-sizing: border-box;
            border: 1px solid #888;
            display: flex;
            justify-content: center;
            button {
                background: none;
                color: #888;
                font-weight: 600;
            }
        }
    }
`;

export const ReviewListStyle = styled.div`
    width: 100%;
    height: 733px;
    overflow: hidden;
    overflow-y: scroll;
    .tab {
        display: flex;
        gap: 10px;
        padding: 20px 7px;
        border-bottom: 1px solid #000;
        div {
            cursor: pointer;
            &.active {
                p {
                    font-weight: 700;
                    color: #3c6039;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #3c6039;
                    }
                }
            }
        }
        p {
            font-size: 13px;
            font-weight: 600;
        }
    }
`;

export const ReviewItemStyle = styled.div`
    width: 680px;
    padding: 15px 34px;
    border-bottom: 1px solid #dcd9d5;
    .itemBox {
        /* border: 1px solid #000; */
        .box {
            display: flex;
            gap: 30px;
            .grade-star {
            }
            .review {
                width: 342px;
                /* border: 1px solid #000; */
                margin-right: 25px;
                .photo {
                    width: 85px;
                    height: 85px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
                .txt {
                    padding: 18px 0;
                    font-family: 'Pretendard';
                }
            }
            .like {
                display: flex;
                gap: 5px;
                align-items: center;
                button {
                    background: none;
                    width: 40px;
                    height: 20px;
                    border: 1px solid #dbd9d4;
                    border-radius: 30px;
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    justify-content: center;
                    &::before {
                        content: '';
                        width: 12px;
                        height: 12px;
                        background-image: url(/images/product/detailArt/thumb.png);
                    }
                }
                span {
                    color: #dbd9d4;
                }
            }
            .info {
                width: 170px;
                margin-top: 20px;
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                color: #9e9e9e;
                font-size: 13px;
                font-weight: 500;
                span {
                    height: 16px;
                    display: inline-flex;
                    align-items: center;
                }
                .date {
                    &::before {
                        content: '';
                        display: inline-block;
                        margin-right: 5px;
                        width: 2px;
                        height: 15px;
                        background: #9e9e9e;
                    }
                }
            }
        }
    }
`;

export const GradeStar = styled.span`
    width: 140px;
    display: flex;
    justify-content: center;
    gap: 7px;

    --size: 20px;
    --rate: ${(props) => props.rate || 0};
    width: calc(var(--size) * 5);
    height: var(--size);
    display: block;
    background-image: url(/images/product/detailArt/star1.png);
    background-repeat: repeat-x;
    background-size: var(--size) var(--size);
    /* background-position: left center; */
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--rate) / 5 * 100%);
        height: 100%;
        background-image: url('/images/product/detailArt/star2.png');
        background-repeat: repeat-x;
        background-size: var(--size) var(--size);
    }
`;
