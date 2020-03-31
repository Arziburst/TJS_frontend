// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../hooks';

// Types
import { Credentials, Registration } from './types';
import { useSelectorTogglers } from '../togglers';

// Actions
import {
    initializeAsync,
    registrationAsync,
    loginAsync,
    logoutAsync,
} from './actions';

export const useInitialize = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAsync());
    }, [ dispatch ]);

    const { isInitialized, isAuthenticated } = useSelectorTogglers();

    return {
        isInitialized,
        isAuthenticated,
    };
};

export const useRegistration = () => {
    const dispatch = useDispatch();

    return {
        registrationAsync: (body: Registration) => dispatch(registrationAsync(body)),
        toggler:           useSelectorTogglers().isProfileFetching,
    };
};

export const useLogin = () => {
    const dispatch = useDispatch();

    return {
        loginAsync: (credentials: Credentials) => dispatch(loginAsync(credentials)),
        toggler:    useSelectorTogglers().isProfileFetching,
    };
};

export const useLogout = () => {
    const dispatch = useDispatch();

    return {
        logoutHandler: () => dispatch(logoutAsync()),
        toggler:       useSelectorTogglers().isProfileFetching,
    };
};

export const useSelectorProfile = () => useSelector(({ profile }) => profile);
