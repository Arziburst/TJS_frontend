// Types
import { Products, Product, ExtendedProduct } from '../bus/products/types';

// Api
import { API_ROOT } from './config';

// Instruments
type Data<T> = { data: T };

export const productsFetcher = async (): Promise<Products> => {
    const response = await fetch(`${API_ROOT}/products`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Products fetch failed');
    }

    const { data }: Data<Products> = await response.json();

    return data;
};

export const createNewProductFetcher = (body: Product) => async (): Promise<ExtendedProduct> => {
    const response = await fetch(`${API_ROOT}/products`, {
        method:      'POST',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 201) {
        throw new Error('Product create failed');
    }

    const { data }: Data<ExtendedProduct> = await response.json();

    return data;
};

export const deleteProductFetcher = (_id: string) => async(): Promise<string> => {
    const response = await fetch(`${API_ROOT}/products/${_id}`, {
        method:      'DELETE',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Product delete failed');
    }

    const { data }: Data<string> = await response.json();

    return data;
};

export const editProductFetcher = (_id: string, body: Product) => async (): Promise<ExtendedProduct> => {
    const response = await fetch(`${API_ROOT}/products/${_id}`, {
        method:      'PUT',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        throw new Error('Product edit failed');
    }

    const { data }: Data<ExtendedProduct> = await response.json();

    return data;
};

export const incrementProductViewsFetcher = (_id: string) => async (): Promise<ExtendedProduct> => {
    const response = await fetch(`${API_ROOT}/products/incrementViews/${_id}`, {
        method:      'POST',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Product views edit failed');
    }

    const { data }: Data<ExtendedProduct> = await response.json();

    return data;
};
