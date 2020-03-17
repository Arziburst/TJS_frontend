/* eslint-disable react/jsx-indent */
// Core
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../../assets';

export const Orders = ({ ordersLength, activeOrdersLength, toggler, toggleDropDownActive }) => {
    const history = useHistory();
    const { t } = useTranslation();
    const isOrdersExist = ordersLength !== 0;

    const orderRedirectHandler = () => {
        if (isOrdersExist) {
            history.push('/orders');
            toggleDropDownActive(false);
        }
    };

    return (
        <S.OrdersContainer
            isOrdersExist = { isOrdersExist }
            onClick = { orderRedirectHandler }>
            <div>{appSvg.orderIcon()}</div>
            <section>
                {
                    toggler || !isOrdersExist
                        ? <p>{t('Orders.noOrders')}.</p>
                        : <>
                            <p>{activeOrdersLength} {t('Orders.activeOrders')}.</p>
                            <p>{t('Orders.clickToOpen')}</p>
                          </>
                }
            </section>
        </S.OrdersContainer>
    );
};
