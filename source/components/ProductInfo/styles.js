import styled from 'styled-components';

// Constants
import { DEEP_GRAY } from '../../constants';

const block = styled.div`
    border-bottom: 1px solid black;
    font-family: RobotoRegular;

    h2 {
        font-size: 22px;
    }
    
    p, h2 {
        color: ${DEEP_GRAY};
    }
`;

export default {
    ProductInfo: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 25px;
        width: 320px;
        box-sizing: border-box;

        main {}

        footer {
            display: flex;
            flex-direction: column;

            button {
                align-self: flex-end;
            }
        }

        @media (max-width: 900px) {
            footer > button {
                align-self: center;
            }
        }

        @media (max-width: 600px) {
            width: 100%;
            margin: 0px;
        }
    `,

    Title: styled(block)`
        padding: 10px 0px;

        h2 {
            padding-bottom: 5px;
        }
    `,

    Description: styled(block)`
        padding: 10px 0px;

        h2 {
            padding-bottom: 5px;
        }
    `,

    Weight: styled(block)`
        padding: 10px 0px;

        h2 {
            padding-bottom: 5px;
        }
    `,

    Available: styled(block)`
        padding: 10px 0px;
        border: none;
    `,

    Price: styled(block)`
        display: flex;
        justify-content: flex-end;
        padding-bottom: 10px;
        
        div {
            text-align: right;

            h3 {
                font-size: 22px;
            }

            h2 {
                ${({ isDiscount }) => isDiscount ? {
        'border-top':  '1.5px solid black',
        'padding-top': '2px',
    } : {
        'text-decoration': 'underline',
    }};
            }

        }

        border: none;

        @media (max-width: 900px) {
            justify-content: center;
        }
    `,
};
