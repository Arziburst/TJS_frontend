// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import S from './styles';

export const Footer: FC = () => {
    const { t } = useTranslation();

    return (
        <S.FooterContainer>
            <S.FooterCenter>
                <a href = 'tel:+380668301029'>
                    {t('Footer.contactTelephone')}: +38 (066) 830 10 29
                </a>
                <a
                    href = 'https://github.com/Arziburst'
                    rel = 'noopener noreferrer'
                    target = '_blank'>
                    Developed by @Arziburst
                </a>
            </S.FooterCenter>
        </S.FooterContainer>
    );
};
