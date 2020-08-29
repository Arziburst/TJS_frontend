// Core
import React, { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';

// Elements
import { Image } from '../../../elements';

// Helpers
import { discountHandler } from '../../../helpers';

// Svg
import { appSvg } from '../../../assets';

// Styles
import S from './styles';

type PropTypes = {
    _id: string,
    previewImage: string,
    redirectHandler: Function,
    role: string,
    editProductRedirectHandler: Function,
    stopPropagation: Function,
    addToCart: Function,
    removeFromCart: Function,
    isProductInCart: boolean,
    isProductViewed: boolean,
    price: number,
    views: number,
    discount: number,
    isProductNew: boolean,
    onLoad: Function
}

export const ProductGalleryItem: FC<PropTypes> = memo(({
    _id = '',
    previewImage = '',
    redirectHandler,
    role = 'customer',
    editProductRedirectHandler,
    stopPropagation,
    addToCart,
    removeFromCart,
    isProductInCart = false,
    isProductViewed = false,
    price = 1000,
    views = 0,
    discount = 0,
    isProductNew = false,
    onLoad,
}) => {
    const { t } = useTranslation();
    const result = discountHandler(price, discount);

    return (
        <S.ProductContainer onClick = { () => {
            redirectHandler(_id);
            window.scrollTo({ top: 0 });
        } }>
            <S.Hover>
                <h1>{t('ProductGalleryItem.tapToOpen')}</h1>
                {
                    !isProductInCart && (
                        <S.AddToCartButton onClick = { (event) => {
                            stopPropagation(event);
                            addToCart(_id);
                        } }>
                            {appSvg.cartIcon()}
                        </S.AddToCartButton>
                    )
                }
                {
                    !isProductViewed && (
                        <S.Views isProductViewed = { isProductViewed }>
                            {appSvg.viewIcon()}
                            <p>{views}</p>
                        </S.Views>
                    )
                }
            </S.Hover>
            {
                role === 'admin' && (
                    <S.EditButton onClick = { (event) => {
                        stopPropagation(event);
                        editProductRedirectHandler(_id);
                    } }>
                        {appSvg.editProductIcon()}
                    </S.EditButton>
                )
            }
            {
                isProductNew && (
                    <S.New>
                        {t('ProductGalleryItem.new')}!
                    </S.New>
                )
            }
            {
                discount > 0 && (
                    <S.DiscountContainer>
                        - {discount}%!
                    </S.DiscountContainer>
                )
            }
            {
                isProductInCart && (
                    <S.AddToCartButton onClick = { (event) => {
                        stopPropagation(event);
                        removeFromCart(_id);
                    } }>
                        {appSvg.crossIcon()}
                    </S.AddToCartButton>
                )
            }
            {
                isProductViewed && (
                    <S.Views isProductViewed = { isProductViewed }>
                        {appSvg.viewIcon()}
                        <p>{views}</p>
                    </S.Views>
                )
            }
            <S.Price>
                {discount > 0 && <span>{price} ₴</span>}
                <p>{result} ₴</p>
            </S.Price>
            <Image
                previewImage = { previewImage }
                onComplete = { onLoad }
            />
        </S.ProductContainer>
    );
});
