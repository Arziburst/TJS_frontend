// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Instruments
import types from '../types';

import {
    callFetchOrdersWorker,
    callCreateOrderWorker,
    callEditOrderWorker,
} from './workers';

function* watchFetchOrders() {
    yield takeEvery(types.FETCH_ORDERS_ASYNC, callFetchOrdersWorker);
}

function* watchCreateOrder() {
    yield takeEvery(types.CREATE_ORDER_ASYNC, callCreateOrderWorker);
}

function* watchEditOrder() {
    yield takeEvery(types.EDIT_ORDER_ASYNC, callEditOrderWorker);
}

export function* watchOrders() {
    yield all([
        call(watchFetchOrders),
        call(watchCreateOrder),
        call(watchEditOrder),
    ]);
}
