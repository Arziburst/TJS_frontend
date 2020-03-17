import styled from 'styled-components';

import { PINK, WHITE } from '../../constants';

export default {
    UserMenuContainer: styled.div`
        position: relative;
        align-self: flex-start;
    `,

    MenuButton: styled.div`
        position: relative;
        ${({ theme }) => theme.button};
        font-family: RobotoRegular;
        display: flex;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;

        ${({ isActive }) => isActive && {
        'border-bottom-right-radius': '0px',
        'border-bottom-left-radius':  '0px',
    }}

        svg > path {
            fill: ${({ theme }) => theme.button.color};
        }

        div {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${PINK};
            border-radius: 100%;
            color: ${WHITE};
            top: -10px;
            left: -13px;
            width: 20px;
            height: 20px;
            border: 2px solid ${WHITE};
            font-size: 10px;
        }

        &:hover {
            opacity: 0.8;
        }
    `,

    DropDownMenu: styled.div`
        position: absolute;
        right: 0px;
        box-sizing: border-box;
        width: 220px;
        z-index: 3;
        padding: 10px;
        ${({ theme }) => theme.themeName === 'lightTheme'
        ? { background: 'linear-gradient(to bottom, rgba(235, 92, 120, 1) 0%, rgba(235, 95, 123, 1) 1%, rgba(225, 225, 225, 1) 50%, rgba(225, 225, 225, 1) 100%)'}
        : { backgroundColor: '#e1e1e1'}};

        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    `,
};
