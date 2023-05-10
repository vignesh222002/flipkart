import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'
import mock from "./mock.json"
import CarouselContent from './CarouselContent'
import axios from 'axios'
import { IP, Port } from '../../IP Address/IPAddress'

function Carousel({ head, to, api }) {
    // let mock

    // useEffect(() => {
    //     axios.get(`http://${IP}:${Port}/getSubcategoryProducts/${api}`)
    //         .then((res) => {
    //             console.log(res.data)
    //             mock = res.data
    //         })
    // })

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