import React from 'react'
import './Catalogue.css'
import { Link } from 'react-router-dom'

export function CatalogueHeadBreadcums({ category }) {
    return (
        <div>
            <div className="catalogueHeadBreadcums">
                <Link to="/" className="catalogueHeadBreadcumsContent">Home</Link>
                <svg style={{ transform: "rotate(180deg)", verticalAlign: "middle", marginTop: "2px" }} width="20" height="7" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
            </div>
            <div className="catalogueHeadBreadcums">
                <Link className="catalogueHeadBreadcumsContent">{category}</Link>
            </div>
        </div>
    )
}

export function CatalogueHeadShowing({ length, category }) {
    return (
        <div className='catalogueHeadShowing'>Showing 1 – {length ? length : 10} of {length ? length : 10} results for "{category ? category : "category"}"</div>
    )
}

export function CatalogueHead() {
    return (
        <div className='catalogueHeadProductContentContainer'>
            <div className="catalogueHeadProductContent">
                <CatalogueHeadBreadcums />
                <CatalogueHeadShowing />
            </div>
        </div>
    )
}

export function CatalogueProductCard() {
    const data = {
        "id": 24,
        "image_url": "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/d/j/v/1-1841nc01-titan-men-original-imagg6wvczh7hf8j.jpeg?q=70",
        "name": "Titan Edge Squircle Analog Watch - For Men 1841NC01",
        "highlights": null,
        "mrp": 41995,
        "discount": "1",
        "f_assured": true,
        "category": "Watches Store",
        "brand": "Titan",
        "rating": 4,
        "price": 41575.05
    }

    return (
        <div className="catalogueProductCardContainer">
            <div className="catalogueProductCardContent">
                <Link className=''>

                </Link>
            </div>
        </div>
    )
}