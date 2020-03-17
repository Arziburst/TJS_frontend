import styled from 'styled-components';

import { DEEP_GRAY, WHITE, PINK, RED } from '../../../constants';

export default {
    UserMenuSection: styled.div`
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: green;
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 5px;

        color: ${DEEP_GRAY};
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : WHITE};
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);

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
            font-family: RobotoRegular;

            button {
                margin-top: 5px;
                align-self: flex-end;
                padding: 3px 5px;
                box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
                ${({ theme }) => theme.secondaryButton}
                font-family: RobotoRegular;
                border-radius: 4px;
                font-size: 16px;

                &:active {
                    transform: scale(0.95);
                    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
                }

                &:hover {
                    background-color: ${RED};
                }

                transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
            }
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
};
