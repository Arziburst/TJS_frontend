// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Hooks
import { useRegistration } from '../../bus/profile';
import { useForm } from '../../hooks';

// Components
import { Modal } from '../Modal';

// Elements
import { Button, Input, ModalHeader } from '../../elements';

// Styles
import S from './styles';

export const RegistrationModal = () => {
    const { t } = useTranslation();
    const { registrationAsync, toggler } = useRegistration();
    const [ form, setForm ] = useForm({
        name:     '',
        email:    '',
        phone:    '',
        password: '',
        confirm:  '',
    });

    const registerUser = () => {
        const { name, email, phone, password, confirm } = form;

        if (password !== confirm) {
            console.log('Password error');

            return;
        }

        if (!(email && phone && password)) {
            console.log('email && phone && password');

            return;
        }

        registrationAsync({ name, email, phone, password });
    };

    const firstNameValidation = form.name.length > 3;
    const emailValidation = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(form.email);
    const phoneValidation = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/.test(form.phone);
    const passwordValidation = form.password.length >= 5 && form.confirm.length >= 5 && form.password === form.confirm;
    const validation = firstNameValidation && emailValidation && phoneValidation && passwordValidation;

    return (
        <Modal>
            <ModalHeader>{t('RegistrationModal.registration')}</ModalHeader>
            <S.Main>
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('RegistrationModal.nameInput.hint') }
                    isValid = { firstNameValidation }
                    name = 'name'
                    title = { t('RegistrationModal.nameInput.title') }
                    value = { form.name }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('RegistrationModal.emailInput.hint') }
                    isValid = { emailValidation }
                    name = 'email'
                    title = { t('RegistrationModal.emailInput.title') }
                    type = 'email'
                    value = { form.email }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('RegistrationModal.phoneInput.hint') }
                    isValid = { phoneValidation }
                    name = 'phone'
                    title = { t('RegistrationModal.phoneInput.title') }
                    type = 'phone'
                    value = { form.phone }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('RegistrationModal.passwordInput.hint') }
                    isValid = { passwordValidation }
                    name = 'password'
                    title = { t('RegistrationModal.passwordInput.title') }
                    type = 'password'
                    value = { form.password }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('RegistrationModal.confirmInput.hint') }
                    isValid = { passwordValidation }
                    name = 'confirm'
                    title = { t('RegistrationModal.confirmInput.title') }
                    type = 'password'
                    value = { form.confirm }
                />
                <Button
                    disabled = { !validation }
                    toggler = { toggler }
                    onClick = { registerUser }>
                    {t('RegistrationModal.register')}
                </Button>
            </S.Main>
        </Modal>
    );
};
