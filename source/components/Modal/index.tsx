// Core
import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import S from './styles';

type PropTypes = {
    children: ReactElement[];
    closeHandler?: () => void;
}

type Event = React.MouseEvent<HTMLElement, MouseEvent>;

export const Modal: FC<PropTypes> = ({ children, closeHandler }) => {
    const history = useHistory();

    const stopPropagation = (event: Event) => {
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
