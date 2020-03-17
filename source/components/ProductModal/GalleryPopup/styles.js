import styled from 'styled-components';

import { WHITE, BLACK } from '../../../constants';

export default {
    GalleryPopupContainer: styled.div`
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background-color: ${({ theme }) => theme.modal.bg};
        z-index: 1;

        nav {
            padding: 10px 15px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;

            input {
                color: ${({ theme }) => theme.themeName === 'lightTheme' ? BLACK : WHITE};
            }
        }
        
        main {
            padding: 10px 0px;
            overflow-x: hidden;
            overflow-y: scroll;
            box-sizing: border-box;
            flex: 1;
            background-color: ${({ theme }) => theme.themeName === 'lightTheme' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255,255,255,0.1)'};

            ::-webkit-scrollbar {
                width: 0px;
                background: transparent;
            }

            div {
                width: 100%;
                justify-content: center;
                display: flex;
                flex-wrap: wrap;
            }
        }
    `,
};
