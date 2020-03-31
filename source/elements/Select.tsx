// Core
import React, { memo, FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import v4 from 'uuid/v4';

// Svg
import { elementsSvg } from '../assets';

// Styles
import { styledContainer } from './styles';

const SelectContainer = styled(styledContainer) <{ styles: any }>`
    ${({ styles }) => styles};
    select {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        padding: 3px 10px;
        width: 100%;
        font-family: RobotoRegular;
    }
`;

type PropTypes = {
    children?: never;
    name?: string;
    title?: string;
    hint?: string;
    handler?: (event: ChangeEvent<HTMLSelectElement>) => void;
    value?: string | number;
    isValid?: boolean;
    disabled?: boolean;
    optionsArray?: Array<[string, string]>;
    styles?: any;
};

export const Select: FC<PropTypes> = memo(({
    name = '',
    title = 'Some input.',
    hint = null,
    handler = () => void 0,
    value,
    isValid = false,
    disabled = false,
    optionsArray = [],
    styles = {},
}) => {
    const tipId = v4();

    return (
        <SelectContainer
            isValid = { isValid }
            styles = { styles }>
            <header>{title}</header>
            <select
                disabled = { disabled }
                name = { name }
                value = { value }
                onChange = { handler }>
                {
                    optionsArray.map(([ optionKey, optionValue ], index) => (
                        <option
                            key = { index }
                            value = { optionKey }>
                            {optionValue}
                        </option>
                    ))
                }
            </select>
            <section>
                {!isValid && hint && elementsSvg.HintIcon(tipId, hint)}
                {isValid && elementsSvg.SuccessIcon()}
            </section>
        </SelectContainer>
    );
});

