// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

// Redux
import { useProductsFindMany } from '../products';
import { useSelectorTogglers, togglerCreatorAction } from '../togglers';

// Hooks
import { useSelector } from '../../hooks';

// Actions
import {
    setProductsTypeFilter,
    setProductsPageNumberFilterAction,
    setCartModalState,
    setLoadedProductIdAction,
    deleteLoadedProductIdAction,
} from './actions';

// Constants
import { PRODUCTS_PAGE_SIZE } from '../../constants';

export const useSelectorUi = () => useSelector(({ ui }) => ui);

export const useProductsFilter = () => {
    const dispatch = useDispatch();
    const { productType, pageNumber } = useSelectorUi();
    const pagesCount = Math.ceil(
        useProductsFindMany()
            .filter((product) => productType === 'All' || product.type === productType)
            .length / PRODUCTS_PAGE_SIZE,
    );

    const setProductsPageNumberFilter = (newProductPage: number) => {
        if (newProductPage <= 0 || newProductPage > pagesCount) {
            return;
        }

        if (pageNumber === newProductPage) {
            return;
        }

        dispatch(setProductsPageNumberFilterAction(newProductPage));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {
        productsFilterState: {
            productType,
            pageNumber,
            pagesCount,
        },
        setProductsTypeFilter: (newProductType: string) => {
            if (productType !== newProductType) {
                dispatch(setProductsTypeFilter(newProductType));
                window.scrollTo({ top: 0, behavior: "smooth" });
                pageNumber !== 1 && void setProductsPageNumberFilter(1);
            }
        },
        setProductsPageNumberFilter,
    };
};

export const useCartModal = () => {
    const dispatch = useDispatch();

    return {
        isCartModalExist:  useSelectorUi().isCartModalExist,
        setCartModalState: (state: boolean) => dispatch(setCartModalState(state)),
    };
};

export const useLoadedProducts = () => {
    const dispatch = useDispatch();
    const isAllProductsLoaded = useSelectorTogglers().isAllProductsLoaded;
    const { loadedProductIds, productType, pageNumber } = useSelectorUi();
    const visibleProductIds = useProductsFindMany()
        .filter((product) => productType === 'All' || product.type === productType)
        .slice((pageNumber - 1) * PRODUCTS_PAGE_SIZE, pageNumber * PRODUCTS_PAGE_SIZE)
        .map(({ _id }) => _id);

    const alreadyLoadedVisibleProductIds = _.intersection(visibleProductIds, loadedProductIds);
    const productsLoadingState = visibleProductIds.length === alreadyLoadedVisibleProductIds.length
        && visibleProductIds.every((_id) => loadedProductIds.includes(_id));

    useEffect(() => {
        if (isAllProductsLoaded !== productsLoadingState) {
            dispatch(togglerCreatorAction('isAllProductsLoaded', productsLoadingState));
        }
    }, [ productsLoadingState ]);

    return {
        isFirstLoading:     loadedProductIds.length <= PRODUCTS_PAGE_SIZE,
        isAllProductsLoaded,
        setLoadedProductId: (loadedProductId: string) => {
            if (!loadedProductIds.includes(loadedProductId)) {
                dispatch(setLoadedProductIdAction(loadedProductId));
            }
        },
        deleteLoadedProductId: (loadedProductId: string) => void dispatch(deleteLoadedProductIdAction(loadedProductId)),
    };
};

