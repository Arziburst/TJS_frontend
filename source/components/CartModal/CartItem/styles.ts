import styled from 'styled-components';

import { WHITE, DEEP_GRAY, RED } from '../../../constants';

export default {
    CartItemContainer: styled.div`
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
        padding: 2px 5px 5px;
        cursor: pointer;
        right: 5px;
        bottom: 10px;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : DEEP_GRAY};
        border-radius: 10px;

        span {
            font-size: 10px;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            font-family: PacificoRegular;
            text-decoration: line-through;
        }

        p {
            font-size: 12px;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            font-family: PacificoRegular;
        }
    `,

    Cross: styled.div`
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      background-color: ${WHITE};
      border-radius: 100%;
      cursor: pointer;

      svg {
        transform: scale(1.1);
        width: 20px;
        height: 20px;
        fill: ${RED};
      }

      &:hover {
        background-color: ${RED};
        
        svg {
          fill: ${WHITE};
        }
      }
  `,
};
