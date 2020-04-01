// Core
import React, { memo, FC } from 'react';
import styled from 'styled-components';
import v4 from 'uuid/v4';

// Svg
import { elementsSvg } from '../assets';

// Styles
import { styledContainer } from './styles';

const TextareaContainer = styled(styledContainer)`
    textarea {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        padding: 3px 10px;
        width: 100%;
        min-height: 50px;
        max-height: 150px;
        min-width: 100%;
        max-width: 100%;
        outline: none;
        font-family: RobotoRegular;
    }
`;

type PropTypes = {
    name?: string;
    placeholder?: string;
    title?: string;
    hint?: string;
    handler?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    isValid?: boolean;
    disabled?: boolean;
};

export const Textarea: FC<PropTypes> = memo(({
    name = '',
    placeholder = 'Enter some data...',
    title = 'Some input.',
    hint,
    handler = () => void 0,
    value = '',
    isValid = false,
    disabled = false,
}) => {
    const tipId = v4();

    return (
        <TextareaContainer isValid = { isValid }>
            <header>{title}</header>
            <textarea
                disabled = { disabled }
                name = { name }
                placeholder = { placeholder }
                value = { value }
                onChange = { handler }
            />
            <section>
                {!isValid && hint && elementsSvg.HintIcon(tipId, hint)}
                {isValid && elementsSvg.SuccessIcon()}
            </section>
        </TextareaContainer>
    );
});

