import styled from 'styled-components';

export const PaginationStyle = styled.article`
    display: flex;
    justify-content: center;

    div {
        margin-top: 65px;
    }
    button {
        width: 50px;
        height: 50px;
        border: 1px solid #d8d8d8;
        background-color: white;
        font-size: 20px;
        &.on {
            background-color: #5f5f5f;
            color: white;
        }
    }
    margin: auto;
`;
