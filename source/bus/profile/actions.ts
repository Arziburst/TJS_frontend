// Instruments
import { Credentials, ProfileState } from './types';
import * as types from './types';

export const initializeAsync = (): types.ProfileActionTypes => ({
    type: types.INITIALIZE_ASYNC,
});

export const authenticateAsync = (): types.ProfileActionTypes => ({
    type: types.AUTHENTICATE_ASYNC,
});

export const registrationAsync = (body: types.Registration): types.RegistrationAsyncAction => ({
    type:    types.REGISTRATION_ASYNC,
    payload: body,
});

export const loginAsync = (credentials: Credentials): types.LoginAsyncAction => ({
    type:    types.LOGIN_ASYNC,
    payload: credentials,
});

export const fillProfile = (profile: ProfileState): types.FillProfileAction => ({
    type:    types.FILL_PROFILE,
    payload: profile,
});

export const logoutAsync = (): types.ProfileActionTypes => ({
    type: types.LOGOUT_ASYNC,
});

export const logout = (): types.ProfileActionTypes => ({
    type: types.LOGOUT,
});
