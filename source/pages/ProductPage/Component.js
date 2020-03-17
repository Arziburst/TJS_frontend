// Eslint
/* eslint-disable react/jsx-closing-tag-location */

// Core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Actions
import { useIncrementProductViews } from '../../bus/products';

// Components
import { ProductCarausel, ProductInfo } from '../../components';

// Elements
import { Button } from '../../elements';

// Styles
import S from './styles';

const ProductPage = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const { hash: hashFromUrl } = useParams();
    const incrementProductViewsAsync = useIncrementProductViews();
    const {
        product,
        isProductsFetching,
        isProductInCart,
        isProductViewed,
    } = useSelector(({ products, cart, ui, togglers }) => ({
        product:            products.find(({ hash }) => hash === hashFromUrl),
        isProductsFetching: togglers.isProductsFetching,
        isProductInCart:    cart.includes(hashFromUrl),
        isProductViewed:    ui.viewedProducts.includes(hashFromUrl),
    }));

    useEffect(() => {
        // eslint-disable-next-line no-undefined
        product !== undefined && !isProductViewed && incrementProductViewsAsync(hashFromUrl);
    }, []);

    if (isProductsFetching) {
        return <div>Loading...</div>;
    }

    return (
        <S.ProductPageContainer>
            <nav>
                <Button onClick = { () => history.push('/') }>{t('ProductPage.toMainPage')}</Button>
                <h1>{product ? product.title : 'No such product exist'}</h1>
                <div style = {{width: '110px'}} />
            </nav>
            {
                // eslint-disable-next-line no-undefined
                product !== undefined && (
                    <S.InfoContainer>
                        <S.Wrapper>
                            <ProductCarausel images = { product.images } />
                            <ProductInfo
                                { ...product }
                                isProductInCart = { isProductInCart }
                            />
                        </S.Wrapper>
                    </S.InfoContainer>
                )
            }
        </S.ProductPageContainer>
    );
};

export default ProductPage;
