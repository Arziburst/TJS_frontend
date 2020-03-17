import styled from 'styled-components';

// Constants
import { GRAY, GREEN, BLACK, WHITE } from '../../constants';

export default {
    Main: styled.main`
      position: relative;
      width: 100%;
      padding: 10px 15px 10px 15px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.modal.bg};
  `,

    Footer: styled.footer`
      width: 100%;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      padding: 0px 15px 10px 15px;
      background-color: ${({ theme }) => theme.modal.bg};
  `,

    ProductImages: styled.section`
      display: flex;
      flex-wrap: wrap;
      min-height: 140px;
  `,

    SelectType: styled.select`
      border-radius: 10px;
      border: 10px solid ${({ isValid }) => isValid ? GREEN : GRAY};
      margin-bottom: 5px;
  `,

    ImagesNotFound: styled.section`
      width: 100%;
      box-sizing: border-box;
      min-height: 140px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255,255,255,0.1)'};
      
      &:hover {
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.2)'};
      }

      h2 {
        padding-bottom: 5px;
        font-size: 20px;
        text-align: center;
        font-family: RobotoRegular;
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? BLACK : WHITE};
      }

      svg {
        width: 30px;
        height: 30px;
        path {
          fill: ${({ theme }) => theme.themeName === 'lightTheme' ? BLACK : WHITE};
        }
      }
  `,
};
