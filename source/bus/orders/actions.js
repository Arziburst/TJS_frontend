// Instruments
import types from './types';

export const orderActions = Object.freeze({
    fetchAsync: () => ({
        type: types.FETCH_ORDERS_ASYNC,
    }),

    fill: (orders) => ({
        type:    types.ORDERS_FILL,
        payload: orders,
    }),

    createOrderAsync: (body) => ({
        type:    types.CREATE_ORDER_ASYNC,
        payload: body,
    }),

    createOrderSync: (order) => ({
        type:    types.CREATE_ORDER_SYNC,
        payload: order,
    }),

    editOrderAsync: (editedOrder, editedOrderHash) => ({
        type:    types.EDIT_ORDER_ASYNC,
        payload: {
            body: editedOrder,
            hash: editedOrderHash,
        },
    }),

    editOrderSync: (editedOrder) => ({
        type:    types.EDIT_ORDER_SYNC,
        payload: editedOrder,
    }),
});
