// Core
import React, { FC, DetailedHTMLProps, Ref, useState } from 'react';

interface ImageProps extends DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    ref?: Ref<HTMLImageElement>;
    onComplete?: Function;
    previewImage: string;
}

// Assets
import { images } from '../assets';

export const Image: FC<ImageProps> = ({ onComplete, previewImage, ...otherProps }) => {
    const [ isImageCorrupted, setImageAsCorrupted ] = useState(false);

    return (
        isImageCorrupted
            ? (
                <img
                    { ...otherProps }
                    src = { images.fallback }
                    onError = { () => onComplete && void onComplete() }
                    onLoad = { () => onComplete && void onComplete() }
                />
            )
            : (
                <img
                    { ...otherProps }
                    src = { previewImage }
                    onError = { () => void setImageAsCorrupted(true) }
                    onLoad = { () => onComplete && void onComplete() }
                />
            )
    );
};

