// Instruments
import * as types from './types';

export const ordersFetchAsync = (): types.OrdersActionTypes => ({
    type: types.ORDERS_FETCH_ASYNC,
});

export const fill = (orders: types.Orders): types.OrdersFillAction => ({
    type:    types.ORDERS_FILL,
    payload: orders,
});

export const createOrderAsync = (body: types.CreateOrderBody): types.OrdersCreateItemAsyncAction => ({
    type:    types.ORDERS_CREATE_ITEM_ASYNC,
    payload: body,
});

export const createOrderSync = (order: types.Order): types.OrdersCreateItemSyncAction => ({
    type:    types.ORDERS_CREATE_ITEM_SYNC,
    payload: order,
});

export const editOrderAsync = (body: types.EditOrderBody, _id: string): types.OrdersEditItemAsyncAction => ({
    type:    types.ORDERS_EDIT_ITEM_ASYNC,
    payload: {
        body,
        _id,
    },
});

export const editOrderSync = (editedOrder: types.Order): types.OrdersEditItemSyncAction => ({
    type:    types.ORDERS_EDIT_ITEM_SYNC,
    payload: editedOrder,
});
