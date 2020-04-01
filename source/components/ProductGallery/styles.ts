import styled from 'styled-components';
import { PINK, WHITE, GRAY, DEEP_GRAY } from '../../constants';

export default {
    MasonryContainer: styled.main`
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

    CreateNewProductContainer: styled.div`
        width: 200px;
        height: 267px;
        border-radius: 10px;
        margin: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : GRAY };

        svg {
            width: 80px;
            height: 80px;
            path {
                fill: ${({ theme }) => theme.themeName === 'lightTheme' ? GRAY : DEEP_GRAY };
            }
        }

        &:active {
            svg {
                position: relative;
                top: 2px;
            }
        }

        &:hover {
            svg {
                path {
                    fill: ${PINK};
                }
            }
        }

        @media (max-width: 420px) {
            width: 310px;
            height: 100px;
        }
    `,
};
