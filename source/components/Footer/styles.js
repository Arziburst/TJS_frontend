import styled from 'styled-components';

import { WHITE, DEEP_GRAY } from '../../constants';

export default {
    FooterContainer: styled.footer`
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    `,

    FooterCenter: styled.div`
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-top: 10px;

        a {
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE };
            text-align: center;
            padding-bottom: 10px;
            font-family: RobotoRegular;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    `,
};
