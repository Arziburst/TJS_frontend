
// Core
import React, { memo, FC } from 'react';
import { Link } from 'react-router-dom';

// Helpers
import { discountHandler } from '../../../helpers';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../../assets';
type Event = React.MouseEvent<HTMLElement, MouseEvent>;

type PropTypes = {
    images: Array<string>;
    price: number;
    discount: number;
    removeHandler: (event: Event) => void;
    hash: string;
    closeCartModal: () => void;
}

export const CartItem: FC<PropTypes> = memo(({ images, price, discount, removeHandler, hash, closeCartModal }) => {
    const result = discountHandler(price, discount);

    return (
        <S.CartItemContainer onClick = { closeCartModal }>
            <Link to = { `/product/${hash}` }>
                <img src = { images[ 0 ] } />
            </Link>
            <S.Price>
                {discount > 0 && <span>{price} ₴</span>}
                <p>{result} ₴</p>
            </S.Price>
            <S.Cross onClick = { removeHandler }>
                {appSvg.crossIcon()}
            </S.Cross>
        </S.CartItemContainer>
    );
});
