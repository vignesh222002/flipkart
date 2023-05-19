import { useDispatch, useSelector } from 'react-redux';
import FilterFAssured from '../../../Media/FlipkartAssured.png'
import { useEffect } from 'react';
import { didUpdateF_Assured, updateF_Assured } from '../../../state/filter/Filter';

export function FilterFLipkartAssured() {
    let filter = useSelector((state) => state.filter.F_Assured)
    let dispatch = useDispatch()

    function handleFilter() {
        // console.log("F_Assured Clicked");
        (filter) ? (dispatch(didUpdateF_Assured())) : (dispatch(updateF_Assured()))
      }

    return (
        <section className='catalogueFilterFAssuredContainer' >
            <div className='catalogueFilterFAssuredLabel' onClick={handleFilter}>
                <div className={`catalogueFilterFAssuredDummyInput ${filter && 'active'}`}></div>
                <div className="catalogueFilterFAssuredLogoContainer">
                    <img src={FilterFAssured} alt="FlipkartAssured" className="catalogueFilterFAssuredLogo" />
                </div>
            </div>
            <div className="catalogueFilterFAssuredQuestionContainer">
                <span className="catalogueFilterFAssuredQuestion">?</span>
            </div>
        </section>
    )
}