// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Elements
import { FilterButton } from '../../elements';

// Redux
import { useProductsFilter } from '../../bus/ui';

// Styles
import { Container, TypesContainer, PaginationContainer } from './styles';

export const ProductNav: FC = () => {
    const { t } = useTranslation();
    const {
        productsFilterState: { productType, pageNumber, pagesCount },
        setProductsTypeFilter, setProductsPageNumberFilter,
    } = useProductsFilter();
    const ProductsTypes: Array<[string, string]> = t('FilterTypes', { returnObjects: true });

    return (
        <Container>
            <TypesContainer>
                {
                    ProductsTypes.map(([ key, value ], index) => (
                        <FilterButton
                            isActive = { productType === key }
                            key = { index }
                            style = { index !== ProductsTypes.length - 1 ? { marginRight: 2 } : {} }
                            onClick = { () => setProductsTypeFilter(key) }>
                            {value}
                        </FilterButton>
                    ))
                }
            </TypesContainer>
            <PaginationContainer>
                <FilterButton
                    style = {{ marginRight: 2 }}
                    onClick = { () => void setProductsPageNumberFilter(pageNumber - 1) }>
                    {'<'}
                </FilterButton>
                <FilterButton
                    style = {{ marginRight: 2 }}
                    onClick = { () => {
                        setProductsPageNumberFilter(1);
                        setProductsTypeFilter('All');
                    } }>
                    {pageNumber} - {pagesCount} / {t('FilterReset')}
                </FilterButton>
                <FilterButton onClick = { () => void setProductsPageNumberFilter(pageNumber + 1) }>
                    {'>'}
                </FilterButton>
            </PaginationContainer>
        </Container>
    );
};
