// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../hooks';

// Actions
import {
    setProductsFilterState,
    setCartModalState,
} from './actions';

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

