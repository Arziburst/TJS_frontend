// Core
import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Types
import { ExtendedProduct } from '../../bus/products/types';

// Components
import { ProductNav, ProductGallery, ProductModal, RegistrationModal } from '../../components';

// Hooks
import { useSelectorCart } from '../../bus/cart';
import { useSelectorTogglers } from '../../bus/togglers';
import { useProductsFilter, useSelectorUi } from '../../bus/ui';
import { useProductsFindMany } from '../../bus/products';
import { useSelectorProfile } from '../../bus/profile';


// Styles
import S from './styles';

type ReducedProducts = Array<ExtendedProduct & {
    isProductInCart: boolean;
    isProductViewed: boolean
}>;

const MainPage: FC = () => {
    const { t } = useTranslation();
    const { productsFilterState, setProductsFilterState } = useProductsFilter();
    const isProductsFetching = useSelectorTogglers().isProductsFetching;
    const products = useProductsFindMany();
    const role = useSelectorProfile().role;
    const viewedProducts = useSelectorUi().viewedProducts;
    const cart = useSelectorCart();

    const reducedProductsHandler = products.reduce((acc: ReducedProducts, product: ExtendedProduct) => {
        const isProductInCart = cart.includes(product.hash);
        const isProductViewed = viewedProducts.includes(product.hash);

        if (productsFilterState === 'All' || productsFilterState === product.type) {
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
    }, []);

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
                                path = '/edit-product/:hash'
                                render = { () => <ProductModal headerTitle = { t('ProductModal.headerTitleEditProduct') } /> }
                            />
                        </>
                    )
                }
            </Switch>
            <ProductNav
                productsFilterState = { productsFilterState }
                setProductsFilterState = { setProductsFilterState }
            />
            {
                !isProductsFetching && (
                    <ProductGallery
                        products = { reducedProductsHandler }
                        role = { role }
                    />
                )
            }
        </S.MainContainer>
    );
};

export default MainPage;
