// Core
import { SagaIterator } from 'redux-saga';
import { takeEvery, all, call } from 'redux-saga/effects';

// Instruments
import * as types from '../types';

import {
    callFetchGalleryWorker,
    callUpdateGalleryWorker,
    callDeleteGalleryItemWorker,
} from './workers';

function* watchFetchGallery(): SagaIterator {
    yield takeEvery(types.GALLERY_FETCH_ASYNC, callFetchGalleryWorker);
}

function* watchUpdateGallery(): SagaIterator {
    yield takeEvery(types.GALLERY_UPDATE_ASYNC, callUpdateGalleryWorker);
}

function* watchDeleteGalleryItem(): SagaIterator {
    yield takeEvery(types.GALLERY_DELETE_ITEM_ASYNC, callDeleteGalleryItemWorker);
}

export function* watchGallery(): SagaIterator {
    yield all([
        call(watchFetchGallery),
        call(watchUpdateGallery),
        call(watchDeleteGalleryItem),
    ]);
}
