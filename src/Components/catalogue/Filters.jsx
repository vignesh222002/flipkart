import React, { useEffect, useState } from 'react'
import FilterFAssured from '../../Media/FlipkartAssured.png'
import { useDispatch, useSelector } from 'react-redux'
import { didUpdateDiscount, didUpdateF_Assured, didUpdateRating, updateDiscount, updateF_Assured, updateRating } from '../../state/filter/Filter'

export function FilterCardCancelButton({content, name}) {
    let dispatch = useDispatch()
    let [line, setLine] = useState(false)

    const contentStyle = line ? { textDecoration: "line-through" } : {}

    function handleClear() {
        if(name === "F_Assured") dispatch(didUpdateF_Assured());
        if(name === "discount") dispatch(didUpdateDiscount());
        if(name === "rating") dispatch(didUpdateRating());
    }

    return (
        <div id={name} className="filterCardCancelButtonContainer" onMouseOver={() => setLine(true)} onMouseLeave={() => setLine(false)} onClick={() => handleClear()}>
            <div className="filterCardCancelButtonLogo">✕</div>
            <div className="filterCardCancelButtonContent" style={contentStyle}>{content}</div>
        </div>
    )
}

export function FilterClearFilterButton({ handleClear }) {
    return (
        <div className="catalogueFilterDiscountClearContainer" onClick={(e) => handleClear(e)}>
            <div className="catalogueFilterDiscountClearLogo">✕</div>
            <div className="catalogueFilterDiscountClear">Clear all</div>
        </div>
    )
}

export function FilterSelectCheckBox({ filterValue, name, description, handlerFunction }) {
    return (
        <div className="filterSelectCheckBoxContainer">
            <label htmlFor={name} className="filterSelectCheckBoxLabel">
                <input id={name} name={name} type="checkbox" className="catalogueFilterFAssuredInput" onClick={(e) => handlerFunction(e)} />
                <div className={`catalogueFilterFAssuredDummyInput ${(filterValue == name) && 'active'}`}></div>
                <div className="filterSelectCheckBoxDescription">{name}{description}</div>
            </label>
        </div>
    )
}

export function FilterFLipkartAssured() {
    let filter = useSelector((state) => state.filter.F_Assured)
    let dispatch = useDispatch()

    function handleFilter(e) {
        let name = e.target.name
        if(name == "F_Assured") {
          (filter) ? (dispatch(didUpdateF_Assured())) : (dispatch(updateF_Assured()))
        }
      }

    return (
        <section className='catalogueFilterFAssuredContainer'>
            <label htmlFor='F_Assured' className='catalogueFilterFAssuredLabel' >
                <input id='F_Assured' name='F_Assured' type="checkbox" className="catalogueFilterFAssuredInput" onClick={(e) => handleFilter(e)} />
                <div className={`catalogueFilterFAssuredDummyInput ${filter && 'active'}`}></div>
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

export function FilterDiscount() {
    let filter = useSelector((state) => state.filter.discount)
    let dispatch = useDispatch()
    let [dropdown, setDropdown] = useState(true)
    const description = "% or more"
    const arrowStyle = dropdown ? ({ transform: "rotate(90deg)" }) : {}

    // useEffect(() => console.log("discount ", filter), [filter])

    function handlerFunction(e) {
        dispatch(updateDiscount(e.target.name))
    }
    function handleClear(e) {
        dispatch(didUpdateDiscount())
    }

    return (
        <section className='catalogueFilterDiscountContainer'>
            <div className="catalogueFilterDiscountHeadContainer" onClick={() => setDropdown(!dropdown)}>
                <div className="catalogueFilterDiscountHead">Discount</div>
                <svg style={arrowStyle} width="16" height="11" viewBox="0 0 16 27" className="catalogueFilterDiscountHeadArrow" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
            </div>
            {dropdown &&
                <div className="catalogueFilterDiscountContent">
                    {filter && <FilterClearFilterButton handleClear={handleClear} />}
                    <FilterSelectCheckBox filterValue={filter} name="90" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="80" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="70" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="60" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="50" description={description} handlerFunction={handlerFunction} />
                </div>
            }
        </section>
    )
}

export function FilterRating() {
    let filter = useSelector((state) => state.filter.rating)
    let dispatch = useDispatch()
    let [dropdown, setDropdown] = useState(true)
    const description = "★ & above"
    const arrowStyle = dropdown ? ({ transform: "rotate(90deg)" }) : {}

    // useEffect(() => console.log("rating ", filter), [filter])

    function handlerFunction(e) {
        dispatch(updateRating(e.target.name))
    }
    function handleClear(e) {
        dispatch(didUpdateRating())
    }

    return (
        <section className='catalogueFilterDiscountContainer'>
            <div className="catalogueFilterDiscountHeadContainer" onClick={() => setDropdown(!dropdown)}>
                <div className="catalogueFilterDiscountHead">Rating</div>
                <svg style={arrowStyle} width="16" height="11" viewBox="0 0 16 27" className="catalogueFilterDiscountHeadArrow" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
            </div>
            {dropdown &&
                <div className="catalogueFilterDiscountContent">
                    {filter && <FilterClearFilterButton handleClear={handleClear} />}
                    <FilterSelectCheckBox filterValue={filter} name="4" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="3" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="2" description={description} handlerFunction={handlerFunction} />
                    <FilterSelectCheckBox filterValue={filter} name="1" description={description} handlerFunction={handlerFunction} />
                </div>
            }
        </section>
    )
}