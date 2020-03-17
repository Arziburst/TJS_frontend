import styled from 'styled-components';

import { DEEP_GRAY, WHITE, PINK } from '../../../constants';

export default {
    OrdersContainer: styled.section`
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: green;
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 5px;

        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : WHITE};
        color: ${DEEP_GRAY};
        
        div {
            display: flex;
            justify-content: center;
            width: 35px;
            height: 35px;
            padding: 5px;
            border-radius: 100%;
            background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? PINK : DEEP_GRAY};
            svg {
                width: 30px;
                height: 30px;
                fill: ${WHITE};
            }
        }

        section {
            flex: 1;
            align-items: center;
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-family: RobotoRegular;
        }

        &:hover {
            background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? PINK : DEEP_GRAY};
            color: ${WHITE};

            div {
                background-color: ${WHITE};

                svg {
                    fill: ${({ theme }) => theme.themeName === 'lightTheme' ? PINK : DEEP_GRAY};
                }
            }
        }
    `,

    OrdersIcon: styled.div`
        display: flex;
        justify-content: center;
        width: 35px;
        height: 35px;
        padding: 5px;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? PINK : DEEP_GRAY};
        svg {
            width: 30px;
            height: 30px;
            fill: ${WHITE};
        }
    `,
};
