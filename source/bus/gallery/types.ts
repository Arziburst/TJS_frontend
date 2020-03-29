export type Image = {
    public_id: string;
    imageUrl: string;
};

export type GalleryState = Image[];

// FETCH & FILL
export const GALLERY_FETCH_ASYNC = 'GALLERY_FETCH_ASYNC';
type GalleryFetchingAction = {
    type: typeof GALLERY_FETCH_ASYNC;
};

export const GALLERY_FILL = 'GALLERY_FILL';
export type GalleryFillAction = {
    type: typeof GALLERY_FILL;
    payload: Image[];
};

// Update
export const GALLERY_UPDATE_ASYNC = 'GALLERY_UPDATE_ASYNC';
export type GalleryUpdateAsyncAction = {
    type: typeof GALLERY_UPDATE_ASYNC;
    payload: FormData;
};

export const GALLERY_UPDATE_SYNC = 'GALLERY_UPDATE_SYNC';
export type GalleryUpdateSyncAction = {
    type: typeof GALLERY_UPDATE_SYNC;
    payload: Image[];
};

// DELETE
export const GALLERY_DELETE_ITEM_ASYNC = 'GALLERY_DELETE_ITEM_ASYNC';
export type GalleryDeleteItemAsyncAction = {
    type: typeof GALLERY_DELETE_ITEM_ASYNC;
    payload: string;
};

export const GALLERY_DELETE_ITEM_SYNC = 'GALLERY_DELETE_ITEM_SYNC';
export type GalleryDeleteItemSyncAction = {
    type: typeof GALLERY_DELETE_ITEM_SYNC;
    payload: string;
};

export type GalleryActionTypes =
    // FETCH & FILL
    | GalleryFetchingAction
    | GalleryFillAction
    // UPDATE
    | GalleryUpdateAsyncAction
    | GalleryUpdateSyncAction
    // DELETE
    | GalleryDeleteItemAsyncAction
    | GalleryDeleteItemSyncAction;
