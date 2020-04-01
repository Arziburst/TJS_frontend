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
            productHash: string,
            editedProduct: Product,
        ) => dispatch(editProductAsync(productHash, editedProduct)),

        deleteProductAsync: (producthash: string) => dispatch(deleteProductAsync(producthash)),

        toggler: useSelectorTogglers().isProductFetching,
    };
};

export const useIncrementProductViews = () => {
    const dispatch = useDispatch();

    return (productHash: string) => dispatch(incrementProductViewsAsync(productHash));
};

export const useProductsFindMany = () => useSelector(({ products }) => products);

export const useProductsFindOneByHash = (hash: string) => useProductsFindMany().find((product) => product.hash === hash);
