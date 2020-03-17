// Actions
import { orderActions } from '../../actions';

// Api
import { ordersFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callFetchOrdersWorker () {
    yield makeRequestWithSpinner({
        fetcher:     ordersFetcher,
        togglerType: 'isOrdersFetching',
        fill:        orderActions.fill,
    });
}
