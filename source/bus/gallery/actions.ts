// Types
import { Image } from './types';
import * as types from './types';

export const galleryFetchAsync = (): types.GalleryActionTypes => ({
    type: types.GALLERY_FETCH_ASYNC,
});

export const fill = (payload: Image[]): types.GalleryFillAction => ({
    type: types.GALLERY_FILL,
    payload,
});

export const updateGalleryAsync = (formData: FormData): types.GalleryUpdateAsyncAction => ({
    type:    types.GALLERY_UPDATE_ASYNC,
    payload: formData,
});

export const updateGallerySync = (images: Image[]): types.GalleryUpdateSyncAction => ({
    type:    types.GALLERY_UPDATE_SYNC,
    payload: images,
});

export const deleteGalleryItemAsync = (public_id: string): types.GalleryDeleteItemAsyncAction => ({
    type:    types.GALLERY_DELETE_ITEM_ASYNC,
    payload: public_id,
});

export const deleteGalleryItemSync = (public_id: string): types.GalleryDeleteItemSyncAction => ({
    type:    types.GALLERY_DELETE_ITEM_SYNC,
    payload: public_id,
});
