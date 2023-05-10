import React, { useEffect, useState } from 'react'
import './carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SlideLeftBtn, SlideRighttBtn } from '../HomePage/SliderImageContent';
import CarouselCard from './CarouselCard';
import axios from 'axios'
import { IP, Port } from '../../IP Address/IPAddress'

function SampleNextArrow({ onClick }) {
  return (
    <SlideRighttBtn onClick={onClick} />
  )
}
function SamplePrevArrow({ onClick }) {
  return (
    <SlideLeftBtn onClick={onClick} />
  )
}

function CarouselContent({ api, to }) {
  const responsive = [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: responsive

  }
  let [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`http://${IP}:${Port}/getSubcategoryProducts/${api}`)
            .then((res) => {
                // console.log(res.data)
                setData(res.data)
            })
    },[])

  return (
    <div className='carousel'>
      <div className="carouselContent">
        {
          data != null && <Slider {...settings}>
          {data.map((data) => <CarouselCard key={data.id} data={data} to={to} /> )}
        </Slider >
        }
        
      </div>
    </div>
  )
}

export default CarouselContent