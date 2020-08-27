// Core
import { useDispatch } from 'react-redux';

// Redux
import { useProductsFindMany } from '../products';
import { useSelectorTogglers, togglerCreatorAction } from '../togglers';

// Hooks
import { useSelector } from '../../hooks';

// Actions
import {
    setProductsFilterState,
    setCartModalState,
    setLoadedProductIdAction,
    deleteLoadedProductIdAction,
} from './actions';
import { useEffect } from 'react';

export const useSelectorUi = () => useSelector(({ ui }) => ui);

export const useProductsFilter = () => {
    const dispatch = useDispatch();

    return {
        productsFilterState:    useSelectorUi().type,
        setProductsFilterState: (type: string) => dispatch(setProductsFilterState(type)),
    };
};

export const useCartModal = () => {
    const dispatch = useDispatch();

    return {
        isCartModalExist:  useSelectorUi().isCartModalExist,
        setCartModalState: (state: boolean) => dispatch(setCartModalState(state)),
    };
};

export const useLoadedProductIds = () => useSelector(({ ui }) => ui.loadedProductIds);

export const useLoadedProducts = () => {
    const dispatch = useDispatch();
    const loadedProductIds = useLoadedProductIds();
    const isAllProductsLoaded = useSelectorTogglers().isAllProductsLoaded;
    const result = useProductsFindMany().every(({ _id }) => loadedProductIds.includes(_id));

    useEffect(() => {
        isAllProductsLoaded !== result && void togglerCreatorAction('isAllProductsLoaded', result);
    });


    return {
        isAllProductsLoaded,
        setLoadedProductId: (loadedProductId: string) => {
            if (!loadedProductIds.includes(loadedProductId)) {
                dispatch(setLoadedProductIdAction(loadedProductId));
            }
        },
        deleteLoadedProductId: (loadedProductId: string) => void dispatch(deleteLoadedProductIdAction(loadedProductId)),
    };
};

