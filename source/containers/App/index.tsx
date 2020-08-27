// Core
import React, { useMemo, useEffect, FC } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// Components
import { Toolbar, Footer, CartModal, CartButton } from '../../components';

import { Spinner } from '../../elements';

// Pages
import {
    MainPage,
    ProductPage,
    OrdersPage,
    AboutUsPage,
} from '../../pages';

// Hooks
import { useInitialize } from '../../bus/profile';
import { useCartModal, useLoadedProducts } from '../../bus/ui';
import { useOrdersFindMany } from '../../bus/orders';
import { useLocalStorage } from '../../hooks';

// Theme
import { themes, ThemesKeys } from '../../theme';

// Styles
import S from './styles';
import G from '../../assets/globalStyles';

export const App: FC = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const { isInitialized, isAuthenticated } = useInitialize();
    const [ isWelcomeComplete ] = useLocalStorage('isWelcomeComplete', false);
    const { isAllProductsLoaded } = useLoadedProducts();
    const [ themeName, setThemeName ] = useLocalStorage<ThemesKeys>('theme', 'darkTheme');

    const { isCartModalExist } = useCartModal();
    const ordersLength = useOrdersFindMany().length;

    useEffect(() => {
        !isWelcomeComplete && history.push('/about-us');
    }, []);

    const theme = useMemo(() => themes[ themeName ], [ themeName ]);

    return (
        <ThemeProvider theme = { theme }>
            <G.GlobalReset />
            <G.GlobalFonts />
            {
                isInitialized && (
                    <>
                        {
                            isAllProductsLoaded && (
                                <S.SpinnerContainer>
                                    <Spinner
                                        absolute
                                        text = { t('App.spinnerText') }
                                        timeout = { 0 }
                                    />
                                </S.SpinnerContainer>
                            )
                        }
                        <S.AppContainer>
                            <ToastContainer
                                autoClose = { 3000 }
                                closeButton = { false }
                                draggable = { false }
                                position = 'top-center'
                            />
                            {
                                isCartModalExist && <CartModal />
                            }
                            <CartButton />
                            <Toolbar
                                setThemeName = { setThemeName }
                                themeName = { themeName }
                            />
                            <Switch>
                                {
                                    isAuthenticated && ordersLength !== 0 && (
                                        <Route
                                            component = { OrdersPage }
                                            path = '/orders'
                                        />
                                    )
                                }
                                <Route
                                    component = { AboutUsPage }
                                    path = '/about-us'
                                />
                                <Route
                                    component = { ProductPage }
                                    path = '/product/:_id'
                                />
                                <Route
                                    component = { MainPage }
                                    path = '/'
                                />
                            </Switch>
                            <Footer />
                        </S.AppContainer>
                    </>
                )
            }
        </ThemeProvider>
    );
};
