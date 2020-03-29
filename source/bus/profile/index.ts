// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Types
import { Credentials, Registration } from './types';
import { useSelectorTogglers, useSelectorToggler } from '../togglers';

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

    return useSelectorTogglers([ 'isInitialized', 'isAuthenticated' ]);
};

export const useRegistration = () => {
    const dispatch = useDispatch();

    return {
        registrationAsync: (body: Registration) => dispatch(registrationAsync(body)),
        toggler:           useSelectorToggler('isProfileFetching'),
    };
};

export const useLogin = () => {
    const dispatch = useDispatch();

    return {
        loginAsync: (credentials: Credentials) => dispatch(loginAsync(credentials)),
        toggler:    useSelectorToggler('isProfileFetching'),
    };
};

export const useLogout = () => {
    const dispatch = useDispatch();

    return {
        logoutHandler: () => dispatch(logoutAsync()),
        toggler:       useSelectorToggler('isProfileFetching'),
    };
};
