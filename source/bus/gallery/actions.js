// Instruments
import types from './types';

export const galleryActions = Object.freeze({
    fetchAsync: () => ({
        type: types.FETCH_GALLERY_ASYNC,
    }),

    fill: (payload) => ({
        type: types.GALLERY_FILL,
        payload,
    }),

    updateGalleryAsync: (formData) => ({
        type:    types.UPDATE_GALLERY_ASYNC,
        payload: formData,
    }),

    updateGallerySync: (images) => ({
        type:    types.UPDATE_GALLERY_SYNC,
        payload: images,
    }),

    deleteGalleryItemAsync: (public_id) => ({
        type:    types.DELETE_GALLERY_ITEM_ASYNC,
        payload: public_id,
    }),

    deleteGalleryItemSync: (public_id) => ({
        type:    types.DELETE_GALLERY_ITEM_SYNC,
        payload: public_id,
    }),
});
