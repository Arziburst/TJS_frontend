// Core
import React, { useEffect, useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hooks
import { useForm, useImagesForm } from '../../hooks';
import { useProductsActions, useProductsFindOneById } from '../../bus/products';

// Components
import { Modal } from '../index';
import { ImageContainer } from './ImageContainer';
import { GalleryPopup } from './GalleryPopup';

// Elements
import { Button, Input, ModalHeader, Select, Textarea } from '../../elements';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets';

// Constants
const formInnitialState = {
    title:       '',
    description: '',
    type:        'Brooch',
    weight:      0,
    price:       0,
    discount:    0,
    available:   true,
};

type FormTypes = typeof formInnitialState;

type PropTypes = {
    headerTitle: string;
}

export const ProductModal: FC<PropTypes> = ({ headerTitle }) => {
    const { t } = useTranslation();
    const { _id: _idFromUrl } = useParams<{ _id: string }>();
    const { createNewProductAsync, editProductAsync, deleteProductAsync, toggler } = useProductsActions();
    const [ galleryPopupState, setGalleryPopupState ] = useState<boolean>(false);
    const [ form, setForm, setNewInnitialValuesForm ] = useForm<FormTypes>(formInnitialState);
    // TODO
    const [ imageForm, setImageForm, setInnitialValuesImageForm ] = useImagesForm([]);

    const product = useProductsFindOneById(_idFromUrl);

    useEffect(() => {
        if (!product) {
            return;
        }

        setNewInnitialValuesForm({
            title:       product.title || '',
            description: product.description || '',
            type:        product.type || 'Brooch',
            weight:      product.weight || 0,
            price:       product.price || 0,
            discount:    product.discount || 0,
            available:   product.available,
        });

        setInnitialValuesImageForm(product.images);
    }, [ product ]);

    const titleValidation = form.title.length >= 3;
    const descriptionValidation = form.description.length >= 3;
    const typeValidation = Boolean(form.type);
    const weightValidation = form.weight >= 0;
    const priceValidation = form.price > 0 && /^[0-9]+$/.test(`${form.price}`);
    const discountValidation = form.discount >= 0 && form.discount <= 50 && /^[0-9]+$/.test(`${form.discount}`);
    const imagesValidation = imageForm.length > 0;
    const validation = titleValidation && descriptionValidation
        && typeValidation && priceValidation && weightValidation
        && discountValidation && imagesValidation;

    const createProductHandler = () => validation && void createNewProductAsync({
        ...form,
        images: imageForm,
    });

    const editProductHandler = () => validation && void editProductAsync(_idFromUrl, {
        ...form,
        images: imageForm,
    });

    const deleteProductHandler = () => {
        // eslint-disable-next-line no-alert
        const isConfirmed = window.confirm(t('ProductModal.deleteConfirm'));
        if (isConfirmed) {
            deleteProductAsync(_idFromUrl);
        }
    };

    // TODO galleryPopupState delete span
    return (
        <Modal>
            {
                galleryPopupState
                    ? (
                        <GalleryPopup
                            imageForm = { imageForm }
                            setGalleryPopupState = { setGalleryPopupState }
                            setImageForm = { setImageForm }
                        />
                    )
                    : <span style = {{ display: 'none' }} />
            }
            <ModalHeader>{headerTitle}</ModalHeader>
            <S.Main>
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('ProductModal.titleInput.hint') }
                    isValid = { titleValidation }
                    name = 'title'
                    title = { t('ProductModal.titleInput.title') }
                    value = { form.title }
                />
                <Textarea
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('ProductModal.descriptionInput.hint') }
                    isValid = { descriptionValidation }
                    name = 'description'
                    title = { t('ProductModal.descriptionInput.title') }
                    value = { form.description }
                />
                <Select
                    disabled = { toggler }
                    handler = { setForm }
                    isValid = { typeValidation }
                    name = 'type'
                    optionsArray = { t('ProductModal.typeInput.typeArray', { returnObjects: true }) }
                    title = { t('ProductModal.typeInput.title') }
                    value = { form.type }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('ProductModal.weightInput.hint') }
                    isValid = { weightValidation }
                    name = 'weight'
                    title = { t('ProductModal.weightInput.title') }
                    type = 'number'
                    value = { form.weight }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('ProductModal.priceInput.hint') }
                    isValid = { priceValidation }
                    name = 'price'
                    title = { t('ProductModal.priceInput.title') }
                    type = 'number'
                    value = { form.price }
                />
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('ProductModal.discountInput.hint') }
                    isValid = { discountValidation }
                    name = 'discount'
                    title = { t('ProductModal.discountInput.title') }
                    type = 'number'
                    value = { form.discount }
                />
                <S.ProductImages>
                    {
                        imagesValidation
                            ? imageForm.map((imageUrl) => (
                                <ImageContainer
                                    isActive
                                    imageUrl = { imageUrl }
                                    key = { imageUrl }
                                    setImageForm = { setImageForm }
                                />
                            ))
                            : (
                                <S.ImagesNotFound onClick = { () => setGalleryPopupState(true) }>
                                    <h2>{t('ProductModal.addImages')}</h2>
                                    {appSvg.cameraIcon()}
                                </S.ImagesNotFound>
                            )
                    }
                </S.ProductImages>
            </S.Main>
            <S.Footer>
                <Button
                    toggler = { toggler }
                    onClick = { () => setGalleryPopupState(true) }>
                    {t('ProductModal.gallery')}
                </Button>
                {
                    _idFromUrl && product
                        ? (
                            <>
                                <Button
                                    toggler = { toggler }
                                    onClick = { deleteProductHandler }>
                                    {t('ProductModal.delete')}
                                </Button>
                                <Button
                                    disabled = { !validation }
                                    toggler = { toggler }
                                    onClick = { editProductHandler }>
                                    {t('ProductModal.edit')}
                                </Button>
                            </>
                        )
                        : (
                            <Button
                                disabled = { !validation }
                                toggler = { toggler }
                                onClick = { createProductHandler }>
                                {t('ProductModal.create')}
                            </Button>
                        )
                }
            </S.Footer>
        </Modal>
    );
};
