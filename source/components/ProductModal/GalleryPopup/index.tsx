// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

// Hooks
import { useGalleryActions } from '../../../bus/gallery';

// Components
import { ImageContainer } from '../ImageContainer';

// Elements
import { Button, ModalHeader } from '../../../elements';

// Styles
import S from './styles';

// Constants
const types: Array<string> = [ 'image/png', 'image/jpeg', 'image/gif' ];

type PropTypes = {
    setGalleryPopupState: (value: boolean) => void;
    setImageForm: Function;
    imageForm: Array<string>;
}

export const GalleryPopup: FC<PropTypes> = ({ setGalleryPopupState, imageForm, setImageForm }) => {
    const { t } = useTranslation();
    const {
        gallery,
        updateGalleryAsync,
        deleteGalleryItemAsync,
        fetchingToggler,
        updatingToggler,
    } = useGalleryActions();

    const onChange = (event: any) => {
        const errors: Array<string> = [];
        let formData = new FormData();
        const files = Array.from(event.target.files);

        files.forEach((file: any, i) => {
            if (types.every((type) => file.type !== type)) {
                errors.push(`'${file.type}' is not a supported format`);
            }

            if (file.size > 1000000) {
                errors.push(`Name:'${file.name}', size:'${file.size}' is too large, please pick a smaller file`);
            }

            formData.append(`${i}`, file);
        });

        if (errors.length > 0) {
            return errors.forEach((error) => toast.error(error));
        }

        updateGalleryAsync(formData);
    };

    const deleteHandler = (event: any, imageUrl: string, public_id: string) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();

        if (updatingToggler) {
            return null;
        }

        // eslint-disable-next-line no-alert
        const isConfirmed = window.confirm('ПОДТВЕРДИТЕ ПОЛНОЕ УДАЛЕНИЕ!');

        if (isConfirmed) {
            imageForm.includes(imageUrl) && setImageForm(imageUrl);
            deleteGalleryItemAsync(public_id);
        }
    };

    if (fetchingToggler && (!gallery || gallery.length === 0)) {
        return <div>Loading...</div>;
    }

    return (
        <S.GalleryPopupContainer>
            <ModalHeader>{t('GalleryPopup.gallery')}</ModalHeader>
            <nav>
                {
                    updatingToggler
                        ? <div>Loading...</div>
                        : (
                            <input
                                multiple
                                type = 'file'
                                onChange = { onChange }
                            />
                        )
                }
                <Button onClick = { () => setGalleryPopupState(false) }>{t('GalleryPopup.close')}</Button>
            </nav>
            <main>
                <div>
                    {
                        gallery.map(({ imageUrl, public_id }) => (
                            <ImageContainer
                                deleteHandler = { (event: any) => deleteHandler(event, imageUrl, public_id) }
                                imageUrl = { imageUrl }
                                isActive = { imageForm.includes(imageUrl) }
                                key = { public_id }
                                setImageForm = { setImageForm }
                            />
                        ))
                    }
                </div>
            </main>
        </S.GalleryPopupContainer>
    );
};

