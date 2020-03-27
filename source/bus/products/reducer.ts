// Types
import { Reducer } from 'redux';
import { ProductsActionTypes, Products } from './types';
import * as types from './types';

const initialState: Products = [];

export const productsReducer: Reducer<Products, ProductsActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCTS_FILL:
            return action.payload;

        case types.PRODUCTS_CREATE_ITEM_SYNC:
            return [ action.payload, ...state ];

        case types.PRODUCTS_EDIT_ITEM_SYNC:
            return state.map((product) => {
                if (product.hash === action.payload.hash) {
                    return {
                        ...product,
                        ...action.payload,
                    };
                }

                return product;
            });

        case types.PRODUCTS_DELETE_ITEM_SYNC:
            return state.filter(({ hash }) => hash !== action.payload);

        default:
            return state;
    }
};
