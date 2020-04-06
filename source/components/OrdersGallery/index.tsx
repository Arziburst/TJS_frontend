// Core
import React, { FC } from 'react';
import Masonry from 'react-masonry-component';
import { useHistory } from 'react-router-dom';

// Types
import { Order } from '../../bus/orders/types';

// Components
import { OrdersGalleryItem } from './OrdersGalleryItem';

// Styles
import S from './styles';

type PropTypes = {
    reducedOrders: Array<Order & { images: Array<string> }>
};

export const OrdersGallery: FC<PropTypes> = ({ reducedOrders }) => {
    const history = useHistory();

    const redirectHandler = (_id: string) => history.push(`/orders/${_id}`);

    return (
        <S.MasonryContainer>
            <S.Wrapper>
                <Masonry options = {{
                    transitionDuration: 500,
                }}>
                    {
                        reducedOrders.map((order) => (
                            <OrdersGalleryItem
                                key = { order._id }
                                { ...order }
                                redirectHandler = { redirectHandler }
                            />
                        ))
                    }
                </Masonry>
            </S.Wrapper>
        </S.MasonryContainer>
    );
};
