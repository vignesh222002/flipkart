import React from 'react'
import FilterFAssured from '../../Media/FlipkartAssured.png'

export function FilterFLipkartAssured({ filter, handleFilter }) {
    return (
        <section className='catalogueFilterFAssuredContainer'>
            <label htmlFor='F_Assured' className='catalogueFilterFAssuredLabel' >
                <input id='F_Assured' name='F_Assured' type="checkbox" className="catalogueFilterFAssuredInput" onClick={(e) => handleFilter(e)} />
                <div className={`catalogueFilterFAssuredDummyInput ${filter.F_Assured && 'active'}`}></div>
                <div className="catalogueFilterFAssuredLogoContainer">
                    <img src={FilterFAssured} alt="FlipkartAssured" className="catalogueFilterFAssuredLogo" />
                </div>
            </label>
            <div className="catalogueFilterFAssuredQuestionContainer">
                <span className="catalogueFilterFAssuredQuestion">?</span>
            </div>
        </section>
    )
}
