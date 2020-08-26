// Core
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hooks
import { useSelectorTogglers } from '../../bus/togglers';
import { useSelectorCart } from '../../bus/cart';
import { useProductsFindOneById } from '../../bus/products';
import { useSelectorUi } from '../../bus/ui';

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
    const { _id: _idFromUrl } = useParams<{ _id: string }>();
    const incrementProductViewsAsync = useIncrementProductViews();
    const isProductsFetching = useSelectorTogglers().isProductsFetching;
    const cart = useSelectorCart();
    const isProductInCart = cart.includes(_idFromUrl);
    const product = useProductsFindOneById(_idFromUrl);
    const isProductViewed = useSelectorUi().viewedProducts.includes(_idFromUrl);

    useEffect(() => {
        _idFromUrl && product && !isProductViewed && incrementProductViewsAsync(_idFromUrl);
    }, []);

    if (isProductsFetching) {
        return <div>Loading...</div>;
    }

    return (
        <S.ProductPageContainer>
            <nav>
                <Button onClick = { () => history.push('/') }>{t('ProductPage.toMainPage')}</Button>
                <h1>{product ? product.title : 'No such product exist'}</h1>
                <div style = {{ width: '110px' }} />
            </nav>
            {
                product && (
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
