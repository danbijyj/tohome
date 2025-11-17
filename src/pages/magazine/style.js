import styled from 'styled-components';

export const MagazineWrap = styled.div`
    .inner {
    }
    @media screen and (max-width: 600px) {
        [data-aos] {
            opacity: 1 !important;
            transform: none !important;
        }
        .inner {
            width: 100%;
            .web-bottom {
                display: none;
            }
        }
    }
`;
