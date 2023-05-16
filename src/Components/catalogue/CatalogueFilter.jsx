import React, { useEffect } from 'react'
import './Catalogue.css'
import { useDispatch, useSelector } from 'react-redux'
import { didUpdateF_Assured, updateF_Assured } from '../../state/filter/Filter'
import { FilterFLipkartAssured } from './Filters'


function CatalogueFilter() {
  let filter = useSelector((state) => state.filter)
  let dispatch = useDispatch()

  function handleFilter(e) {
    let name = e.target.name
    if(name == "F_Assured") {
      (filter.F_Assured) ? (dispatch(didUpdateF_Assured())) : (dispatch(updateF_Assured()))
    }
  }

  // useEffect(() => console.log(filter), [filter])

  return (
    <div>
      <div className="catalogueFilterContent">
        <section className="catalogueFilterHead"><span>Filters</span></section>
        <FilterFLipkartAssured filter={filter} handleFilter={handleFilter} />
        <section className='catalogueFilterFAssuredContainer'>

        </section>
      </div>
    </div>
  )
}

export default CatalogueFilter