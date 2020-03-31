// Core
// import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Types
import { OrdersEditItemAsyncAction, Order } from '../../types';

// Actions
import { editOrderSync } from '../../actions';

// Api
import { editOrderFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callEditOrderWorker({ payload }: OrdersEditItemAsyncAction) {
    const result: Order | undefined = yield makeRequest<Order>({
        fetcher:           editOrderFetcher(payload),
        togglerType:       'isOrderFetching',
        fill:              editOrderSync,
        successSideEffect: () => push('/orders'),
    });

    if (result) {
        toast.success('Order edited successfully!');
    }
}
