// Core
import React from 'react';
import styled from 'styled-components';

// Constants
import { WHITE } from '../constants';

// Styles
const HeaderContainer = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.modal.header};

    h1 {
        padding-left: 15px;
        font-family: PacificoRegular;
        font-size: 24px;
        color: ${WHITE};
    }
`;

export const ModalHeader = ({ children = '' }) => (
    <HeaderContainer>
        <h1>{children}</h1>
    </HeaderContainer>
);

