// Types
import { CreateOrderBody, Order, EditOrderBody, Orders } from '../bus/orders/types';

// Api
import { API_ROOT } from './config';

// Instruments
type Data<T> = { data: T };

export const ordersFetcher = async (): Promise<Orders> => {
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

    const { data }: Data<Orders> = await response.json();

    return data;
};

export const createOrderFetcher = (body: CreateOrderBody) => async (): Promise<Order> => {
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


    const { data }: Data<Order> = await response.json();

    return data;
};

export const editOrderFetcher = (
    { body, _id }: { body: EditOrderBody, _id: string },
) => async (): Promise<Order> => {
    const response = await fetch(`${API_ROOT}/orders/${_id}`, {
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


    const { data }: Data<Order> = await response.json();

    return data;
};
