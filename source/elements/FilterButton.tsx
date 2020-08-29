// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>;
    isActive?: boolean;
}

// Styles
const Styled = styled.button<ButtonProps>`
    cursor: pointer;
    outline: none;
    font-family: sans-serif;
    padding: 0px;
    margin: 0px;
    height: 40px;
    font-size: 22px;
    font-family: PacificoRegular;
    box-sizing: border-box;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${({ theme }) => theme.button};
    ${({ isActive }) => {
        if (isActive) {
            return {
                textDecoration: 'underline',
                opacity:        1,
                '&:hover':      {
                    opacity: 1,
                },
            };
        }

        return {};
    }};
`;

export const FilterButton: FC<ButtonProps> = ({ children, isActive, ...otherProps }) => {
    return (
        <Styled
            isActive = { isActive }
            { ...otherProps }>
            {children}
        </Styled>
    );
};
