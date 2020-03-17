// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import types from '../types';

// Workers
import {
    fetchProducts,
    createNewProduct,
    deleteProduct,
    editProduct,
    incrementProductViews,
} from './workers';

function* watchFetchProducts() {
    yield takeEvery(types.PRODUCTS_FETCH_ASYNC, fetchProducts);
}

function* watchCreateNewProduct() {
    yield takeEvery(types.CREATE_NEW_PRODUCT_ASYNC, createNewProduct);
}

function* watchEditProduct() {
    yield takeEvery(types.EDIT_PRODUCT_ASYNC, editProduct);
}

function* watchDeleteProduct() {
    yield takeEvery(types.DELETE_PRODUCT_ASYNC, deleteProduct);
}

function* watchIncrementProductViews() {
    yield takeEvery(types.INCREMENT_PRODUCT_VIEWS_ASYNC, incrementProductViews);
}

export function* watchProducts() {
    yield all([
        call(watchFetchProducts),
        call(watchCreateNewProduct),
        call(watchEditProduct),
        call(watchDeleteProduct),
        call(watchIncrementProductViews),
    ]);
}
