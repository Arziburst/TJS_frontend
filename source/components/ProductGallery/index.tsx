// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Masonry from 'react-masonry-component';

// PropTypes
import { ExtendedProduct } from '../../bus/products/types';

// Components
import { ProductGalleryItem } from './ProductGalleryItem';

// Hooks
import { useCartActions } from '../../bus/cart';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets';

type PropTypes = {
    products: Array<ExtendedProduct & {
        isProductInCart: boolean;
        isProductViewed: boolean
    }>;
    role: string
};

export const ProductGallery: FC<PropTypes> = ({ products, role }) => {
    const history = useHistory();
    const { addToCart, removeFromCart } = useCartActions();

    const stopPropagation = (event: any) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    const redirectHandler = (hash: string) => history.push(`/product/${hash}`);
    const editProductRedirectHandler = (hash: string) => history.push(`/edit-product/${hash}`);

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
