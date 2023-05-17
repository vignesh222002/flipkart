import { useContext, useState, useEffect } from "react"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import UserPopup from "../../Components/NavBar/UserPopup"
import Sector from "../../Components/Sector/Sector"
import CataloguePageContent from "../../Components/catalogue/Catalogue"

let CataloguePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let redirectPath = "/"

    let width = window.innerWidth
    let loginPopupStyle
    let morePopupStyle
    let userPopupStyle
    if (width > "1366") {
        loginPopupStyle = { right: "33.5%" }
        morePopupStyle = { right: "19%" }
        userPopupStyle = { right: "32%" }
    }
    else if (width > "900") {
        loginPopupStyle = { right: "32%" }
        morePopupStyle = { right: "12%" }
        userPopupStyle = { right: "30.5%" }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    useEffect(() => {
        scrollToTop()
    }, [])
    let isLogin = !(!localStorage.getItem("token"))

    return (
        <>
            <NavbarMain navbarLoginBtn={!isLogin} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={isLogin} setLoginActive={setLoginActive} moreActive={moreActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} profileActive={profileActive} setProfileActive={setProfileActive} />
            {loginActive && <LoginPopup style={loginPopupStyle} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup style={morePopupStyle} setMoreActive={setMoreActive} />}
            {profileActive && <UserPopup redirectPath={redirectPath} style={userPopupStyle} setProfileActive={setProfileActive} />}
            {callLogin && <LoginSignupModal redirectPath={redirectPath} callLogin={callLogin} setCallLogin={setCallLogin} />}
            <Sector />
            <CataloguePageContent />
            <Footer />
        </>
    )
}

export default CataloguePage