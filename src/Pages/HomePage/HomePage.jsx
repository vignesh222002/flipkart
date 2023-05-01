import { useContext, useState, useEffect } from "react"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Navbar2 from "../../Components/NavBar2/Navbar2"
import { UserContext } from "../../Components/Context/UserInfoContext"
import UserPopup from "../../Components/NavBar/UserPopup"
import HomeContent from "../../Components/HomePage/homePage"

let HomePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let userInfo = useContext(UserContext)
    let redirectPath="/"
    
    let isLogin = userInfo.user.isLogin
    // console.log(login)

    return (
        <>
            <NavbarMain navbarLoginBtn={!isLogin} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={isLogin} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} setProfileActive={setProfileActive}/>
            <Navbar2 />
            {loginActive && <LoginPopup style={{right: '32%'}} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            {profileActive && <UserPopup redirectPath={redirectPath} style={{right: '32%'}} setProfileActive={setProfileActive} />}
            {callLogin && <LoginSignupModal redirectPath={redirectPath} callLogin={callLogin} setCallLogin={setCallLogin}/>}
            <HomeContent />
            <Footer />
        </>
    )
}

export default HomePage