import './homeContent.css'
import Slide1 from "../../Media/Slide1.webp"
import Slide2 from "../../Media/Slide2.webp"
import Slide3 from "../../Media/Slide3.webp"
import Slide4 from "../../Media/Slide4.webp"
import SliderImageContent, { SlideLeftBtn, SlideRighttBtn } from './SliderImageContent'
import { useEffect } from 'react'

let ImageSlider = () => {
    

    let imageIndex = 1
    let interValId

    const autoSlide = (content, images) => {

        interValId = setInterval(() => {
            ++imageIndex
            slideImage(content, images)
        }, 2000)
    }

    const slideImage = (content, images) => {
        //
        imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex

        console.log(imageIndex);
        //
        content.style.transform = `translate(-${imageIndex * 100}vw)`
    }

    useEffect( () => {
        // const wrapper = document.querySelector(".imageSliderContainer")
        const content = document.querySelector(".imageSlider")
        const images = document.querySelectorAll(".sliderImageContentContainer")
        // const buttons = document.querySelectorAll(".homeSliderButton")

        autoSlide(content, images)

    })

    return (
        <HomeContent >
            <div className="imageSliderContainer">
                <SlideLeftBtn />
                <div className="imageSlider">
                    <SliderImageContent image={Slide1} />
                    <SliderImageContent image={Slide2} />
                    <SliderImageContent image={Slide3} />
                    <SliderImageContent image={Slide4} />
                </div>
                <SlideRighttBtn />
            </div>
        </HomeContent>
    )
}

export default ImageSlider