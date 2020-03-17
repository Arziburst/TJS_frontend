import styled from 'styled-components';

// Constants
import { GRAY, WHITE } from '../../constants';

export default {
    ProductPageContainer: styled.main`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.product.bg };

        nav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            box-sizing: border-box;
            
            button {
                ${({ theme }) => theme.button}
                font-family: PacificoRegular;
                font-size: 20px;
                border-radius: 12px;
            }

            h1 {
                color: ${({ theme }) => theme.logo};
                font-family: PacificoRegular;
                font-size: 26px;
            }

            @media (max-width: 600px) {
                justify-content: center;
                
                h1, div {
                    display: none;
                }
            }
        }
    `,

    InfoContainer: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 15px;

        @media (max-width: 600px) {
            padding-bottom: 0px;
        }
    `,

    Wrapper: styled.div`
        display: flex;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : GRAY};

        @media (max-width: 800px) {
            padding: 15px;
            border-radius: 0px;
            width: 100%;
            justify-content: center;
        }

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: center;
        }
    `,
};
