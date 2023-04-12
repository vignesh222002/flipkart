import { useState } from "react"
import './ProfilePage.css'
import NavbarMain from "../../Components/NavBar/NavbarMain"
import Sector from "../../Components/Sector/Sector"
import LoginPopup from "../../Components/NavBar/LoginPopUP"
import MorePopup from "../../Components/NavBar/MorePopup"
import Footer from "../../Components/Footer/Footer"
import LoginSignupModule from "../../Components/LoginSignupModule/LoginSignupModule"

let ProfilePage = () => {
    let [loginActive, setLoginActive] = useState(false)
    let [moreActive, setMoreActive] = useState(false)
    let [callLogin, setCallLogin] = useState(false)
    
    let login = false

    return (
        <div className="profilePageBody">
            <NavbarMain navbarLoginBtn={true} navbarBecameSeller={true} navbarMore={true} navbarCart={true} navbarUser={login} setLoginActive={setLoginActive} setMoreActive={setMoreActive} setCallLogin={setCallLogin}/>
            {loginActive && <LoginPopup setLoginActive={setLoginActive} />}
            {moreActive && <MorePopup setMoreActive={setMoreActive}/>}
            <Sector />
            <LoginSignupModule />
            <Footer />
        </div>
    )
}

export default ProfilePage