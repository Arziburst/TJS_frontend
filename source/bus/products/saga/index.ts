// Core
import { takeEvery, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Types
import * as types from '../types';

// Workers
import {
    fetchProducts,
    createNewProduct,
    deleteProduct,
    editProduct,
    incrementProductViews,
} from './workers';

function* watchFetchProducts(): SagaIterator {
    yield takeEvery(types.PRODUCTS_FETCH_ASYNC, fetchProducts);
}

function* watchCreateNewProduct(): SagaIterator {
    yield takeEvery(types.PRODUCTS_CREATE_ITEM_ASYNC, createNewProduct);
}

function* watchEditProduct(): SagaIterator {
    yield takeEvery(types.PRODUCTS_EDIT_ITEM_ASYNC, editProduct);
}

function* watchDeleteProduct(): SagaIterator {
    yield takeEvery(types.PRODUCTS_DELETE_ITEM_ASYNC, deleteProduct);
}

function* watchIncrementProductViews(): SagaIterator {
    yield takeEvery(types.PRODUCTS_INCREMENT_ITEM_VIEWS_ASYNC, incrementProductViews);
}

export function* watchProducts(): SagaIterator {
    yield all([
        call(watchFetchProducts),
        call(watchCreateNewProduct),
        call(watchEditProduct),
        call(watchDeleteProduct),
        call(watchIncrementProductViews),
    ]);
}
