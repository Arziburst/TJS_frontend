// Core
import React, { memo, FC } from 'react';
import styled from 'styled-components';
import v4 from 'uuid/v4';

// Svg
import { elementsSvg } from '../assets';

// Styles
import { styledContainer } from './styles';

const InputContainer = styled(styledContainer)`
    input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        padding: 3px 10px;
        width: 100%;
    }
`;

type PropTypes = {
    type?: string;
    name?: string;
    placeholder?: string;
    title?: string;
    hint?: string;
    handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    isValid?: boolean;
    disabled?: boolean;
}

export const Input: FC<PropTypes> = memo(({
    type = 'text',
    name = '',
    placeholder = 'Enter some data...',
    title = 'Some input.',
    hint = null,
    handler = () => void 0,
    value = '',
    isValid = false,
    disabled = false,
}) => {
    const tipId = v4();

    return (
        <InputContainer isValid = { isValid }>
            <header>{title}</header>
            <input
                disabled = { disabled }
                name = { name }
                placeholder = { placeholder }
                type = { type }
                value = { value }
                onChange = { handler }
            />
            <section>
                {!isValid && hint && elementsSvg.HintIcon(tipId, hint)}
                {isValid && elementsSvg.SuccessIcon()}
            </section>
        </InputContainer>
    );
});

