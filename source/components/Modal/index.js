// Core
import React from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import S from './styles';

export const Modal = ({ children, closeHandler }) => {
    const history = useHistory();

    const stopPropagation = (event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    const hideModal = () => void history.push('/');

    return (
        <S.ModalWrapper>
            <S.ModalContainer onClick = { (event) => stopPropagation(event) }>
                <S.Cross onClick = { closeHandler ? closeHandler : hideModal } />
                {children}
            </S.ModalContainer>
        </S.ModalWrapper>
    );
};
