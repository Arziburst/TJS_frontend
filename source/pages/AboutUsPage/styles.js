import styled from 'styled-components';

import { GRAY, DEEP_GRAY, PINK, WHITE } from '../../constants';

export default {
    AboutUsPageContainer: styled.section`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? GRAY : DEEP_GRAY};
    `,

    Main: styled.main`
        max-width: 600px;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : GRAY};
        padding: 10px;
        border-radius: 10px;

        @media (max-width: 600px) {
            border-radius: 0px;
            max-width: 100%;    
        }
    `,

    Welcome: styled.div`
        text-align: center;
        font-size: 32px;
        color: ${PINK};
        font-family: PacificoRegular;
        padding-bottom: 15px;

        @media (max-width: 600px) {
            font-size: 28px;
        }
    `,

    Text: styled.div`
        display: flex;

        span {
            display: inline-block;
            font-family: PacificoRegular;
            color: ${PINK};
            font-size: 26px;
            text-indent: 0px;
        }
        
        p {
            color: ${DEEP_GRAY};
            font-family: RobotoRegular;
            font-size: 20px;
            text-indent: 40px;
        }

        @media (max-width: 600px) {
            span {
                font-size: 26px;
            }

            p {
                font-size: 18px;
                text-indent: 36px;
            }
        }
    `,

    Master: styled.div`
        display: flex;
        justify-content: center;
        padding: 10px 0px;

        img {
            max-height: 400px;
            max-width: 400px;
            border-radius: 10px;
        }

        @media (max-width: 400px) {
            img {
                max-height: 300px;
                max-width: 300px;
            }
        }
    `,
};
