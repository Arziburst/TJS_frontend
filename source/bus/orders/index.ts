// Core
import { useDispatch } from 'react-redux';

// Types
import { CreateOrderBody, EditOrderBody, Order } from './types';

// Hooks
import { useSelector } from '../../hooks';
import { useSelectorTogglers } from '../togglers';

// Actions
import { createOrderAsync, editOrderAsync } from './actions';

export const useCreateOrder = () => {
    const dispatch = useDispatch();

    return {
        createOrderAsync: (body: CreateOrderBody) => dispatch(createOrderAsync(body)),
        isOrderFetching:  useSelectorTogglers().isOrderFetching,
    };
};

export const useOrderEdit = () => {
    const dispatch = useDispatch();

    return {
        editOrderAsync:  (body: EditOrderBody, hash: string) => dispatch(editOrderAsync(body, hash)),
        isOrderFetching: useSelectorTogglers().isOrderFetching,
    };
};

export const useOrdersFindMany = () => useSelector(({ orders }) => orders);

export const useOrdersFindOneByHash = (hash: string) => useSelector<Order | undefined>(({ orders }) => {
    return orders.find((order) => order.hash === hash);
});

