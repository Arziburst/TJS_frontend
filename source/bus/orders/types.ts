export type OrderedProduct = {
    _id: string;
    hash: string;
    image: string;
    price: number;
}

export type OrderedProducts = Array<OrderedProduct>;

export type Order = {
    total: number;
    email: string;
    comment: string;
    status: number;
    phone: string;
    orderedProducts: OrderedProducts;
    created: Date;
    hash: string;
};

export type Orders = Array<Order>;

export type CreateOrderBody = {
    phone: string;
    comment: string;
    orderedProducts: Array<string>;
}

export type EditOrderBody = {
    status: number;
 };

// FETCH & FILL
export const ORDERS_FETCH_ASYNC = 'ORDERS_FETCH_ASYNC';
type OrdersFetchingAction = {
    type: typeof ORDERS_FETCH_ASYNC;
};

export const ORDERS_FILL = 'ORDERS_FILL';
export type OrdersFillAction = {
    type: typeof ORDERS_FILL;
    payload: Orders;
};

// CREATE
export const ORDERS_CREATE_ITEM_ASYNC = 'ORDERS_CREATE_ITEM_ASYNC';
export type OrdersCreateItemAsyncAction = {
    type: typeof ORDERS_CREATE_ITEM_ASYNC;
    payload: CreateOrderBody;
};

export const ORDERS_CREATE_ITEM_SYNC = 'ORDERS_CREATE_ITEM_SYNC';
export type OrdersCreateItemSyncAction = {
    type: typeof ORDERS_CREATE_ITEM_SYNC;
    payload: Order;
};

// EDIT
export const ORDERS_EDIT_ITEM_ASYNC = 'ORDERS_EDIT_ITEM_ASYNC';
export type OrdersEditItemAsyncAction = {
    type: typeof ORDERS_EDIT_ITEM_ASYNC;
    payload: {
        body: EditOrderBody;
        hash: string;
    };
};

export const ORDERS_EDIT_ITEM_SYNC = 'ORDERS_EDIT_ITEM_SYNC';
export type OrdersEditItemSyncAction = {
    type: typeof ORDERS_EDIT_ITEM_SYNC;
    payload: Order;
};

export type OrdersActionTypes =
    // FETCH & FILL
    | OrdersFetchingAction
    | OrdersFillAction
    // CREATE
    | OrdersCreateItemAsyncAction
    | OrdersCreateItemSyncAction
    // EDIT
    | OrdersEditItemAsyncAction
    | OrdersEditItemSyncAction;
