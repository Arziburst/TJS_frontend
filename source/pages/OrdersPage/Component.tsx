// Core
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Types
import { Order } from '../../bus/orders/types';

// Hooks
import { useOrdersFindMany } from '../../bus/orders';

// Components
import { OrdersGallery, OrderModal } from '../../components';

// Elements
import { Button } from '../../elements';

// Styles
import S from './styles';

type ReducedOrders = Array<Order & { images: Array<string> }>;

const OrdersPage = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const orders = useOrdersFindMany();

    const reducedOrders = orders.reduce((accOrders, order) => {
        const images = order.orderedProducts.map(({ image }) => image);

        return [ ...accOrders, { ...order, images }];
    }, [] as ReducedOrders);

    return (
        <S.OrdersContainer>
            <Switch>
                <Route
                    path = '/orders/:_id'
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
            <OrdersGallery reducedOrders = { reducedOrders }/>
        </S.OrdersContainer>
    );
};

export default OrdersPage;
