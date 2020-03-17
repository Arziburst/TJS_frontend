// Core
import React from 'react';
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
const types = [ 'image/png', 'image/jpeg', 'image/gif' ];

export const GalleryPopup = ({ setGalleryPopupState, imageForm, setImageForm }) => {
    const { t } = useTranslation();
    const {
        gallery,
        updateGalleryAsync,
        deleteGalleryItemAsync,
        fetchingToggler,
        updatingToggler,
    } = useGalleryActions();

    const onChange = (event) => {
        const errors = [];
        let formData = new FormData();
        const files = Array.from(event.target.files);

        files.forEach((file, i) => {
            if (types.every((type) => file.type !== type)) {
                errors.push(`'${file.type}' is not a supported format`);
            }

            if (file.size > 1000000) {
                errors.push(`Name:'${file.name}', size:'${file.size}' is too large, please pick a smaller file`);
            }

            formData.append(i, file);
        });

        if (errors.length > 0) {
            return errors.forEach((error) => toast.error(error));
        }

        updateGalleryAsync(formData);
    };

    const deleteHandler = (event, imageUrl, public_id) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();

        if (updatingToggler) {
            return;
        }

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
                                deleteHandler = { (event) => deleteHandler(event, imageUrl, public_id) }
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

