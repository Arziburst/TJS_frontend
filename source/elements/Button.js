// Core
import React from 'react';
import styled from 'styled-components';

// Styles
const ButtonContainer = styled.button`
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.95);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    }

    &:disabled {
        opacity: 0.5;
        cursor:  not-allowed;
    }
      
    padding: 0px 10px;
    font-family: PacificoRegular;
    font-size: 20px;
    border-radius: 12px;

    transition: transform 0.3s, box-shadow 0.3s;

    ${({ theme }) => theme.button};
    ${({ theme, styles }) => {
        if (typeof styles === 'function') {
            return styles(theme.name);
        }

        if (styles) {
            return styles;
        }
    }};
`;

export const Button = ({
    children = 'Enter',
    disabled = false,
    toggler = false,
    onClick = () => void 0,
    spinner = 'Loading',
    styles = null,
}) => (
    <ButtonContainer
        disabled = { disabled }
        styles = { styles }
        onClick = { () => !disabled && !toggler && onClick() }>
        {
            toggler ? spinner : children
        }
    </ButtonContainer>
);

