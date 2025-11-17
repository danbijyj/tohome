import styled from 'styled-components';

export const SpinnerStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;

    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
        content: '';
        position: absolute;
        width: 120vw;
        height: 120vw;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        scale: 0.6;
    }
    .spinItem {
    }
`;
