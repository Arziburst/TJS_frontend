export type Product = {
    title: string;
    description: string;
    type: string;
    available: boolean;
    price: number;
    discount: number;
    images: string[];
    weight: number;
};

export type ExtendedProduct = Product & {
    views: number;
    isProductNew: boolean;
    created: string;
    _id: string;
};

export type Products = ExtendedProduct[];

// FETCH & FILL
export const PRODUCTS_FETCH_ASYNC = 'PRODUCTS_FETCH_ASYNC';
type ProductsFetchingAction = {
    type: typeof PRODUCTS_FETCH_ASYNC;
};

export const PRODUCTS_FILL = 'PRODUCTS_FILL';
export type ProductsFillAction = {
    type: typeof PRODUCTS_FILL;
    payload: Products;
};

// CREATE
export const PRODUCTS_CREATE_ITEM_ASYNC = 'PRODUCTS_CREATE_ITEM_ASYNC';
export type ProductsCreateItemAsyncAction = {
    type: typeof PRODUCTS_CREATE_ITEM_ASYNC;
    payload: Product;
};

export const PRODUCTS_CREATE_ITEM_SYNC = 'PRODUCTS_CREATE_ITEM_SYNC';
export type ProductsCreateItemSyncAction = {
    type: typeof PRODUCTS_CREATE_ITEM_SYNC;
    payload: ExtendedProduct;
};

// EDIT
export const PRODUCTS_EDIT_ITEM_ASYNC = 'PRODUCTS_EDIT_ITEM_ASYNC';
export type ProductsEditItemAsyncAction = {
    type: typeof PRODUCTS_EDIT_ITEM_ASYNC;
    payload: {
        _id: string;
        editedProduct: Product;
    };
};

export const PRODUCTS_EDIT_ITEM_SYNC = 'PRODUCTS_EDIT_ITEM_SYNC';
export type ProductsEditItemSyncAction = {
    type: typeof PRODUCTS_EDIT_ITEM_SYNC;
    payload: ExtendedProduct;
};

// DELETE
export const PRODUCTS_DELETE_ITEM_ASYNC = 'PRODUCTS_DELETE_ITEM_ASYNC';
export type ProductsDeleteItemAsyncAction = {
    type: typeof PRODUCTS_DELETE_ITEM_ASYNC;
    payload: string;
};

export const PRODUCTS_DELETE_ITEM_SYNC = 'PRODUCTS_DELETE_ITEM_SYNC';
export type ProductsDeleteItemSyncAction = {
    type: typeof PRODUCTS_DELETE_ITEM_SYNC;
    payload: string;
};

// ADDITIONAL
export const PRODUCTS_INCREMENT_ITEM_VIEWS_ASYNC = 'PRODUCTS_INCREMENT_ITEM_VIEWS_ASYNC';
export type ProductsIncrementItemViewsAsyncAction = {
    type: typeof PRODUCTS_INCREMENT_ITEM_VIEWS_ASYNC;
    payload: string;
};

export type ProductsActionTypes =
    // FETCH & FILL
    | ProductsFetchingAction
    | ProductsFillAction
    // CREATE
    | ProductsCreateItemAsyncAction
    | ProductsCreateItemSyncAction
    // EDIT
    | ProductsEditItemAsyncAction
    | ProductsEditItemSyncAction
    // DELETE
    | ProductsDeleteItemAsyncAction
    | ProductsDeleteItemSyncAction
    // ADDITIONAL
    | ProductsIncrementItemViewsAsyncAction
