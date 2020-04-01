import styled from 'styled-components';

import { PINK, WHITE, DEEP_GRAY, GRAY } from '../../../constants';
import { images } from '../../../assets';

export default {
    ProductContainer: styled.section`
        position: relative;
        border-radius: 10px;
        margin: 5px;
        cursor: pointer;

        img {
            width: 200px;
            height: auto;
            border-radius: 10px;
        }

        @media (max-width: 420px) {
            img {
                width: 310px;
            }
        }
    `,

    Hover: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${WHITE};
        position: absolute;
        opacity: 0.5;
        top: 0px;
        bottom: 2px;
        left: 0px;
        right: 0px;
        opacity: 0;
        background-color: rgba(0,0,0,0.5);
        border-radius: 10px;
        font-family: RobotoRegular;
        text-align: center;
        
        &:hover {
            opacity: 1;
        }

        transition: opacity 0.3s;
        
        @media (max-width: 420px) {
            font-size: 20px;
        }
    `,

    New: styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        padding: 3px 5px;
        left: 5px;
        top: 5px;

        border-radius: 10px;
        font-family: PacificoRegular;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : DEEP_GRAY};
        color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};

        @media (max-width: 420px) {
            font-size: 20px;
        }
    `,

    DiscountContainer: styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        padding: 3px 5px;
        right: 5px;
        top: 5px;

        border-radius: 10px;
        font-family: PacificoRegular;
        background-image: url(${images.fire});
        color: ${WHITE};

        @media (max-width: 420px) {
            font-size: 20px;
        }
    `,

    EditButton: styled.div`
        position: absolute;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: -15px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: ${WHITE};
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }

        transition: opacity 0.3s;
    `,

    AddToCartButton: styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: 10px;
        width: 18px;
        height: 18px;
        
        border-radius: 10px;
        background-color: ${PINK};

        &:hover {
            opacity: 0.7;
        }
        
        svg {
            width: 18px;
            height: 18px;
            fill: ${WHITE};
        }

        transition: opacity 0.3s;

        @media (max-width: 420px) {
            width: 30px;
            height: 30px;

            svg {
                width: 30px;
                height: 30px;
            }
        }
    `,

    Price: styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 3px 5px 5px 5px;
        right: 5px;
        bottom: 10px;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : DEEP_GRAY};
        border-radius: 10px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            font-family: PacificoRegular;
            text-decoration: line-through;
        }

        p {
            font-size: 14px;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            font-family: PacificoRegular;
        }

        @media (max-width: 420px) {
            span, p {
                font-size: 20px;
            }
        }
    `,

    Views: styled.div<{ isProductViewed: boolean }>`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px 5px;
        left: 5px;
        bottom: 10px;
        background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : DEEP_GRAY};
        border-radius: 10px;

        svg {
            width: 14px;
            height: 14px;
            margin-right: 5px;
            opacity: ${({ isProductViewed }) => isProductViewed ? '1' : '0.3' };
                path {
                    fill: ${({ theme, isProductViewed }) => {
        if (theme.themeName === 'lightTheme') {
            return isProductViewed ? PINK : DEEP_GRAY;
        }

        return isProductViewed ? WHITE : GRAY;
    }};
                }
            }
        
        p {
            font-size: 14px;
            line-height: 14px;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            font-family: PacificoRegular;
            padding-bottom: 2px;
        }

        @media (max-width: 420px) {
            svg {
                width: 20px;
                height: 20px;
            }
            p {
                font-size: 20px;
            }
        }
    `,
};
