import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CarouselCard({ data, to }) {
    let [zoom, setZoom] = useState({
        transform: "scale(1)"
    })
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

    return (
        <div className="carouselCard" onMouseOver={handleZoomIn} onMouseLeave={() => handleZoomOut()}>
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