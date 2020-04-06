// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';

// Types
import { Product } from './types';

// Hooks
import { useSelectorTogglers } from '../togglers';

// Actions
import {
    createNewProductAsync,
    deleteProductAsync,
    editProductAsync,
    incrementProductViewsAsync,
} from './actions';

export const useProductsActions = () => {
    const dispatch = useDispatch();

    return {
        createNewProductAsync: (body: Product) => dispatch(createNewProductAsync(body)),

        editProductAsync: (
            productId: string,
            editedProduct: Product,
        ) => dispatch(editProductAsync(productId, editedProduct)),

        deleteProductAsync: (productId: string) => dispatch(deleteProductAsync(productId)),

        toggler: useSelectorTogglers().isProductFetching,
    };
};

export const useIncrementProductViews = () => {
    const dispatch = useDispatch();

    return (productId: string) => dispatch(incrementProductViewsAsync(productId));
};

export const useProductsFindMany = () => useSelector(({ products }) => products);

export const useProductsFindOneById = (_id: string) => useProductsFindMany().find((product) => product._id === _id);
