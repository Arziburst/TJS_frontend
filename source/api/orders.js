// Api
import { API_ROOT } from './config';

export const ordersFetcher = async () => {
    const response = await fetch(`${API_ROOT}/orders`, {
        method:      'GET',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Orders fetch failed');
    }

    const { data } = await response.json();

    return data;
};

export const createOrderFetcher = (body) => async () => {
    const response = await fetch(`${API_ROOT}/orders`, {
        method:      'POST',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 201) {
        throw new Error('Order create failed');
    }


    const { data } = await response.json();

    return data;
};

export const editOrderFetcher = ({ body, hash }) => async () => {
    const response = await fetch(`${API_ROOT}/orders/${hash}`, {
        method:      'PUT',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        throw new Error('Order update failed');
    }


    const { data } = await response.json();

    return data;
};
