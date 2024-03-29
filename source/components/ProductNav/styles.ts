import styled from 'styled-components';

export const Container =  styled.nav`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    overflow: hidden;
    border-radius: 6px;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.app};
    z-index: 2;
    margin-bottom: 5px;

    /* @media (max-width: 600px) {
        border-radius: 0px; 

        button {
            font-size: 18px;
        }
    } */
`;

export const TypesContainer = styled.div`
    width: 100%;
    display: grid;
    margin-bottom: 2px;
    grid-template-columns: 12% 16% 16% 20% 19% 16%;
    column-gap: 2px;
    row-gap: 2px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding-left: 1px;
        grid-template-columns: 33% 33% 34%;
    }

    @media (max-width: 400px) {
        button {
            font-size: 18px;
        }
    }
`;

export const PaginationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 34%;
    column-gap: 2px;

    @media (max-width: 600px) {
        padding-left: 1px;
    }

    @media (max-width: 400px) {
        button {
            font-size: 18px;
        }
    }
`;
