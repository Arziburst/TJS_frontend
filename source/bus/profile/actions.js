// Instruments
import types from './types';

export const authActions = Object.freeze({
    initialize:      () => ({ type: types.INITIALIZE }),
    initializeAsync: () => ({ type: types.INITIALIZE_ASYNC }),

    authenticate:      () => ({ type: types.AUTHENTICATE }),
    authenticateAsync: (TOKEN) => ({
        type:    types.AUTHENTICATE_ASYNC,
        payload: TOKEN,
    }),

    registrationAsync: (body) => ({
        type:    types.REGISTRATION_ASYNC,
        payload: body,
    }),

    loginAsync: (credentials) => ({
        type:    types.LOGIN_ASYNC,
        payload: credentials,
    }),

    fillProfile: (profile) => ({
        type:    types.FILL_PROFILE,
        payload: profile,
    }),

    logout:      () => ({ type: types.LOGOUT }),
    logoutAsync: () => ({ type: types.LOGOUT_ASYNC }),
});
