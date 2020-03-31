import styled from 'styled-components';

export default {
    Header: styled.header`
      width: 100%;
      height: 50px;
      background-color: ${({ theme }) => theme.modal.header};
  `,
    Main: styled.main`
      width: 100%;
      padding: 10px 15px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.modal.bg};

      button {
        ${({ theme }) => theme.button}
        padding: 0px 10px;
        font-family: PacificoRegular;
        font-size: 20px;
        border-radius: 12px;
      }
  `,
};
