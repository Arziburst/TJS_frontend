// Core
import React, { memo, FC } from 'react';
import styled from 'styled-components';

// Elements
import { Button } from './Button';

// Tools
import { GREEN, RED } from '../constants';

// Styles
import { styledContainer } from './styles';

const Container = styled(styledContainer) <{ value: boolean, disabled: boolean }>`
    padding: 5px 5px;
    background-color: ${({ value }) => value ? GREEN : RED};

    button {
        font-family: RobotoRegular;
        width: 50%;
        height: 30px;
        box-sizing: border-box;
        ${({ value }) => value ? '' : 'transform: translateX(100%);'};
    }
`;

type PropTypes = {
    i18nObj?: { true: string, false: string },
    handler?: () => void;
    value?: boolean;
    disabled?: boolean;
};

export const Toggler: FC<PropTypes> = memo(({
    i18nObj = { true: '', false: '' },
    handler = () => void 0,
    value = true,
    disabled = false,
}) => {
    return (
        <Container
            disabled = { disabled }
            value = { value }
            onClick = { () => !disabled && void handler() }>
            <Button
                disabled = { disabled }>
                {value ? i18nObj.true : i18nObj.false}
            </Button>
        </Container>
    );
});

