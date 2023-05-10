import React from 'react'
import './carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SlideLeftBtn, SlideRighttBtn } from '../HomePage/SliderImageContent';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    ><SlideRighttBtn /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    ><SlideLeftBtn /></div>
  );
}

function CarouselContent({ data, to }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  {/* {data.map((data) => {
            <div className="carouselCard">
              <Link className="carouselCardLink" to={to}>
                <div className="carouselCardImageContainer">
                  <img src={data.image_url} alt="" className="carouselCardImage" />
                </div>
              </Link>
            </div>
          })} */}

  return (
    // <div className='carousel'>
    //   <div className="carouselContent">
        <Slider {...settings}>
          <div>Content1</div>
          <div>Content2</div>
          <div>Content3</div>
          <div>Content4</div>
          <div>Content5</div>
          <div>Content6</div>
          <div>Content7</div>
          <div>Content8</div>
          <div>Content9</div>
        </Slider >
      // </div>
    // </div>
  )
}

export default CarouselContent