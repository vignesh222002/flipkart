import React from 'react'
import './Catalogue.css'
import { CatalogueHead, CatalogueProductCard, CatalogueProductDisplay } from './Products'

function CatalogueProduct() {
    return (
        <>
            <CatalogueHead />
            <CatalogueProductDisplay>
                <CatalogueProductCard />
                <CatalogueProductCard />
                <CatalogueProductCard />
                <CatalogueProductCard />
                <CatalogueProductCard />
                <CatalogueProductCard />
            </CatalogueProductDisplay>
        </>
    )
}

export default CatalogueProduct