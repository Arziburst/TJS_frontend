import { API_ROOT } from './config';

export const productsFetcher = async () => {
    const response = await fetch(`${API_ROOT}/products`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Products fetch failed');
    }

    const { data } = await response.json();

    return data;
};

export const createNewProductFetcher = (body) => async () => {
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

    const { data } = await response.json();

    return data;
};

export const deleteProductFetcher = (hash) => async () => {
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

    const { data } = await response.json();

    return data;
};

export const editProductFetcher = (hash, body) => async () => {
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

    const { data } = await response.json();

    return data;
};

export const incrementProductViewsFetcher = (hash) => async () => {
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

    const { data } = await response.json();

    return data;
};
