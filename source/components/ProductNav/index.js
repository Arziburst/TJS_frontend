// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import S from './styles';

export const ProductNav = ({ productsFilterState, setProductsFilterState }) => {
    const { t } = useTranslation();

    return (
        <S.ProductNavContainer>
            {
                t('ProductNav', { returnObjects: true }).map(([ key, value ]) => (
                    <S.ProductTypeButton
                        isActive = { productsFilterState === key }
                        key = { `ProductNav-${key}` }
                        onClick = { () => setProductsFilterState(key) }>
                        { value }
                    </S.ProductTypeButton>
                ))
            }
        </S.ProductNavContainer>
    );
};
