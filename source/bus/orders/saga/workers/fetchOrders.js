// Actions
import { orderActions } from '../../actions';

// Api
import { ordersFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callFetchOrdersWorker () {
    yield makeRequest({
        fetcher:     ordersFetcher,
        togglerType: 'isOrdersFetching',
        fill:        orderActions.fill,
    });
}
