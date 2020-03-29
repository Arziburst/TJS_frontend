// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Types
import { ExtendedProduct } from '../../bus/products/types';

// Components
import { ProductNav, ProductGallery, ProductModal, RegistrationModal } from '../../components';

// Hooks
import { useSelectorToggler } from '../../bus/togglers';
import { useProductsFilter } from '../../bus/ui';
import { useSelector } from '../../hooks';

// Styles
import S from './styles';

type ReducedProducts = Array<ExtendedProduct & { isProductInCart: boolean; isProductViewed: boolean }>

const MainPage = () => {
    const { t } = useTranslation();
    const { productsFilterState, setProductsFilterState } = useProductsFilter();
    const isProductsFetching = useSelectorToggler('isProductsFetching');
    const { products, role, cart, viewedProducts } = useSelector(({ products, profile, cart, ui }) => ({
        products,
        role:           profile.role,
        viewedProducts: ui.viewedProducts,
        cart,
    }));

    const reducedProductsHandler = products.reduce((acc: ReducedProducts, product: ExtendedProduct) => {
        const isProductInCart = cart.includes(product.hash);
        const isProductViewed = viewedProducts.includes(product.hash);

        if (productsFilterState === 'All' || productsFilterState === product.type) {
            return [ ...acc, { ...product, isProductInCart, isProductViewed }];
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
