import styled from 'styled-components';

export default {
    MasonryContainer: styled.section`
        width: 100%;
        padding: 5px 0px;
        display: flex;
        justify-content: center;

        background-color: ${({ theme }) => theme.product.bg}
    `,

    Wrapper: styled.section`
        width: 1470px;
        
        @media (max-width: 1470px) {
            width: 1260px;
        }
        
        @media (max-width: 1260px) {
            width: 1050px;
        }
        
        @media (max-width: 1050px) {
            width: 840px;
        }
        
        @media (max-width: 840px) {
            width: 630px;
        }
        
        @media (max-width: 630px) {
            width: 420px;
        }

        @media (max-width: 420px) {
            width: 320px;
        }
    `,
};
