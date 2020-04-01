// Types
import { GalleryState } from '../bus/gallery/types';

// Api
import { API_ROOT } from './config';

type Data<T> = { data: T };

export const galleryFetcher = async (): Promise<GalleryState> => {
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

    const { data }: Data<GalleryState> = await response.json();

    return data;
};

export const galleryUpdater = async (formData: FormData): Promise<GalleryState> => {
    const response = await fetch(`${API_ROOT}/images`, {
        method:      'POST',
        credentials: 'include',
        body:        formData,
    });

    if (response.status !== 200) {
        throw new Error('Gallery update failed');
    }

    const { data }: Data<GalleryState> = await response.json();

    return data;
};

export const deleteGalleryItemFetcher = async (public_id: string): Promise<string> => {
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

    const { data }: Data<string> = await response.json();

    return data;
};
