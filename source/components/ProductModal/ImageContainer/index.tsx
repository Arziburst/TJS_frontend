// Core
import React, { FC } from 'react';

// Elements
import { Image } from '../../../elements';

// Styles
import S from './styles';

// Svg
import { elementsSvg } from '../../../assets';

type PropTypes = {
    isActive?: boolean;
    imageUrl?: string;
    setImageForm: Function;
    deleteHandler?: any;
}

export const ImageContainer: FC<PropTypes> = ({
    isActive = false,
    imageUrl = '',
    setImageForm,
    deleteHandler,
}) => (
    <S.ImageContainer onClick = { () => setImageForm(imageUrl) }>
        <Image previewImage = { imageUrl } />
        <h2>
            <S.Circle isActive = { isActive }>
                {elementsSvg.CircleIcon()}
            </S.Circle>
            {
                isActive && (
                    <S.Success>
                        {isActive && elementsSvg.SuccessIcon()}
                    </S.Success>
                )
            }
        </h2>
        {
            deleteHandler && (
                <S.Delete onClick = { deleteHandler }>
                    {elementsSvg.DeleteIcon()}
                </S.Delete>
            )
        }
    </S.ImageContainer>
);
