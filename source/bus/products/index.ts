// Core
import { useDispatch } from 'react-redux';

// Types
import { Product } from './types';

// Hooks
import { useSelectorToggler } from '../togglers';

// Actions
import {
    createNewProductAsync,
    deleteProductAsync,
    editProductAsync,
    incrementProductViewsAsync,
} from './actions';

export const useCreateNewProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (body: Product) => dispatch(createNewProductAsync(body));
    const toggler = useSelectorToggler('isProductFetching');

    return [
        handlerAsync,
        toggler,
    ];
};


export const useEditProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (
        productHash: string,
        editedProduct: Product,
    ) => dispatch(editProductAsync(productHash, editedProduct));

    const toggler = useSelectorToggler('isProductFetching');

    return [
        handlerAsync,
        toggler,
    ];
};

export const useDeleteProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (producthash: string) => dispatch(deleteProductAsync(producthash));
    const toggler = useSelectorToggler('isProductFetching');

    return [
        handlerAsync,
        toggler,
    ];
};

export const useIncrementProductViews = () => {
    const dispatch = useDispatch();

    return (productHash: string) => dispatch(incrementProductViewsAsync(productHash));
};
