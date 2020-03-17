// Instruments
import types from './types';

export const fill = (products) => ({
    type:    types.PRODUCTS_FILL,
    payload: products,
});

export const fetchAsync = () => ({
    type: types.PRODUCTS_FETCH_ASYNC,
});

export const createNewProductAsync = (body) => ({
    type:    types.CREATE_NEW_PRODUCT_ASYNC,
    payload: body,
});

export const createNewProductSync = (payload) => ({
    type: types.CREATE_NEW_PRODUCT_SYNC,
    payload,
});

export const editProductAsync = (productHash, editedProduct) => ({
    type:    types.EDIT_PRODUCT_ASYNC,
    payload: {
        productHash,
        editedProduct,
    },
});

export const editProductSync = (editedProduct) => ({
    type:    types.EDIT_PRODUCT_SYNC,
    payload: editedProduct,
});

export const deleteProductAsync = (productHash) => ({
    type:    types.DELETE_PRODUCT_ASYNC,
    payload: productHash,
});

export const deleteProductSync = (productHash) => ({
    type:    types.DELETE_PRODUCT_SYNC,
    payload: productHash,
});

export const incrementProductViewsAsync = (productHash) => ({
    type:    types.INCREMENT_PRODUCT_VIEWS_ASYNC,
    payload: productHash,
});
