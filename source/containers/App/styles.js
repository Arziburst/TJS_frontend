// Core
import styled from 'styled-components';
import reactToastifyCss from '!!raw-loader!react-toastify/dist/ReactToastify.css';

export default {
    AppContainer: styled.section`
        position: relative;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.app};
        ${reactToastifyCss};
    `,
};
