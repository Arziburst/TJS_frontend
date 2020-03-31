import styled from 'styled-components';

// Constants
import { PINK, WHITE } from '../../constants';

export default {
    ToolbarContainer: styled.header`
        /* position: sticky; */
        /* top: 0px; */
        /* z-index: 10; */
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        justify-content: space-between;

        a {
            text-decoration: none;
        }

        img {
            width: 100px;
            height: 100px;

            &:hover {
                opacity: 0.8;
            }
        }

        h1, h2, h3 {
            color: ${({ theme }) => theme.logo};
            font-size: 46px;
            font-family: PacificoRegular;
            padding-bottom: 18px;
        }

        h2, h3 {
            display: none;
            
            &:hover {
                opacity: 0.8;
            }
        }
       
        @media (max-width: 640px) {
            h1, img {
                display: none;
            }

            h2 {
                display: block;
            }
        }
          
        @media (max-width: 500px) {
            h2 {
                display: none;
            }

            h3 {
                display: block;
                font-size: 36px;
                padding-bottom: 0px;
            }
        }
    `,

    ToolbarCenter: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 640px) {
            justify-content: center;
        }
    `,

    ContactData: styled.section`
        display: flex;
        justify-content: space-between;

        a {
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? PINK : WHITE};
            font-family: PacificoRegular;
            text-decoration: none;
            font-size: 20px;
            padding-bottom: 5px;

            &:hover {
                text-decoration: underline;
            }

            &:first-child {
                margin-right: 10px;
            }

            &:last-child {
                margin-left: 10px;
            }
        }

        @media (max-width: 700px) {
            flex-direction: column;

            a {
                font-size: 16px;
            }
        }
    `,
};
