/* eslint-disable react/jsx-indent */
// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../../assets';

type PropTypes = {
    ordersLength: number;
    activeOrdersLength: number;
    toggler: boolean;
    toggleDropDownActive: Function
};

export const Orders: FC<PropTypes> = ({ ordersLength, activeOrdersLength, toggler, toggleDropDownActive }) => {
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
        <S.OrdersContainer onClick = { orderRedirectHandler }>
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
