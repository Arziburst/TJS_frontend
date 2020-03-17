// Core
import merge from 'webpack-merge';

// Children locale
import { GalleryPopup } from './GalleryPopup/locale';

export const ProductModal = merge(
    GalleryPopup,
    {
        en: {
            translation: {
                ProductModal: {
                    headerTitleCreateNewProduct: 'Create new product',
                    headerTitleEditProduct:      'Edit product',
                    deleteConfirm:               'Confirm product removal!',
                    titleInput:                  {
                        title: 'Enter title:',
                        hint:  'The minimum length is 3 characters. Example: A very beautiful brooch.',
                    },
                    descriptionInput: {
                        title: 'Enter description:',
                        hint:  'The minimum length is 3 characters. Example: The decoration is comfortable and made of natural materials.',
                    },
                    typeInput: {
                        title:     'Choose the correct type for the product:',
                        typeArray: [
                            [ 'Brooch', 'Brooch' ],
                            [ 'Earrings', 'Earrings' ],
                            [ 'Bracelets', 'Bracelets' ],
                            [ 'Necklace', 'Necklace' ],
                        ],
                    },
                    weightInput: {
                        title: 'Enter the product weight in grams:',
                        hint:  'Any integer value. Unit of measure: grams. If 0 is entered, the weight will not be displayed in the product.',
                    },
                    priceInput: {
                        title: 'Enter product price in UAH/₴:',
                        hint:  'Any number is greater than 0, the currency is UAH/₴. Example: 1000.',
                    },
                    discountInput: {
                        title: 'Enter discount %:',
                        hint:  'The number that indicates the percentage discount, from 0% to 50%.Example: 25.',
                    },
                    imageForm: 'Image',
                    addImages: 'Add images from Gallery',
                    gallery:   'Gallery',
                    delete:    'Delete',
                    edit:      'Edit',
                    create:    'Create',
                },
            },
        },
        ru: {
            translation: {
                ProductModal: {
                    headerTitleCreateNewProduct: 'Создать новый продукт',
                    headerTitleEditProduct:      'Изменить продукт',
                    deleteConfirm:               'Подтвердите удаление продукта!',
                    titleInput:                  {
                        title: 'Введите название:',
                        hint:  'Минимальная длинна 3 символа. Пример: Очень красивое украшение.',
                    },
                    descriptionInput: {
                        title: 'Введите описание:',
                        hint:  'Минимальная длинна 3 символа. Пример: Украшение удобное, и выполенено из натуральных материалов.',
                    },
                    typeInput: {
                        title:     'Выберете подходящий тип для изделия:',
                        typeArray: [
                            [ 'Brooch', 'Брошь' ],
                            [ 'Earrings', 'Серьги' ],
                            [ 'Bracelets', 'Браслет' ],
                            [ 'Necklace', 'Ожерелье' ],
                        ],
                    },
                    weightInput: {
                        title: 'Введите вес продукта в граммах:',
                        hint:  'Любое целочисленное значение. Единица измерения: граммы. Если введено 0, вес не отобразится в продукте.',
                    },
                    priceInput: {
                        title: 'Введите цену изделия в ГРН/₴:',
                        hint:  'Любое число больше 0, валюта гривны. Пример: 1000.',
                    },
                    discountInput: {
                        title: 'Введите скидку %:',
                        hint:  'Число которое указывает скидку в процентах, от 0% до 50%. Пример: 25.',
                    },
                    imageForm: 'Изображение',
                    addImages: 'Добавить изображения из Галереи',
                    gallery:   'Галерея',
                    delete:    'Удал.',
                    edit:      'Изменить',
                    create:    'Создать',
                },
            },
        },
    },
);
