import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CarouselCard({ data, to, api }) {
    let [zoom, setZoom] = useState({
        transform: "scale(1)"
    })
    let navigate = useNavigate()
    function handleZoomIn() {
        setZoom({
            transform: "scale(1.05)"
        })
    }
    function handleZoomOut() {
        setZoom({
            transform: "scale(1)"
        })
    }
    function handleClick() {
        navigate(`catalogue/${api}`)
    }

    return (
        <div className="carouselCard" onClick={() => handleClick()} onMouseOver={handleZoomIn} onMouseLeave={() => handleZoomOut()}>
            <div className="carouselCardLink">
                <Link to={to}>
                    <div className="carouselCardImageContainer" style={zoom}>
                        <img src={data.image_url} className="carouselCardImage" />
                    </div>
                    <div className="carouselCardBrand">{data.brand}</div>
                    <div className="carouselCardPrice">Under  ₹{Math.round(data.price)}</div>
                    <div className="carouselCardCategory">{data.category}</div>
                </Link>
            </div>

        </div>
    )
}

export default CarouselCard