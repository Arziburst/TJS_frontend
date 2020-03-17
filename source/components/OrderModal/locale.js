export const OrderModal = {
    en: {
        translation: {
            OrderModal: {
                order:       'Order',
                total:       'Total',
                orderInfo:   'Information about order:',
                phone:       'Phone:',
                comment:     'Comment:',
                statusInput: {
                    title: 'Choose a new order status:',
                    hint:  'Select the status corresponding to the order status.',
                },
                statusOptionsArray: [
                    [ 0, 'Canceled' ],
                    [ 1, 'In progress' ],
                    [ 2, 'Accepted' ],
                    [ 3, 'Closed' ],
                ],
                close:   'Close',
                loading: 'Loading',
                save:    'Save',
            },
        },
    },
    ru: {
        translation: {
            OrderModal: {
                order:       'Заказ',
                total:       'Общая сумма',
                orderInfo:   'Информация о заказе:',
                phone:       'Телефон:',
                comment:     'Комментарий:',
                statusInput: {
                    title: 'Выберете новый статус заказа:',
                    hint:  'Выберете статус соответствующий состоянию заказа.',
                },
                statusOptionsArray: [
                    [ 0, 'Отменен' ],
                    [ 1, 'В обработке' ],
                    [ 2, 'Принят' ],
                    [ 3, 'Закрыт' ],
                ],
                close:   'Закрыть',
                loading: 'Загрузка',
                save:    'Сохранить',
            },
        },
    },
};
