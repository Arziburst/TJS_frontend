import styled from 'styled-components';

// Constants
import { GRAY, GREEN, PINK, WHITE, DEEP_GRAY } from '../constants';

export const styledContainer = styled.div<{ isValid: boolean }>`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ isValid }) => isValid ? GREEN : GRAY};
    margin-bottom: 5px;
    font-family: RobotoRegular;

    header {
        padding-bottom: 5px;
        color: ${({ isValid }) => isValid ? WHITE : DEEP_GRAY};
        font-family: RobotoRegular;
    }

    section {
        position: absolute;
        top: 3px;
        right: 3px;

        svg {
            width: 16px;
            height: 16px;
            margin-left: 3px;
            z-index: 5;

            path {
                fill: ${({ isValid }) => isValid ? WHITE : PINK};
            }
        }
    }


    transition: background-color 0.3s;
`;
