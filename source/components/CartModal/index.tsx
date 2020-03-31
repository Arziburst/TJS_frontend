// Core
import React from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '..';

const LoadableComponent = Loadable({
    loader:  () => import(/* webpackChunkName: "CartModal" */ './Component'),
    loading: Loading,
    delay:   1000,
});

export const CartModal = () => <LoadableComponent />;
