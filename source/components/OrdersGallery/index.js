// Core
import React from 'react';
import Masonry from 'react-masonry-component';
import { useHistory } from 'react-router-dom';

// Components
import { OrdersGalleryItem } from './OrdersGalleryItem';

// Styles
import S from './styles';

export const OrdersGallery = ({ orders }) => {
    const history = useHistory();

    const redirectHandler = (hash) => history.push(`/orders/${hash}`);

    return (
        <S.MasonryContainer>
            <S.Wrapper>
                <Masonry options = {{
                    transitionDuration: 500,
                }}>
                    {
                        orders.map((order) => (
                            <OrdersGalleryItem
                                key = { order.hash }
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
