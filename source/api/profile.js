import { API_ROOT } from './config';

export const authenticate = async () => {
    const response = await fetch(`${API_ROOT}/profile/refresh`, {
        method:      'GET',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('');
    }

    const { data } = await response.json();

    return data;
};

export const registration = (body) => async () => {
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

    const { data } = await response.json();

    return data;
};

export const login = (email, password) => async () => {
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

    const { data } = await response.json();

    return data;
};

export const logout = async () => {
    const response = await fetch(`${API_ROOT}/profile/logout`, {
        method:      'DELETE',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    return response.status;
};
