import React, { useEffect, useState } from 'react'
import './Catalogue.css'
import CatalogueFilter from './CatalogueFilter'
import { FilterHelpMe } from './Filters'

export function CatalogueContainer({ children }) {
  return <div className='catalogueContainer'>{children}</div>
}

export function CatalogueFlex({ children }) {
  return <div className="catalogueFlex">{children}</div>
}

export function CatalogueFilterContainer({ children }) {
  return <div className="catalogueFilterContainer">{children}</div>
}

export function CatalogueProductContainer({ children }) {
  return <div className="catalogueProductContainer">{children}</div>
}

function CataloguePageContent() {

  return (
    <div>
      <CatalogueContainer>
        <CatalogueFlex>
          <CatalogueFilterContainer>
            <CatalogueFilter />
            <FilterHelpMe />
          </CatalogueFilterContainer>
          <CatalogueProductContainer />
        </CatalogueFlex>
      </CatalogueContainer>
    </div>
  )
}

export default CataloguePageContent