// Core
import { toast } from 'react-toastify';

// Actions
import { orderActions } from '../../actions';
import { clearCart } from '../../../cart/actions';

// Api
import { createOrderFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callCreateOrderWorker ({ payload }) {
    const result = yield makeRequest({
        fetcher:           createOrderFetcher(payload),
        togglerType:       'isOrderFetching',
        fill:              orderActions.createOrderSync,
        successSideEffect: clearCart,
    });

    if (result) {
        toast.success('Заказ успешно принят в обработку. Менеджер свяжется с вами в рабочие часы магазина.');
    }
}
