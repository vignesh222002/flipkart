import { useContext, useState, useEffect } from "react"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Navbar2 from "../../Components/NavBar2/Navbar2"
import UserPopup from "../../Components/NavBar/UserPopup"
import ImageSlider from "../../Components/HomePage/imageSlider"
import Carousel from "../../Components/Carousel/Carousel"

let HomePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let redirectPath="/"

    let width =  window.innerWidth
    let loginPopupStyle
    let morePopupStyle
    let userPopupStyle
    if(width > "1366") {
        loginPopupStyle = { right: "33.5%" }
        morePopupStyle = { right: "19%" }
        userPopupStyle = { right: "32%" }
    }
    else if (width > "900") {
        loginPopupStyle = { right: "32%" }
        morePopupStyle = { right: "12%" }
        userPopupStyle = { right: "30.5%" }
    }
    
    let isLogin = !(!localStorage.getItem("token"))
    // console.log(login)

    return (
        <>
            <NavbarMain navbarLoginBtn={!isLogin} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={isLogin} setLoginActive={setLoginActive} moreActive={moreActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} profileActive={profileActive} setProfileActive={setProfileActive}/>
            <Navbar2 />
            {loginActive && <LoginPopup style={loginPopupStyle} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup style={morePopupStyle} setMoreActive={setMoreActive}/>}
            {profileActive && <UserPopup redirectPath={redirectPath} style={userPopupStyle} setProfileActive={setProfileActive} />}
            {callLogin && <LoginSignupModal redirectPath={redirectPath} callLogin={callLogin} setCallLogin={setCallLogin}/>}
            <ImageSlider />
            <Carousel api="112" head="Watch" />
            <Carousel api="72" head="Watch" />
            <Footer />
        </>
    )
}

export default HomePage