// Types
import { Reducer } from 'redux';
import { Orders, OrdersActionTypes } from './types';
import { ResetToInitialStateAction, RESET_TO_INNITIAL_STATE } from '../ui/types';
import * as types from './types';

const initialState: Orders = [];

export const ordersReducer: Reducer<Orders, OrdersActionTypes | ResetToInitialStateAction> = (state = initialState, action) => {
    switch (action.type) {
        case types.ORDERS_FILL:
            return action.payload;

        case types.ORDERS_CREATE_ITEM_SYNC:
            return [ ...state, action.payload ];

        case types.ORDERS_EDIT_ITEM_SYNC:
            return state.map((order) => order._id === action.payload._id ? action.payload : order);

        case RESET_TO_INNITIAL_STATE:
            return initialState;

        default:
            return state;
    }
};
