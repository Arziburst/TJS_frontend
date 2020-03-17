// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Instruments
import types from '../types';

import {
    callFetchGalleryWorker,
    callUpdateGalleryWorker,
    callDeleteGalleryItemWorker,
} from './workers';

function* watchFetchGallery() {
    yield takeEvery(types.FETCH_GALLERY_ASYNC, callFetchGalleryWorker);
}

function* watchUpdateGallery() {
    yield takeEvery(types.UPDATE_GALLERY_ASYNC, callUpdateGalleryWorker);
}

function* watchDeleteGalleryItem() {
    yield takeEvery(types.DELETE_GALLERY_ITEM_ASYNC, callDeleteGalleryItemWorker);
}

export function* watchGallery() {
    yield all([
        call(watchFetchGallery),
        call(watchUpdateGallery),
        call(watchDeleteGalleryItem),
    ]);
}
