import React from 'react'
import './carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SlideLeftBtn, SlideRighttBtn } from '../HomePage/SliderImageContent';
import CarouselCard from './CarouselCard';

function SampleNextArrow({ onClick }) {
  return (
    <SlideRighttBtn onClick={onClick} />
  )
}

function SamplePrevArrow({ onClick }) {
  return (
    <SlideLeftBtn onClick={onClick} />
  );
}

function CarouselContent({ data, to }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  }

  let mock = data[0]

  return (
    <div className='carousel'>
      <div className="carouselContent">
        <Slider {...settings}>
          {data.map((data) => <CarouselCard data={data} to={to} /> )}
        </Slider >
      </div>
    </div>
  )
}

export default CarouselContent