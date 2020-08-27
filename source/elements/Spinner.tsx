// Core
import React, { FC, useState, useEffect, DetailedHTMLProps, Ref, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from 'styled-components';

// Constants
import { WHITE, BLACK } from '../constants';

// Types
interface StyledDivProps {
    isActive?: boolean;
    absolute?: boolean
    timeout?: number
}

interface SpinnerProps extends
    StyledDivProps,
    DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
{
    size?: SizeProp
    text?: string
    ref?: Ref<HTMLInputElement>;
}

const Container = styled.div<StyledDivProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    cursor: not-allowed;

    ${({ absolute }) => absolute
        ? {
            position: 'absolute',
            top:      0,
            bottom:   0,
            left:     0,
            right:    0,
            zIndex:   1,
        }
        : {
            width:  '100%',
            height: '100%',
        }}


    opacity: 0;
    ${({ isActive }) => isActive && { opacity: 1 }};
    ${({ timeout }) => Boolean(timeout) && {
        backgroundColor: 'rgba(0,0,0,0.4)',
        transition:      'opacity 1s',
    }};
`;

const Text = styled.h2`
    width: 320px;
    text-align: center;
    padding-bottom: 150px;
    font-size: 32px;
    color: ${({ theme }) => theme.themeName === 'lightTheme' ? BLACK : WHITE};
    font-family: PacificoRegular;
`;

let timerId: number | undefined = void 0;

export const Spinner: FC<SpinnerProps> = ({
    size = '5x', absolute = false, timeout = 500, text, ...otherProps
}) => {
    const theme = useContext(ThemeContext);
    const [ isActive, setIsActive ] = useState(false);

    useEffect(() => {
        if (timeout === 0) {
            setIsActive(true);
        }

        timerId = setTimeout(() => !isActive && void setIsActive(true), timeout);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <Container
            { ...otherProps }
            absolute = { absolute }
            isActive = { isActive }
            timeout = { timeout }>
            {
                text && (
                    <Text>{text}</Text>
                )
            }
            <FontAwesomeIcon
                spin
                color = { theme.logo }
                icon = 'cog'
                size = { size }
                title = 'Loading...'
            />
        </Container>
    );
};

