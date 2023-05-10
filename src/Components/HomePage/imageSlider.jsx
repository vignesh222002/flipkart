import './homeContent.css'
import Slide1 from "../../Media/Slide1.webp"
import Slide2 from "../../Media/Slide2.webp"
import Slide3 from "../../Media/Slide3.webp"
import Slide4 from "../../Media/Slide4.webp"
import Slide5 from "../../Media/Slide5.webp"
import Slide6 from "../../Media/Slide6.webp"
import SliderImageContent, { SlideLeftBtn, SlideRighttBtn } from './SliderImageContent'
import { useEffect } from 'react'
import HomeContent from './homeContent'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

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

let ImageSlider = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 220,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <HomeContent >
            <div className="imageSliderContainer">
                <div className="imageSlider">
                    <Slider {...settings}>
                        <SliderImageContent image={Slide1} />
                        <SliderImageContent image={Slide2} />
                        <SliderImageContent image={Slide3} />
                        <SliderImageContent image={Slide4} />
                        <SliderImageContent image={Slide5} />
                        <SliderImageContent image={Slide6} />
                    </Slider>
                </div>
            </div>
        </HomeContent>
    )
}

export default ImageSlider