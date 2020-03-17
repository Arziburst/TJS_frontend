import styled from 'styled-components';

export default {
    OrdersContainer: styled.main`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.product.bg };

        nav {
            box-sizing: border-box;
            padding: 10px 15px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            button {
                ${({ theme }) => theme.button}
                padding: 0px 10px;
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
                flex-direction: row-reverse;
            }
        }
    `,

    Orders: styled.section`
        width: 100%;
    `,
};
