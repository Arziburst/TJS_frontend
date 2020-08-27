// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Elements
import { Spinner } from '../../elements';

// Styles
import S from './styles';

export const Loading = (props: any) => {
    const { t } = useTranslation();
    const { error, timedOut, pastDelay, retry } = props;

    if (error || timedOut || pastDelay) {
        return (
            <S.SpinnerContainer onClick = { retry }>
                <Spinner
                    absolute
                    text = { t('App.fallbackSpinnerText') }
                />
            </S.SpinnerContainer>
        );
    }

    return null;
};
