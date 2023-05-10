import React from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'
import mock from "./mock.json"
import CarouselContent from './CarouselContent'

function Carousel({ head, to }) {
    return (
        // <div style={{ display: "flex" }}>
        <div className='carouselContainer'>
            <div className="carouselLeft">
                <h2 className="carouselLeftHead">Top Deals on {head}</h2>
                <div className='carouselLeftLinkContainer'>
                    <a className='carouselLeftLink' href={to}>VIEW ALL</a>
                </div>
            </div>
            <div style={{ width: "calc(100% - 230px)" }}>
                <CarouselContent data={mock} to={to} />
            </div>
        </div>

        // </div>
    )
}

export default Carousel