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
        editOrderAsync:  (body: EditOrderBody, _id: string) => dispatch(editOrderAsync(body, _id)),
        isOrderFetching: useSelectorTogglers().isOrderFetching,
    };
};

export const useOrdersFindMany = () => useSelector(({ orders }) => orders);

export const useOrdersFindOneByid = (_id: string) => useSelector<Order | undefined>(({ orders }) => {
    return orders.find((order) => order._id === _id);
});

