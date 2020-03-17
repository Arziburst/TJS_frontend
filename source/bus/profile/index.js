import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { authActions } from './actions';

export const useInitialize = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.initializeAsync());
    }, [ dispatch ]);

    const authTogglers = useSelector(({ togglers: { isInitialized, isAuthenticated} }) => ({
        isInitialized,
        isAuthenticated,
    }));

    return authTogglers;
};

export const useRegistration = () => {
    const dispatch = useDispatch();

    const registrationAsync = (body) => dispatch(authActions.registrationAsync(body));
    const toggler = useSelector(({ togglers }) => togglers.isProfileFetching);

    return {
        registrationAsync,
        toggler,
    };
};

export const useLogin = () => {
    const dispatch = useDispatch();

    const loginAsync = (credentials) => dispatch(authActions.loginAsync(credentials));
    const toggler = useSelector(({ togglers }) => togglers.isProfileFetching);

    return {
        loginAsync,
        toggler,
    };
};

export const useLogout = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => dispatch(authActions.logoutAsync());
    const toggler = useSelector(({ togglers }) => togglers.isProfileFetching);

    return {
        logoutHandler,
        toggler,
    };
};
