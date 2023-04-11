import { useState } from "react"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModal from "../../Components/LoginPage/LoginSignupModal"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Navbar2 from "../../Components/NavBar2/Navbar2"


let HomePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    
    let login = false

    return (
        <>
            <NavbarMain navbarLoginBtn={true} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin}/>
            <Navbar2 />
            {loginActive && <LoginPopup setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            {callLogin && <LoginSignupModal setCallLogin={setCallLogin}/>}
            <Footer />
        </>
    )
}

export default HomePage