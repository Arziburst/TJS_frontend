// Core
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

// Hooks
import { useLogin } from '../../../bus/profile';
import { useForm } from '../../../hooks';

// Styles
import S from './styles';

export const Login = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const { loginAsync, toggler } = useLogin();
    const [ form, handleChange ] = useForm({
        email:    process.env.DEV_EMAIL || '',
        password: process.env.DEV_PASSWORD || '',
    });

    const loginHandler = () => {
        if (toggler) {
            return;
        }

        loginAsync(form);
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            loginHandler();
        }
    };

    return (
        <S.InputsContainer>
            <input
                disabled = { toggler }
                name = 'email'
                placeholder = { t('Login.emailPlaceholder') }
                type = 'email'
                value = { form.email }
                onChange = { (event) => handleChange(event) }
                onKeyPress = { onKeyPress }
            />
            <input
                disabled = { toggler }
                name = 'password'
                placeholder = { t('Login.passwordPlaceholder') }
                type = 'password'
                value = { form.password }
                onChange = { (event) => handleChange(event) }
                onKeyPress = { onKeyPress }
            />
            <div>
                <button onClick = { loginHandler }>
                    {t('Login.signIn')}
                </button>
                <button onClick = { () => history.push('/registration') }>
                    {toggler ? 'Loading' : t('Login.signUp')}
                </button>
            </div>
        </S.InputsContainer>
    );
};
