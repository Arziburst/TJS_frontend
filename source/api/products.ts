import { API_ROOT } from './config';
import { Products, Product, ExtendedProduct } from '../bus/products/types';

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

export const deleteProductFetcher = (hash: string) => async(): Promise<string> => {
    const response = await fetch(`${API_ROOT}/products/${hash}`, {
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

export const editProductFetcher = (hash: string, body: Product) => async (): Promise<ExtendedProduct> => {
    const response = await fetch(`${API_ROOT}/products/${hash}`, {
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

export const incrementProductViewsFetcher = (hash: string) => async (): Promise<ExtendedProduct> => {
    const response = await fetch(`${API_ROOT}/products/incrementViews/${hash}`, {
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
