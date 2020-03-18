// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchProfile } from '../bus/profile/saga';
import { watchProducts } from '../bus/products/saga';
import { watchOrders } from '../bus/orders/saga';
import { watchGallery } from '../bus/gallery/saga';

export function* rootSaga(): Generator {
    yield all([
        watchProfile(),
        watchProducts(),
        watchOrders(),
        watchGallery(),
    ]);
}
