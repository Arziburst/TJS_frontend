// Core
import React from 'react';
import { useHistory } from 'react-router-dom';
import Masonry from 'react-masonry-component';

// Components
import { ProductGalleryItem } from './ProductGalleryItem';

// Hooks
import { useCartActions } from '../../bus/cart';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets';

export const ProductGallery = ({ products, role }) => {
    const history = useHistory();
    const { addToCart, removeFromCart } = useCartActions();

    const stopPropagation = (event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    const redirectHandler = (hash) => history.push(`/product/${hash}`);
    const editProductRedirectHandler = (hash) => history.push(`/edit-product/${hash}`);

    return (
        <S.MasonryContainer>
            <S.Wrapper>
                <Masonry options = {{
                    transitionDuration: 500,
                }}>
                    {
                        role === 'admin' && (
                            <S.CreateNewProductContainer onClick = { () => history.push('/create-product') }>
                                {appSvg.createNewProductIcon()}
                            </S.CreateNewProductContainer>
                        )
                    }
                    {
                        products.map((product) => (
                            <ProductGalleryItem
                                { ...product }
                                addToCart = { addToCart }
                                editProductRedirectHandler = { editProductRedirectHandler }
                                key = { product.hash }
                                previewImage = { product.images[ 0 ] }
                                redirectHandler = { redirectHandler }
                                removeFromCart = { removeFromCart }
                                role = { role }
                                stopPropagation = { stopPropagation }
                            />
                        ))
                    }
                </Masonry>
            </S.Wrapper>
        </S.MasonryContainer>
    );
};
