// Core
import React, { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';

// Styles
import S from './styles';

export const ProductCarausel = memo((props) => {
    const isImageNotAlone = props.images.length > 1;

    return (
        <S.ProductCarauselContainer>
            <Carousel
                autoPlay
                stopOnHover
                swipeable
                dynamicHeight = { false }
                infiniteLoop = { isImageNotAlone }
                interval = { 4500 }
                showIndicators = { isImageNotAlone }
                showStatus = { isImageNotAlone }
                showThumbs = { false }
                transitionTime = { 800 }>
                {
                    props.images.map((url, index) => (
                        <img
                            key = { `${index}-ProductCarausel` }
                            src = { url }
                        />
                    ))
                }
            </Carousel>
        </S.ProductCarauselContainer>
    );
});
