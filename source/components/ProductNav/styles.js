import styled from 'styled-components';

export default {
    ProductNavContainer: styled.nav`
        display: flex;
    `,

    ProductTypeButton: styled.button`
        ${({ theme }) => theme.button};
        cursor: pointer;
        position: relative;
        padding: 0px 10px;
        margin-bottom: 5px;
        font-family: PacificoRegular;
        font-size: 24px;

        margin-right: 2px;

        &:first-child {
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }

        &:last-child {
            margin-right: 0px;
            border: none;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
        }

        ${({ isActive }) => isActive && { transform: 'scale(0.9)' }};

        @media (max-width: 1470px) {
            font-size: 22px;
        }

        @media (max-width: 500px) {
            margin-right: 1px;
            padding: 0px 5px;
            font-size: 18px;
        }

        @media (max-width: 350px) {
            padding: 0px 5px;
            font-size: 16px;
        }

        transition: transform 0.3s;
    `,
};
