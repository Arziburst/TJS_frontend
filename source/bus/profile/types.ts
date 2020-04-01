export type ProfileState = {
    email: string;
    name: string,
    phone: string,
    role: string,
};

export type Credentials = {
    email: string;
    password: string;
};

export type Registration = {
    name: string;
    phone: string;
    email: string;
    password: string;
};

export const INITIALIZE_ASYNC = 'INITIALIZE_ASYNC';
export type InitializeAsyncAction = {
    type: typeof INITIALIZE_ASYNC;
};

export const AUTHENTICATE_ASYNC = 'AUTHENTICATE_ASYNC';
export type AuthenticateAsyncAction = {
    type: typeof AUTHENTICATE_ASYNC;
};

export const REGISTRATION_ASYNC = 'REGISTRATION_ASYNC';
export type RegistrationAsyncAction = {
    type: typeof REGISTRATION_ASYNC;
    payload: Registration
};

export const LOGIN_ASYNC = 'LOGIN_ASYNC';
export type LoginAsyncAction = {
    type: typeof LOGIN_ASYNC;
    payload: Credentials;
};

export const FILL_PROFILE = 'FILL_PROFILE';
export type FillProfileAction = {
    type: typeof FILL_PROFILE;
    payload: ProfileState;
};

export const LOGOUT_ASYNC = 'LOGOUT_ASYNC';
export type LogoutAsyncAction = {
    type: typeof LOGOUT_ASYNC;
};

export const LOGOUT = 'LOGOUT';
export type LogoutAction = {
    type: typeof LOGOUT;
};

export const RESET_TO_INNITIAL_STATE = 'RESET_TO_INNITIAL_STATE';

export type ProfileActionTypes =
    | InitializeAsyncAction
    | AuthenticateAsyncAction
    | RegistrationAsyncAction
    | LoginAsyncAction
    | FillProfileAction
    | LogoutAsyncAction
    | LogoutAction
