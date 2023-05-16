import React, { useEffect, useState } from 'react'
import './Catalogue.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllFilter } from '../../state/filter/Filter'
import { FilterCardCancelButton, FilterDiscount, FilterFLipkartAssured, FilterRating } from './Filters'


function CatalogueFilter() {
  let filter = useSelector((state) => state.filter)
  let [filterActive, setFilterActive] = useState(false)
  let dispatch = useDispatch()

  useEffect(() => {
    setFilterActive(filter.F_Assured || !(!filter.discount) || !(!filter.rating))
  },[filterActive, filter])

  function handleClearAll() {
    dispatch(clearAllFilter())
  }

  // useEffect(() => console.log("filterActive", filterActive), [filterActive])
  // useEffect(() => console.log(filter), [filter])

  return (
    <div>
      <div className="catalogueFilterContent">
        <section className="catalogueFilterHeadContainer">
          <div className="catalogueFilterHead"><span>Filters</span></div>
          <div className="catalogueFilterHeadClearAll" onClick={() => handleClearAll()}><span>Clear all</span></div>
          {filterActive &&
            <div className="catalogueFilterDisplayContainer">
              {filter.F_Assured && <FilterCardCancelButton name="F_Assured" content="Plus (FAssured)" />}
              {filter.discount && <FilterCardCancelButton name="discount" content={`${filter.discount}% or more`} />}
              {filter.rating && <FilterCardCancelButton name="rating" content={`${filter.rating}★ & above`} />}
            </div>}
        </section>
        <FilterFLipkartAssured />
        <FilterDiscount />
        <FilterRating />
      </div>
    </div>
  )
}

export default CatalogueFilter