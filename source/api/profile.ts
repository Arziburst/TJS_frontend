// Types
import { ProfileState, Registration } from '../bus/profile/types';

// Api
import { API_ROOT } from './config';

// Instruments
type Data<T> = { data: T };

export const authenticateRequest = async (): Promise<ProfileState> => {
    const response = await fetch(`${API_ROOT}/profile/refresh`, {
        method:      'GET',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Session expired');
    }

    const { data }: Data<ProfileState> = await response.json();

    return data;
};

export const registration = (body: Registration) => async (): Promise<ProfileState> => {
    const response = await fetch(`${API_ROOT}/profile/registration`, {
        method:      'POST',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        throw new Error('Email or phone number already registered!');
    }

    const { data }: Data<ProfileState> = await response.json();

    return data;
};

export const login = (email: string, password: string) => async (): Promise<ProfileState> => {
    const response = await fetch(`${API_ROOT}/profile/login`, {
        method:      'POST',
        credentials: 'include',
        headers:     {

            'Content-Type': 'application/json',
            Authorization:  `Basic ${email}:${password}`,
        },
    });

    if (response.status !== 200) {
        throw new Error('Credentials are not valid!');
    }

    const { data }: Data<ProfileState> = await response.json();

    return data;
};

export const logoutRequest = async (): Promise<number> => {
    const response = await fetch(`${API_ROOT}/profile/logout`, {
        method:      'DELETE',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    return response.status;
};
