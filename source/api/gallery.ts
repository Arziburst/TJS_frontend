import { API_ROOT } from './config';

export const galleryFetcher = async () => {
    const response = await fetch(`${API_ROOT}/images`, {
        method:      'GET',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Gallery fetch failed');
    }

    const { data } = await response.json();

    return data;
};

export const galleryUpdater = async (formData: FormData) => {
    const response = await fetch(`${API_ROOT}/images`, {
        method:      'POST',
        credentials: 'include',
        body:        formData,
    });

    if (response.status !== 200) {
        throw new Error('Gallery update failed');
    }

    const { data } = await response.json();

    return data;
};

export const deleteGalleryItemFetcher = async (public_id: string) => {
    const response = await fetch(`${API_ROOT}/images/${public_id}`, {
        method:      'DELETE',
        credentials: 'include',
        headers:     {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Gallery item delete failed');
    }

    const { data } = await response.json();

    return data;
};
