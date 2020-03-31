// Core
import React, { memo, FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

// Styles
import S from './styles';

type PropTypes = {
    images: Array<string>;
}

export const ProductCarausel: FC<PropTypes> = memo(({ images }) => {
    const isImageNotAlone = images.length > 1;

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
                    images.map((url, index) => (
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
