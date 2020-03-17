// Core
import React from 'react';

// Styles
import S from './styles';

// Svg
import { elementsSvg } from '../../../assets';

export const ImageContainer = ({
    isActive = false,
    imageUrl = '',
    setImageForm,
    deleteHandler = false,
}) => (
    <S.ImageContainer onClick = { () => setImageForm(imageUrl) }>
        <img src = { imageUrl } />
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
