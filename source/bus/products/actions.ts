// Instruments
import * as types from './types';

// FETCH & FILL
export const productsFetchAsync = (): types.ProductsActionTypes => ({
    type: types.PRODUCTS_FETCH_ASYNC,
});

export const fill = (products: types.Products): types.ProductsFillAction => ({
    type:    types.PRODUCTS_FILL,
    payload: products,
});

// CREATE
export const createNewProductAsync = (body: types.Product): types.ProductsCreateItemAsyncAction => ({
    type:    types.PRODUCTS_CREATE_ITEM_ASYNC,
    payload: body,
});

export const createNewProductSync = (payload: types.ExtendedProduct): types.ProductsCreateItemSyncAction => ({
    type: types.PRODUCTS_CREATE_ITEM_SYNC,
    payload,
});

// EDIT
export const editProductAsync = (
    productHash: string, editedProduct: types.Product,
): types.ProductsEditItemAsyncAction => ({
    type:    types.PRODUCTS_EDIT_ITEM_ASYNC,
    payload: {
        productHash,
        editedProduct,
    },
});

export const editProductSync = (editedProduct: types.ExtendedProduct): types.ProductsEditItemSyncAction => ({
    type:    types.PRODUCTS_EDIT_ITEM_SYNC,
    payload: editedProduct,
});

// DELETE
export const deleteProductAsync = (productHash: string): types.ProductsDeleteItemAsyncAction => ({
    type:    types.PRODUCTS_DELETE_ITEM_ASYNC,
    payload: productHash,
});

export const deleteProductSync = (productHash: string): types.ProductsDeleteItemSyncAction => ({
    type:    types.PRODUCTS_DELETE_ITEM_SYNC,
    payload: productHash,
});

// ADDITIONAL
export const incrementProductViewsAsync = (productHash: string): types.ProductsIncrementItemViewsAsyncAction => ({
    type:    types.PRODUCTS_INCREMENT_ITEM_VIEWS_ASYNC,
    payload: productHash,
});
