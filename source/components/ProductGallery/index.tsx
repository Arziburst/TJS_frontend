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
import { useLoadedProducts } from '../../bus/ui';

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
    const { setLoadedProductId } = useLoadedProducts();
    const { addToCart, removeFromCart } = useCartActions();

    const stopPropagation = (event: any) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    const redirectHandler = (_id: string) => history.push(`/product/${_id}`);
    const editProductRedirectHandler = (_id: string) => history.push(`/edit-product/${_id}`);

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
                                key = { product._id }
                                previewImage = { product.images[ 0 ] }
                                redirectHandler = { redirectHandler }
                                removeFromCart = { removeFromCart }
                                role = { role }
                                stopPropagation = { stopPropagation }
                                onLoad = { () => void setLoadedProductId(product._id) }
                            />
                        ))
                    }
                </Masonry>
            </S.Wrapper>
        </S.MasonryContainer>
    );
};
