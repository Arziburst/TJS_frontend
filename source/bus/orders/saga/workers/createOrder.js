// Core
import { toast } from 'react-toastify';

// Actions
import { orderActions } from '../../actions';
import { cartActions } from '../../../cart/actions';

// Api
import { createOrderFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callCreateOrderWorker ({ payload }) {
    const result = yield makeRequestWithSpinner({
        fetcher:           createOrderFetcher(payload),
        togglerType:       'isOrderFetching',
        fill:              orderActions.createOrderSync,
        successSideEffect: cartActions.clearCart,
    });

    if (result) {
        toast.success('Заказ успешно принят в обработку. Менеджер свяжется с вами в рабочие часы магазина.');
    }
}
