// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import S from './styles';

type PropTypes = {
    productsFilterState: string;
    setProductsFilterState: Function;
}

export const ProductNav: FC<PropTypes> = ({ productsFilterState, setProductsFilterState }) => {
    const { t } = useTranslation();
    const ProductsTypes: Array<[string, string]> = t('ProductNav', { returnObjects: true });

    return (
        <S.ProductNavContainer>
            {
                ProductsTypes.map(([ key, value ]) => (
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
