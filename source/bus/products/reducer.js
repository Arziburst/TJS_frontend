// Types
import types from './types';

const initialState = [];

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.PRODUCTS_FILL:
            return payload;

        case types.CREATE_NEW_PRODUCT_SYNC:
            return [ payload, ...state ];

        case types.EDIT_PRODUCT_SYNC:
            return state.map((product) => {
                if (product.hash === payload.hash) {
                    return {
                        ...product,
                        ...payload,
                    };
                }

                return product;
            });

        case types.DELETE_PRODUCT_SYNC:
            return state.filter(({ hash }) => hash !== payload);

        default: return state;
    }
};
