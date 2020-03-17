import styled from 'styled-components';

import { WHITE, DEEP_GRAY } from '../../../constants';

export default {
    TogglerContainer: styled.div`
        padding: 5px;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);

        div:first-child {
            padding-bottom: 5px;
        }
    `,

    Toggler: styled.button`
        ${({ isActive, theme }) => isActive
        ? {
            color:           WHITE,
            backgroundColor: theme.themeName === 'lightTheme' ? DEEP_GRAY : DEEP_GRAY,
        } : {
            color:           DEEP_GRAY,
            backgroundColor: WHITE,
        }};

        font-family: PacificoRegular;
        font-size: 18px;
        padding: 0px 10px;
        border-radius: 5px;
        width: 50%;
    `,
};
