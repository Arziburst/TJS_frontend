// Core
import styled from 'styled-components';

// Helpers
import { statusColorHandler } from '../../helpers';

// Constants
import { DEEP_GRAY, WHITE } from '../../constants';

// Instruments
const OrderInfoBlock = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
    padding: 10px 0px;

    h3 {
      font-family: RobotoRegular;
      color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
    }

  a {
    color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
    text-decoration: none;
    font-family: RobotoRegular;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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
        font-size: 20px;
        padding: 10px 0px;
        text-decoration: underline;
        font-family: RobotoRegular;
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
      }

      h2 {
        display: flex;
        font-size: 18px;
        font-family: RobotoRegular;
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
      }
  `,

    PhoneBlock: styled(OrderInfoBlock)`
      display: flex;
      align-items: center;

      h3 {
        font-size: 16px;
        margin-right: 5px;
      }
      
      a {
        font-size: 16px;
      }
  `,

    EmailBlock: styled(OrderInfoBlock)`
      display: flex;
      align-items: center;

      h3 {
        font-size: 16px;
        margin-right: 5px;
      }

      a {
        font-size: 16px;
      }
  `,

    CommentBlock: styled(OrderInfoBlock)`
      display: flex;
      flex-direction: column;

      h3 {
        padding-bottom: 5px;
      }

      p {
        font-family: RobotoRegular;
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
      }
  `,

    StatusBlock: styled(OrderInfoBlock) <{ isAdmin: boolean, status: number }>`
      padding: 10px 0px 5px;

      h3 {
          font-size: 16px;
      }

        ${({ isAdmin, status }) => !isAdmin && {
        section: {
            ...statusColorHandler(status),
            display:           'flex',
            'justify-content': 'center',
            'border-radius':   '10px',
            'font-size':       '18px',
            'font-family':     'PacificoRegular',
            padding:           '10px 0px',
        },
    }};

      border: none;
  `,

    Footer: styled.footer<{ isAdmin: boolean }>`
      display: flex;
      padding-top: 5px;
      align-items: center;
      justify-content: ${({ isAdmin }) => isAdmin ? 'space-between' : 'flex-end'};
  `,
};
