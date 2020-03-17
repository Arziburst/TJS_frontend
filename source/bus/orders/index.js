// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { orderActions } from './actions';

export const useOrdersFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderActions.fetchAsync());
    }, [ dispatch ]);

    const { orders, toggler } = useSelector(({ orders, togglers }) => ({
        orders,
        toggler: togglers.isOrdersFetching,
    }));

    return {
        orders,
        toggler,
    };
};

export const useCreateOrder = () => {
    const dispatch = useDispatch();

    const handlerAsync = (body) => dispatch(orderActions.createOrderAsync(body));
    const toggler = useSelector(({ togglers }) => togglers.isOrderFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

export const useOrderEdit = () => {
    const dispatch = useDispatch();

    const handlerAsync = (body, hash) => dispatch(orderActions.editOrderAsync(body, hash));
    const toggler = useSelector(({ togglers }) => togglers.isOrderFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

