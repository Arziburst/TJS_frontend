// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Types
import { ExtendedProduct, Products } from '../../bus/products/types';
import { AppState } from '../../init/rootReducer';

// Components
import { ProductNav, ProductGallery, ProductModal, RegistrationModal } from '../../components';

// Hooks
import { useProductsFilter } from '../../bus/ui';

// Styles
import S from './styles';

type SelectorType = {
  products: Products;
  isProductsFetching: boolean;
  role: string;
  cart: string[];
  viewedProducts: string[];
};

type ReducedProducts = Array<ExtendedProduct & { isProductInCart: boolean; isProductViewed: boolean }>

const MainPage = () => {
    const { t } = useTranslation();
    const { productsFilterState, setProductsFilterState } = useProductsFilter();
    const {
        products,
        isProductsFetching,
        role,
        cart,
        viewedProducts,
    } = useSelector<AppState, SelectorType>(
        ({ products, togglers, profile, cart, ui }) => ({
            products,
            isProductsFetching: togglers.isProductsFetching,
            role:               profile.role,
            viewedProducts:     ui.viewedProducts,
            cart,
        }),
    );

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
