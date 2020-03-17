// Eslint
/* eslint-disable react/jsx-closing-tag-location */

// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import { OrdersGallery, OrderModal } from '../../components';

// Elements
import { Button } from '../../elements';

// Styles
import S from './styles';

const OrdersPage = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const orders = useSelector(({ orders }) => orders);

    const reducedOrders = orders.reduce((accOrders, order) => {
        const images = order.orderedProducts.map(({ image }) => image);

        return [ ...accOrders, { ...order, images }];
    }, []);

    return (
        <S.OrdersContainer>
            <Switch>
                <Route
                    path = '/orders/:hash'
                    render = { () => (
                        <OrderModal />
                    ) }
                />
            </Switch>
            <nav>
                <Button onClick = { () => history.push('/') }>{t('OrdersPage.back')}</Button>
                <h1>{t('OrdersPage.orders')}</h1>
                <div style = {{ width: '60px' }} />
            </nav>
            <OrdersGallery orders = { reducedOrders }/>
        </S.OrdersContainer>
    );
};

export default OrdersPage;
