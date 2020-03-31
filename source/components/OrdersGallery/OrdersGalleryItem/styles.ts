import styled from 'styled-components';

import { statusColorHandler } from '../../../helpers';

import { WHITE, DEEP_GRAY } from '../../../constants';

const styledDiv = styled.div`
    position: absolute;
    padding: 3px;
    font-size: 15px;
    border-radius: 10px;
    background-color: ${WHITE};
    background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? WHITE : DEEP_GRAY};
    color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
`;

export default {
    OrderContainer: styled.section`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 267px;
        border-radius: 10px;
        box-sizing: border-box;
        margin: 5px;
        cursor: pointer;
        overflow: hidden;

        @media (max-width: 420px) {
            width: 310px;
            height: 416px;
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
        bottom: 0px;
        left: 0px;
        right: 0px;
        opacity: 0;
        background-color: rgba(0,0,0,0.5);
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

    DivImage: styled.div<{ imageHeight: number, imageUrl: string }>`
        background-image: url(${({ imageUrl }) => imageUrl});
        height: ${({ imageHeight }) => imageHeight}%;
        background-size: cover;
        background-position: center;
    `,

    Total: styled(styledDiv)`
        bottom: 5px;
        right: 5px;

        @media (max-width: 420px) {
            font-size: 20px;
        }
    `,

    Phone: styled(styledDiv)`
        bottom: 5px;
        left: 5px;

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.themeName === 'lightTheme' ? DEEP_GRAY : WHITE};
            &:hover {
                text-decoration: underline;
            }
        }
        @media (max-width: 420px) {
            a {
                font-size: 20px;
            }
        }
    `,


    Status: styled(styledDiv)<{ status: number }>`
        ${({ status }) => statusColorHandler(status)};
        top: 30px;
        right: 5px;
        font-family: RobotoRegular;

        @media (max-width: 420px) {
            top: 35px;
            font-size: 20px;
        }
    `,

    Created: styled(styledDiv)`
        top: 5px;
        right: 5px;
        
        @media (max-width: 420px) {
            font-size: 20px;
        }
    `,
};
