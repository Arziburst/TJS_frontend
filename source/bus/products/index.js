import { useSelector, useDispatch } from 'react-redux';

import {
    createNewProductAsync,
    deleteProductAsync,
    editProductAsync,
    incrementProductViewsAsync,
} from './actions';

export const useCreateNewProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (body) => dispatch(createNewProductAsync(body));
    const toggler = useSelector(({ togglers }) => togglers.isProductFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

export const useDeleteProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (producthash) => dispatch(deleteProductAsync(producthash));
    const toggler = useSelector(({ togglers }) => togglers.isProductFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

export const useEditProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (productHash, editedProduct) => dispatch(editProductAsync(productHash, editedProduct));
    const toggler = useSelector(({ togglers }) => togglers.isProductFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

export const useIncrementProductViews = () => {
    const dispatch = useDispatch();

    return (productHash) => dispatch(incrementProductViewsAsync(productHash));
};
