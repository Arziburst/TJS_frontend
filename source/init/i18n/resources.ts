// Core
import merge from 'lodash.merge';

// Root
import { App } from '../../containers/App/locale';

// Pages Locales
import { MainPage } from '../../pages/MainPage/locale';
import { ProductPage } from '../../pages/ProductPage/locale';
import { OrdersPage } from '../../pages/OrdersPage/locale';
import { AboutUsPage } from '../../pages/AboutUsPage/locale';

// Components Locales
import { UserMenu } from '../../components/UserMenu/locale';
import { Toolbar } from '../../components/Toolbar/locale';
import { RegistrationModal } from '../../components/RegistrationModal/locale';
import { ProductModal } from '../../components/ProductModal/locale';
import { ProductNav } from '../../components/ProductNav/locale';
import { OrderModal } from '../../components/OrderModal/locale';
import { CartModal } from '../../components/CartModal/locale';
import { ProductInfo } from '../../components/ProductInfo/locale';
import { OrdersGallery } from '../../components/OrdersGallery/locale';
import { ProductGallery } from '../../components/ProductGallery/locale';
import { Footer } from '../../components/Footer/locale';

export const resources = merge(
    // Root
    App,
    // Pages Locales
    MainPage,
    ProductPage,
    OrdersPage,
    AboutUsPage,
    // Components Locales
    UserMenu,
    Toolbar,
    RegistrationModal,
    ProductModal,
    ProductNav,
    OrderModal,
    CartModal,
    ProductInfo,
    OrdersGallery,
    ProductGallery,
    Footer,
);
