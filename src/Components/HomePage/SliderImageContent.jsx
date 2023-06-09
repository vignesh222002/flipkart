
export let SlideLeftBtn = ({ onClick, hideButton = false }) => {
    return (
        <div className={`slideLeftBtn homeSliderButton ${hideButton ? "hideButton" : ""}`} id='prev' onClick={onClick}>
            <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path></svg>
        </div>
    )
}

export let SlideRighttBtn = ({ onClick, hideButton = false }) => {
    // console.log(hideButton, "btn")
    return (
        <div className={`slideRightBtn homeSliderButton ${hideButton ? "hideButton" : ""}`} id='next' onClick={onClick}>
            <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="slideRightBtnSvg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path></svg>
        </div>
    )
}

let SliderImageContent = ({ image }) => {

    return (
        <div className="sliderImageContentContainer">
            <div className="sliderImageContent">
                <a href="#" className="sliderImageLink">
                    <div className="sliderImageLinkContent">
                        <img src={image} alt="SliderImage" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SliderImageContent