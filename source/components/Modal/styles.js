import styled, { keyframes } from 'styled-components';

// Modal
const modalWrapperBgc = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalAppear = keyframes`
  from { bottom: 50px; opacity: 0; }
  to { bottom: 0; opacity: 1; }
`;

export default {
    ModalWrapper: styled.div`
      position: fixed;
      align-items: center;
      justify-content: center;
      background-color: rgba(0,0,0,0.6);
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      animation: ${modalWrapperBgc} 0.5s;
  `,

    ModalContainer: styled.section`
      position: relative;
      overflow: hidden;
      z-index: 2147483647;
      max-width: 450px;
      width: auto;
      margin: 1.75rem auto;
      border-radius: 12px;
      animation: ${modalAppear} 0.5s;

      @media (max-width: 500px) {
        margin: 0px;
        border-radius: 0px;
        max-width: 100%;
      }
  `,

    Cross: styled.button`
      position: absolute;
      background-color: transparent;
      right: 13px;
      top: 5px;
      font-size: 26px;
      cursor: pointer;
      color: #fff;
      z-index: 2;

      &:after {
        content: '×';
      }

      &:hover {
        color: #000;
      }
  `,
};
