// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Actions
import { useCartActions } from '../../bus/cart';

// Elements
import { Button } from '../../elements';

// Helpers
import { discountHandler } from '../../helpers';

// Styles
import S from './styles';

// Constants
import { WHITE, PINK } from '../../constants';

export const ProductInfo = (props) => {
    const { t } = useTranslation();
    const { addToCart } = useCartActions();
    const result = discountHandler(props.price, props.discount);
    const isDiscount = props.discount > 0;

    return (
        <S.ProductInfo>
            <main>
                <S.Title>
                    <h2>{t('ProductInfo.productName')}:</h2>
                    <p>{props.title}</p>
                </S.Title>
                <S.Description>
                    <h2>{t('ProductInfo.productDescription')}:</h2>
                    <p>{props.description}</p>
                </S.Description>
                {
                    props.weight > 0 && (
                        <S.Weight>
                            <h2>{t('ProductInfo.productWeight')}:</h2>
                            <p>{props.weight} {t('ProductInfo.grams')}</p>
                        </S.Weight>
                    )
                }
                <S.Available>
                    {
                        props.available
                            ? <p>{t('ProductInfo.available')}.</p>
                            : <p>{t('ProductInfo.unavailable')}.</p>
                    }
                </S.Available>
            </main>
            <footer>
                <S.Price isDiscount = { isDiscount }>
                    <div>
                        {isDiscount && (
                        <>
                            <h3>{props.price} ₴</h3>
                            <h3>-{props.discount} %</h3>
                        </>
                        )}
                        <h2>{t('ProductInfo.price')}: {result} ₴</h2>
                    </div>
                </S.Price>
                <Button
                    disabled = { props.isProductInCart }
                    styles = { () => ({
                        backgroundColor: PINK,
                        color:           WHITE,
                    }) }
                    onClick = { () => addToCart(props.hash) }>
                    {
                        props.isProductInCart
                            ? t('ProductInfo.inCart')
                            : t('ProductInfo.addToCart')
                    }
                </Button>
            </footer>
        </S.ProductInfo>
    );
};
