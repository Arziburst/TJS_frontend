import styled from 'styled-components';

import { WHITE, DEEP_GRAY } from '../../../constants';

export default {
    OrderImageContainer: styled.div`
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      margin: 1px;

      img {
        width: 100px;
        min-width: 85px;
        transition: transform 0.3s;
      }

      &:hover {
        img {
          transform: scale(1.5);
        }
      }
  `,

    Price: styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        padding: 2px 5px 5px;
        right: 5px;
        bottom: 10px;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : DEEP_GRAY};
        border-radius: 10px;

        p {
            font-size: 12px;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            font-family: PacificoRegular;
        }
    `,
};
