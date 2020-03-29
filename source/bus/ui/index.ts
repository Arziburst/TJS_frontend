// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../hooks';

// Actions
import {
    setProductsFilterState,
    setCartModalState,
} from './actions';

export const useProductsFilter = () => {
    const dispatch = useDispatch();

    return {
        productsFilterState:    useSelector(({ ui }) => ui.type),
        setProductsFilterState: (type: string) => dispatch(setProductsFilterState(type)),
    };
};

export const useCartModal = () => {
    const dispatch = useDispatch();

    const isCartModalExist = useSelector(({ ui }) => ui.isCartModalExist);
    const setCartModalStateAction = (state: boolean) => dispatch(setCartModalState(state));

    return {
        isCartModalExist,
        setCartModalStateAction,
    };
};
