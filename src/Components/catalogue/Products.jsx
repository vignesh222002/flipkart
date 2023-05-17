import React, { useState } from 'react'
import './Catalogue.css'
import { Link } from 'react-router-dom'
import FAssured from '../../Media/FlipkartAssured.png'

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

export function CatalogueProductDisplay({children}) {
    return <div className="catalogueProductDisplayContainer">{children}</div>
}

export function CatalogueProductCard(to) {
    const [cardActive, setCardActive] = useState(false)

    const width =  window.innerWidth
    let cardHeight
    let imageHeight
    if(width > "1366" ) {
        cardHeight = { height: "500px" }
        imageHeight = { height: "396px" }
    }
    else if(width <= "1366" ) {
        cardHeight = { height: "300px" }
        imageHeight = { height: "185px" }
    }

    const data = {
        "id": 24,
        "image_url": "https://rukminim1.flixcart.com/image/612/612/jwzabgw0/watch/c/h/g/ls2821-limestone-original-imafhjcr3xkxgqaz.jpeg?q=70",
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
    const detailStyle = !cardActive ? { transform: "translate3d(0px, 0px, 0px)" } : { transform: "translate3d(0px, -17px, 0px)" }
    const cardStyle = cardActive ? { boxShadow: "0 3px 16px 0 rgba(0,0,0,.11)" } : {}

    return (
        <div className="catalogueProductCardContainer" style={cardHeight} onMouseOver={() => setCardActive(true)} onMouseLeave={() => setCardActive(false)}>
            <div className="catalogueProductCardContent" style={cardStyle}>
                <Link className='catalogueProductCardImageLink' style={imageHeight} to={to}>
                    <img src={data.image_url} alt="Image" className='catalogueProductCardImage' />
                </Link>
                <div style={detailStyle} className="catalogueProductCardDetail">
                    <div className="catalogueProductCardBrand">{data.brand}</div>
                    <Link to={to} className='catalogueProductCardName'>{data.name}</Link>
                    <div className="catalogueProductCardFAssuredContainer">
                        <img src={FAssured} alt="F_Assured" className="catalogueProductCardFAssuredImage" />
                    </div>
                    <Link to={to} className='catalogueProductCardDescription'>
                        <div className="catalogueProductCardDescriptionPrice">₹{data.price}</div>
                        <div className="catalogueProductCardDescriptionMrp">₹{data.mrp}</div>
                        <div className="catalogueProductCardDescriptionDiscount">{data.discount}% off</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}