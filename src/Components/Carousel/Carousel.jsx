import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'
// import mock from "./mock.json"
import CarouselContent from './CarouselContent'
import axios from 'axios'
import { IP, Port } from '../../IP Address/IPAddress'
import HomeContent from '../HomePage/homeContent'

function Carousel({ head, to, api }) {

    return (
        <HomeContent>
            <div className='carouselContainer'>
                <div className="carouselLeft">
                    <h2 className="carouselLeftHead">Top Deals on {head}</h2>
                    <div className='carouselLeftLinkContainer'>
                        <a className='carouselLeftLink' href={to}>VIEW ALL</a>
                    </div>
                </div>
                <div style={{ width: "calc(100% - 230px)" }}>
                    <CarouselContent api={api} to={to} />
                </div>
            </div>
        </HomeContent>
    )
}

export default Carousel