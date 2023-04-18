import { useContext, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Navbar2 from "../../Components/NavBar2/Navbar2"
import { UserContext } from "../../Components/Context/UserInfoContext"


let HomePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    let userInfo = useContext(UserContext)
    
    let login = userInfo.user.isLogin
    console.log(login)

    return (
        <>
            <NavbarMain navbarLoginBtn={!login} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin}/>
            <Navbar2 />
            {loginActive && <LoginPopup style={{right: '32%'}} setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            {callLogin && <LoginSignupModal setCallLogin={setCallLogin}/>}
            <Footer />
        </>
    )
}

export default HomePage