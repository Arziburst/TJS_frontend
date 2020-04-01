import styled from 'styled-components';

import { WHITE, PINK } from '../../constants';

export default {
    CartButton: styled.div<{ isActive: boolean }>`
        position: fixed;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        cursor: pointer;
        padding: 10px 0px;
        bottom: 10%;
        right: -80px;
        z-index: 2;
        width: 80px;
        background-color: ${PINK};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-top: 5px solid ${WHITE};
        border-left: 5px solid ${WHITE};
        border-bottom: 5px solid ${WHITE};

        div {
            font-family: RobotoRegular;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: -15px;
            left: -15px;
            border-radius: 100%;
            background-color: ${PINK};
            color: ${WHITE};
            width: 20px;
            height: 20px;
            border: 5px solid ${WHITE};
        }

        svg {
            width: 40px;
            height: 40px;

            fill: ${WHITE};
        }

        ${({ isActive }) => isActive && { right: '0px' }}

        &:hover {
            opacity: 0.8;
        }

        transition: right 0.3s, opacity 0.3s;
    `,
};
