// Core
import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';

// Hooks
import { useLogout } from '../../../bus/profile';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../../assets';

export const Profile = ({ name }) => {
    const { logoutHandler, toggler } = useLogout();
    // const history = useHistory();
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
