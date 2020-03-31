// Core
import React, { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import S from './styles';

// TODO ANY
type TogglerPropTypes = {
    isActive: boolean;
    handler: any;
    text: string;
}

type TogglersPropTypes = {
    setThemeName: Function
    setLocale: Function;
    themeName: string;
    locale: string;
}

// Elements
const Toggler: FC<TogglerPropTypes> = ({ isActive, handler, text }) => (
    <S.Toggler
        isActive = { isActive }
        onClick = { handler }>
        {text}
    </S.Toggler>
);

export const Togglers: FC<TogglersPropTypes> = ({ setThemeName, themeName, locale, setLocale }) => {
    const { t } = useTranslation();

    return (
        <S.TogglerContainer>
            <div>
                <Toggler
                    handler = { () => setThemeName('lightTheme') }
                    isActive = { themeName === 'lightTheme' }
                    text = { t('Togglers.light') }
                />
                <Toggler
                    handler = { () => setThemeName('darkTheme') }
                    isActive = { themeName === 'darkTheme' }
                    text = { t('Togglers.dark') }
                />
            </div>
            <div>
                <Toggler
                    handler = { () => setLocale('en') }
                    isActive = { locale === 'en' }
                    text = 'Eng'
                />
                <Toggler
                    handler = { () => setLocale('ru') }
                    isActive = { locale === 'ru' }
                    text = 'Ru'
                />
            </div>
        </S.TogglerContainer>
    );
};
