import styled from 'styled-components';

export const NoticeStyle = styled.article`
    margin-top: 127px;
    h2 {
        font-size: 32px;
        text-align: left !important;
        margin-bottom: 20px;
    }
    .select {
        cursor: pointer;
        display: flex;
        height: 86px;
        padding: 0 40px;
        p {
            font-size: 20px;
            color: #7e7e7e;
            margin-right: 10px;
        }
    }
`;

export const NoticeListStyle = styled.div`
    font-family: 'pretendard';
    caption {
        display: none;
    }
    col {
        &.num {
            width: 110px;
        }
        &.tit {
            width: 1190px;
        }
        &.date {
            width: 140px;
        }
    }
    thead {
        tr {
            th {
                font-size: 16px;
                text-align: center;
                font-weight: 500;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #3f3f3f;
                border-top: 2px solid #3f3f3f;
            }
        }
    }
    tbody {
        tr {
            td {
                font-size: 16px;
                &:not(:nth-child(2)) {
                    text-align: center;
                }
                font-weight: 500;
                height: 70px;
                line-height: 70px;
                border-bottom: 1px solid #b1b1b1;
            }
        }
    }
`;

export const NoticeDetailStyle = styled.div`
    margin-top: 20px;
    h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: left;
    }
    p {
        /* white-space: pre-line; */
        word-break: keep-all;
    }
    .detail {
        &-wrap {
            /* border: 1px solid #000; */
        }
        &-head {
            margin-bottom: 30px;
            border-bottom: 1px solid #333;
        }
        &-body {
            background-color: #ececec;
            h3 {
                background-color: white;
            }
            .title {
                font-size: 20px;
                padding: 10px 10px;
            }

            .context {
                padding: 20px;
            }
            .date {
                margin-top: 40px;
                text-align: right;
                padding: 20px;
            }
        }
    }
    .btn-wrap {
        width: 100%;
        text-align: right;
        margin-top: 40px;
        button {
            background-color: #333;
            color: white;
            width: 85px;
            height: 40px;
            font-size: 16px;
        }
    }
`;
