// Types
import { Orders } from '../../types';

// Actions
import { fill } from '../../actions';

// Api
import { ordersFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callFetchOrdersWorker () {
    yield makeRequest<Orders>({
        fetcher:     ordersFetcher,
        togglerType: 'isOrdersFetching',
        fill:        fill,
    });
}
