// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Types
import { ThemesKeys } from '../../theme';

// Components
import { UserMenu } from '..';

// Images
import { images } from '../../assets';

// Styles
import S from './styles';

type PropTypes = {
    themeName: ThemesKeys;
    setThemeName: (value: ThemesKeys) => void;
};

export const Toolbar: FC<PropTypes> = ({ themeName, setThemeName }) => {
    const { t } = useTranslation();

    return (
        <S.ToolbarContainer>
            <Link to = { '/' }>
                <img src = { images.logo } />
                <h2>Tjstore</h2>
                <h3>Tjs</h3>
            </Link>
            <S.ToolbarCenter>
                <h1>Trend jewelry store</h1>
                <S.ContactData>
                    <a href = 'tel:+380668301029'>{t('Toolbar.phone')}: +38(066)830 10 29</a>
                    <a href = 'mailto:elena-arez@ukr.net'>{t('Toolbar.email')}: elena-arez@ukr.net</a>
                    <Link to = { '/about-us' }>About us</Link>
                </S.ContactData>
            </S.ToolbarCenter>
            <UserMenu
                setThemeName = { setThemeName }
                themeName = { themeName }
            />
        </S.ToolbarContainer>
    );
};
