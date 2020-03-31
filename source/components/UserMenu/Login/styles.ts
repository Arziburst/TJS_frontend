import styled from 'styled-components';

import { WHITE, DEEP_GRAY } from '../../../constants';

export default {
    InputsContainer: styled.section`
        input {
            width: 100%;
            padding: 3px 5px;
            box-sizing: border-box;
            margin-bottom: 5px;
            border-radius: 4px;
            border: none;
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
            font-size: 16px;
            font-family: RobotoRegular;
        }

        div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;
        }

        button {
            padding: 3px 5px;
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
            ${({ theme }) => theme.secondaryButton}
            font-family: RobotoRegular;
            border-radius: 4px;
            font-size: 16px;

            &:active {
                transform: scale(0.95);
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
            }

            &:hover {
                background-color: ${WHITE};
                color: ${DEEP_GRAY};
            }

           transition: transform 0.3s, box-shadow 0.3s;
        }
    `,
};
