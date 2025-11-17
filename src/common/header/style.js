import styled from 'styled-components';

export const HeaderStyle = styled.header.withConfig({
    shouldForwardProp: (prop) => !['$expanded'].includes(prop),
})`
    .overlay {
        z-index: 999;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0);
        opacity: 0.4;
    }

    --ease: cubic-bezier(0.2, 0.65, 0.2, 1);
    --d: 0.22s;
    transition: opacity var(--d) var(--ease), transform var(--d) var(--ease), visibility var(--d),
        height var(--d) var(--ease);

    &.header {
        height: 230px;
        height: ${({ $expanded }) => ($expanded ? '230px' : '90px')};
        overflow: hidden;
        position: sticky;
        left: 0;
        top: 0;
        z-index: 500;
        background-color: white;
        .status-bar {
            display: none;
            background-color: white;
        }

        .inner {
            position: relative;

            .headBody {
                position: absolute;

                left: 50%;
                top: ${({ $expanded }) => ($expanded ? '80px' : '20px')};
                transition: top 0.22s ease;
                transform: translateX(-50%) scale(${({ $expanded }) => ($expanded ? 1 : 0.7)});
                transition: 0.3s;
                height: 50px;
                width: 300px;
                overflow: hidden;
                position: relative;

                &:hover {
                    h1 {
                        img {
                            top: -100%;
                            &.hoverImg {
                                top: 50%;
                            }
                        }
                    }
                    &::before {
                        top: 0%;
                    }
                }
                h1 {
                    cursor: pointer;
                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        transition: 0.3s;
                        &.hoverImg {
                            top: 200%;
                            width: 60%;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        &.header {
            position: absolute !important;
            left: 0;
            top: 0;
            width: 100vw;
            z-index: 500;
            height: 41.4615vw !important;
            margin-bottom: 2.5641vw;
            overflow: visible !important;

            .status-bar {
                display: block;
                z-index: 100;
                width: 100%;
                position: fixed;
                left: 0;
                top: 0;
            }

            .inner {
                width: 91.7949vw;
            }
            .headBody {
                top: 15.3846vw !important;
                h1 {
                    img {
                        width: 30.7692vw;
                    }
                }
            }
        }
    }
`;

export const NavStyle = styled.nav.withConfig({
    shouldForwardProp: (prop) => !['isOpen', '$expanded'].includes(prop),
})`
    .overlay {
        z-index: 999;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0);
        opacity: 0.4;
    }
    bottom: 0;
    margin-top: 95px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    --ease: cubic-bezier(0.2, 0.65, 0.2, 1);
    --d: 0.22s;

    transition: opacity var(--d) var(--ease), transform var(--d) var(--ease), visibility var(--d),
        height var(--d) var(--ease);
    opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
    transform: ${({ $expanded }) => ($expanded ? 'translateY(0)' : 'translateY(-10px)')};
    visibility: ${({ $expanded }) => ($expanded ? 'visible' : 'hidden')};
    pointer-events: ${({ $expanded }) => ($expanded ? 'auto' : 'none')};

    .gnb {
        display: flex;
        justify-content: center;
        gap: 0px;

        li {
            user-select: none;

            a {
                box-sizing: border-box;
                padding: 0 30px;
            }

            padding: 30px 5px;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background-image: url('images/common/header_gradiant.png');
                background-repeat: no-repeat;
                background-position: center;
                transition: 0.3s ease;
                opacity: 0;
                pointer-events: none;
                z-index: -1;
                transform: scale(1.1);
            }

            &:hover {
                cursor: pointer;

                &::before {
                    opacity: 1;
                }
            }
        }
    }
    .all-menu {
        position: absolute;
        right: 0px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px 30px;

        cursor: pointer;

        span {
            background-color: #333;
            width: 30px;
            height: 3px;
            transition: 0.3s;
            transform-origin: center;
        }

        ${({ isOpen }) => `
      ${isOpen ? '' : '&:hover '}
      span {
        &:nth-child(1) {
          transform: translateY(430%) rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-430%) rotate(45deg);
        }
      }
    `}
    }
    @media screen and (max-width: 600px) {
        margin-top: 11.0256vw;

        .gnb {
            width: 100%;
            padding: 0;
            box-sizing: border-box;

            li {
                box-sizing: border-box;
                height: 12.8205vw;
                a {
                    height: 12.8205vw;
                    font-size: 16px;
                    padding: 3.8462vw 5vw;
                    box-sizing: border-box;
                    white-space: nowrap;
                }
                &::before {
                    top: 5.5282vw;
                }

                &:nth-child(n + 4):not(:nth-child(8)) {
                    display: none;
                }
            }
        }
        .all-menu {
            left: 0;
            top: -20%;
            width: 3.6923vw;
            margin: 0;
            padding: 0;
            gap: 1.0256vw;
            span {
                width: 3.5897vw;
                height: 0.3231vw;
            }
        }
    }
`;

export const TopMenu = styled.ul.withConfig({
    shouldForwardProp: (prop) => !['$expanded'].includes(prop),
})`
    &.top-menu {
        padding: 20px;
        position: absolute;
        right: 30px;
        top: 0px;
        display: flex;
        gap: 30px;

        transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
        opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
        transform: ${({ $expanded }) => ($expanded ? 'translateY(0)' : 'translateY(-8px)')};
        visibility: ${({ $expanded }) => ($expanded ? 'visible' : 'hidden')};
        pointer-events: ${({ $expanded }) => ($expanded ? 'auto' : 'none')};

        li {
            position: relative;
            a {
                color: #7e7e7e !important;
            }

            &:not(:last-child)::before {
                content: '';
                background-color: #7e7e7e;
                position: absolute;
                height: 80%;
                width: 1px;
                right: -15px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    @media screen and (max-width: 600px) {
        &.top-menu {
            display: none;
            li {
                a {
                }
            }
        }
    }
`;

export const SearchWrap = styled.div.withConfig({
    shouldForwardProp: (prop) => !['$expanded'].includes(prop),
})`
    transform: translateY(50%);
    position: absolute;
    right: 15px;
    top: ${({ $expanded }) => ($expanded ? '80px' : '10px')};
    transition: top 0.22s ease;
    display: flex;
    gap: 15px;
    .search {
        width: 160px;
        height: 35px;
        position: relative;
        background-color: #f3f3f3;
        border-radius: 35px;
        transition: 0.3s;
        position: relative;
        input {
            outline: none;
            border: none;
            width: 80%;
            background-color: transparent;
            height: 30px;
            padding-left: 20px;
            position: absolute;
            left: 0;
            font-size: 16px;
            color: #000;
        }
        &:hover,
        &:active,
        &:focus {
            width: 300px;
        }
        &-item {
            font-size: 25px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .cart {
        font-size: 25px;
        position: relative;
        span {
            position: absolute;
            right: -10px;
            top: -10px;
            width: 24px;
            height: 24px;
            background-color: #f3829e;
            border-radius: 50px;
            line-height: 24px;
            text-align: center;
            color: white;
            font-size: 17px;
        }
    }
    @media screen and (max-width: 600px) {
        align-content: center;
        top: 15.3846vw;
        right: 0;

        padding: 0;

        .search {
            width: 6.1538vw;
            height: 6.1538vw;
            background-color: transparent;

            &-item {
                font-size: 19px;

                position: absolute;

                right: 0;

                transform: translateY(-50%);
            }
        }
        .cart {
            text-align: center;
            font-size: 19px;
            width: 6.1538vw;
            height: 6.1538vw;
            span {
                width: 5.1282vw;
                height: 5.1282vw;
                font-size: 3.8462vw;
            }
        }
    }
`;

export const NavMobileStyle = styled.div`
    display: none;
    @media screen and (max-width: 600px) {
        z-index: 1000;
        position: fixed;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        height: 60px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 84px;
        padding: 0 60px;
        li {
            width: 24px;
            height: 24px;

            position: relative;
            img {
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`;
