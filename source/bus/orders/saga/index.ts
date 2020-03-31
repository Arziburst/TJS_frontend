// Core
import { SagaIterator } from 'redux-saga';
import { takeEvery, all, call } from 'redux-saga/effects';

// Instruments
import * as types from '../types';

import {
    callFetchOrdersWorker,
    callCreateOrderWorker,
    callEditOrderWorker,
} from './workers';

function* watchFetchOrders(): SagaIterator {
    yield takeEvery(types.ORDERS_FETCH_ASYNC, callFetchOrdersWorker);
}

function* watchCreateOrder(): SagaIterator {
    yield takeEvery(types.ORDERS_CREATE_ITEM_ASYNC, callCreateOrderWorker);
}

function* watchEditOrder(): SagaIterator {
    yield takeEvery(types.ORDERS_EDIT_ITEM_ASYNC, callEditOrderWorker);
}

export function* watchOrders(): SagaIterator {
    yield all([
        call(watchFetchOrders),
        call(watchCreateOrder),
        call(watchEditOrder),
    ]);
}
