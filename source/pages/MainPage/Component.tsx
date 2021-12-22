// Core
import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import { ProductNav, ProductGallery, ProductModal, RegistrationModal } from '../../components';

// Elements
import { Button } from '../../elements';

// Hooks
import { useSelectorCart } from '../../bus/cart';
import { useSelectorTogglers } from '../../bus/togglers';
import { useProductsFilter, useSelectorUi } from '../../bus/ui';
import { useProductsFindMany } from '../../bus/products';
import { useSelectorProfile } from '../../bus/profile';

// Constants
import { PRODUCTS_PAGE_SIZE } from '../../constants';

// Styles
import S from './styles';

// Types
import { ExtendedProduct } from '../../bus/products/types';

type ReducedProducts = Array<ExtendedProduct & {
    isProductInCart: boolean;
    isProductViewed: boolean
}>;

const MainPage: FC = () => {
    const { t } = useTranslation();
    const {
        productsFilterState: { pageNumber, pagesCount, productType },
        setProductsPageNumberFilter,
    } = useProductsFilter();
    const isProductsFetching = useSelectorTogglers().isProductsFetching;
    const products = useProductsFindMany();
    const role = useSelectorProfile().role;
    const viewedProducts = useSelectorUi().viewedProducts;
    const cart = useSelectorCart();

    const reducedProductsHandler = products.reduce((acc: ReducedProducts, product: ExtendedProduct) => {
        const isProductInCart = cart.includes(product._id);
        const isProductViewed = viewedProducts.includes(product._id);

        if (productType === 'All' || productType === product.type) {
            return [
                ...acc,
                {
                    ...product,
                    isProductInCart,
                    isProductViewed,
                },
            ];
        }

        return acc;
    }, [])
        .sort((x, y) => (x.available === y.available) ? 0 : x.available ? -1 : 1) // eslint-disable-line no-nested-ternary
        .slice((pageNumber - 1) * PRODUCTS_PAGE_SIZE, pageNumber * PRODUCTS_PAGE_SIZE);

    return (
        <S.MainContainer>
            <Switch>
                <Route
                    path = '/registration'
                    render = { () => (
                        <RegistrationModal />
                    ) }
                />
                {
                    role === 'admin' && (
                        <>
                            <Route
                                path = '/create-product'
                                render = { () => <ProductModal headerTitle = { t('ProductModal.headerTitleCreateNewProduct') } /> }
                            />
                            <Route
                                path = '/edit-product/:_id'
                                render = { () => <ProductModal headerTitle = { t('ProductModal.headerTitleEditProduct') } /> }
                            />
                        </>
                    )
                }
            </Switch>
            <ProductNav />
            {
                !isProductsFetching && (
                    <ProductGallery
                        products = { reducedProductsHandler }
                        role = { role }
                    />
                )
            }
            {
                pageNumber !== pagesCount && (
                    <Button
                        styles = {{ marginTop: 5 }}
                        onClick = { () => void setProductsPageNumberFilter(pageNumber + 1) }>
                        {t('MainPage.nextPage')}
                    </Button>
                )
            }
        </S.MainContainer>
    );
};

export default MainPage;
