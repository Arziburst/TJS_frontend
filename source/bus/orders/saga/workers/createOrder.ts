// Core
import { toast } from 'react-toastify';

// Types
import { OrdersCreateItemAsyncAction, Order } from '../../types';

// Actions
import { createOrderSync } from '../../actions';
import { clearCart } from '../../../cart/actions';

// Api
import { createOrderFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callCreateOrderWorker({ payload }: OrdersCreateItemAsyncAction) {
    const result: Order | undefined = yield makeRequest<Order>({
        fetcher:           createOrderFetcher(payload),
        togglerType:       'isOrderFetching',
        fill:              createOrderSync,
        successSideEffect: clearCart,
    });

    if (result) {
        toast.success('Заказ успешно принят в обработку. Менеджер свяжется с вами в рабочие часы магазина.');
    }
}
