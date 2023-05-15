import './Catalogue.css'

export function CatalogueContainer({children}) {
  return <div className='catalogueContainer'>{children}</div>
}

export function CatalogueFlex({children}) {
  return <div className="catalogueFlex">{children}</div>
}

export function CatalogueFilterContainer({children}) {
  return <div className="catalogueFilterContainer">{children}</div>
}

export function CatalogueProductContainer({children}) {
  return <div className="catalogueProductContainer">{children}</div>
}