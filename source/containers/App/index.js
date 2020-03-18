// Core
import React, { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

// Components
import { Toolbar, Footer, CartModal, CartButton } from '../../components';

// Pages
import { MainPage, ProductPage, OrdersPage } from '../../pages';

// Hooks
import { useInitialize } from '../../bus/profile';
import { useCartModal } from '../../bus/ui';
import { useLocalStorage } from '../../hooks';

// Theme
import { themes } from '../../theme';

// Styles
import S from './styles';
import G from '../../assets/globalStyles';

const App = () => {
    const { isInitialized } = useInitialize();
    const { isCartModalExist } = useCartModal();
    const [ themeName, setThemeName ] = useLocalStorage('theme', 'darkTheme');
    const { ordersLength, isAuthenticated } = useSelector(({ orders, togglers }) => ({
        ordersLength:    orders.length,
        isAuthenticated: togglers.isAuthenticated,
    }));

    const theme = useMemo(() => themes[ themeName ], [ themeName ]);

    return (
        <ThemeProvider theme = { theme }>
            <G.GlobalReset />
            <G.GlobalFonts />
            {
                isInitialized && (
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
                                component = { ProductPage }
                                path = '/product/:hash'
                            />
                            <Route
                                component = { MainPage }
                                path = '/'
                            />
                        </Switch>
                        <Footer />
                    </S.AppContainer>
                )}
        </ThemeProvider>
    );
};

export default App;