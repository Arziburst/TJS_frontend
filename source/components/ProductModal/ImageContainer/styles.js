import styled from 'styled-components';

import { GREEN, WHITE, RED } from '../../../constants';

const styledSpan = styled.span`
    position: relative;
    width: 20px;
    height: 20px;

    svg {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: 20px;
        height: 20px;
    }
`;

export default {
    ImageContainer: styled.figure`
        position: relative;
        cursor: pointer;
        display: flex;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        margin: 2.5px;

        img {
            width: 100px;
            max-height: 133px;
            transition: transform 0.3s;
        }

        h2 {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 20px;
            height: 20px;

            svg {
                width: 20px;
                height: 20px;
            }
        }

        &:hover {
            img {
                transform: scale(1.5);
            }

            svg {
                &:last-child {
                    opacity: 1;
                }
            }
        }
  `,

    Circle: styled(styledSpan)`
        opacity: ${({ isActive }) => isActive ? '1' : '0.5'};

        svg > path {
            fill: ${({ isActive }) => isActive ? GREEN : WHITE};
        }
  `,

    Success: styled(styledSpan)`
        svg > path {
            fill: ${WHITE};
        }
  `,

    Delete: styled(styledSpan)`
        position: absolute;
        left: 5px;
        top: 5px;
        background-color: white;
        border-radius: 100%;

        svg {
            transform: scale(1.1);

            path {
                fill: ${RED};
            }
        }
  `,
};
