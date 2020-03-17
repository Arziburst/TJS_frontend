import styled from 'styled-components';

import { WHITE, BLACK } from '../../constants';

export default {
    Main: styled.main`
      width: 100%;
      padding: 10px 15px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.modal.bg};
      
      section {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }

      h1 {
        display: flex;
        justify-content: flex-end;
        padding: 10px 0px;
        font-size: 20px;
        text-decoration: underline;
        font-family: RobotoRegular;
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? BLACK : WHITE};
      }

      h2 {
        font-size: 18px;
        padding-bottom: 5px;
        font-family: RobotoRegular;
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? BLACK : WHITE};
      }
  `,

    Footer: styled.footer`
      display: flex;
      padding-top: 5px;
      justify-content: space-between;
  `,
};
