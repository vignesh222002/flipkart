import { useContext, useState, useEffect } from "react"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Navbar2 from "../../Components/NavBar2/Navbar2"
import { UserContext } from "../../Components/Context/UserInfoContext"
import UserPopup from "../../Components/NavBar/UserPopup"


let HomePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let [profileActive, setProfileActive] = useState(false)
    let userInfo = useContext(UserContext)
    
    let isLogin = userInfo.user.isLogin
    // console.log(login)

    return (
        <>
            <NavbarMain navbarLoginBtn={!isLogin} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={isLogin} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin} setProfileActive={setProfileActive}/>
            <Navbar2 />
            {loginActive && <LoginPopup style={{right: '32%'}} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            {profileActive && <UserPopup style={{right: '32%'}} setProfileActive={setProfileActive} />}
            {callLogin && <LoginSignupModal setCallLogin={setCallLogin}/>}
            <Footer />
        </>
    )
}

export default HomePage

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2ODE4OTY4MzZ9.xzdI2cpRZBeYoR6zCEL4BVQkjC6aKWBTG0LO3IxuyqY
