// Core
import { useSelector, useDispatch } from 'react-redux';

// Types
import { AppState } from '../../init/rootReducer';

// Actions
import {
    setProductsFilterState,
    setCartModalState,
} from './actions';

// const useSelectorUi = (props) => useSelector(({ ui }) => ui.type);

export const useProductsFilter = () => {
    const dispatch = useDispatch();

    return {
        productsFilterState:    useSelector<AppState, string>(({ ui }) => ui.type),
        setProductsFilterState: (type: string) => dispatch(setProductsFilterState(type)),
    };
};

export const useCartModal = () => {
    const dispatch = useDispatch();

    const isCartModalExist = useSelector<AppState, boolean>(({ ui }) => ui.isCartModalExist);
    const setCartModalStateAction = (state: boolean) => dispatch(setCartModalState(state));

    return {
        isCartModalExist,
        setCartModalStateAction,
    };
};
