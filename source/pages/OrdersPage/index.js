// Core
import React from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '../../components';

const LoadableComponent = Loadable({
    loader:  () => import(/* webpackChunkName: "OrdersPage" */ './Component.js'),
    loading: Loading,
    delay:   1000,
});

export const OrdersPage = () => <LoadableComponent />;