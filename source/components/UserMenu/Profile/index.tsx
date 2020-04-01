// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';

// Hooks
import { useLogout } from '../../../bus/profile';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../../assets';

type PropTypes = {
    name: string;
};

export const Profile: FC<PropTypes> = ({ name }) => {
    const { logoutHandler, toggler } = useLogout();
    const { t } = useTranslation();

    return (
        <S.UserMenuSection>
            <div>{appSvg.userIcon()}</div>
            <section>
                <p>{t('Profile.welcome')}:</p>
                <p>{name ? name : t('Profile.anonymousUser')}</p>
                <button onClick = { () => logoutHandler() }>
                    {toggler ? t('Profile.loading') : t('Profile.logout')}
                </button>
            </section>
        </S.UserMenuSection>
    );
};
