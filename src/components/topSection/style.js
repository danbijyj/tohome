import styled from 'styled-components';
export const TitleBox = styled.div`
    border-top: ${(props) => props.$borderTop || 'none'};
    border-bottom: ${(props) => props.$borderBottom || 'none'};
    padding: 75px 0;
    text-align: center;
    width: 100%;
    h2 {
        font-size: 36px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        gap: 10px;
        margin-bottom: 30px;
        img {
            width: 45px;
            height: 45px;
        }
    }
    p {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #666;
        white-space: pre-line;
    }
    @media screen and (max-width: 600px) {
        padding: 8.2051vw 0;
        h2 {
            font-size: 4.9231vw !important;
            img {
                width: 6.1538vw;
                height: 6.1538vw;
            }
        }
        p {
            font-size: 3.0769vw;
        }
    }
`;
